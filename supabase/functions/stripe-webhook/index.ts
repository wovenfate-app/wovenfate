// supabase/functions/stripe-webhook/index.ts
//
// Stripe calls this directly (not the client) once a payment genuinely
// completes. This is the ONLY place that writes to `purchases` — the
// table's RLS policy has no client-facing insert path on purpose, so
// there's no way to unlock content without a real, Stripe-verified
// payment. Uses the service role key to bypass RLS for this write.
//
// Also sends a branded "your book is ready" email via Resend once the
// purchase is safely recorded. Email delivery is best-effort and never
// allowed to affect the webhook's response: if Resend is unreachable,
// misconfigured, or just slow, we log it and move on. The purchase row
// above is the actual source of truth for what a reader owns — Stripe
// retries a non-2xx response, and retrying the whole webhook because an
// email provider hiccuped would risk re-running side effects for no
// good reason.

import { createClient } from 'npm:@supabase/supabase-js@2';
import Stripe from 'npm:stripe@16';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, {
  apiVersion: '2024-06-20',
});
const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')!;

// Both optional by design: if either is missing, sendPurchaseEmail()
// just skips sending rather than breaking the webhook.
const resendApiKey = Deno.env.get('RESEND_API_KEY');
const siteUrl = Deno.env.get('SITE_URL'); // e.g. https://www.wovenfate.app

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

function escapeHtml(str: string) {
  return str.replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!
  ));
}

// Sends the purchase confirmation. Wrapped entirely in try/catch —
// nothing in here is allowed to throw out to the caller.
async function sendPurchaseEmail(to: string | null | undefined, titleNames: string[]) {
  if (!resendApiKey || !to || titleNames.length === 0) return;

  try {
    const isBundle = titleNames.length > 1;
    const continueUrl = siteUrl || 'https://www.wovenfate.app';

    const heading = isBundle ? 'The full library is yours' : `${titleNames[0]} is yours`;
    const bodyLine = isBundle
      ? `All ${titleNames.length} Wovenfate titles are unlocked on your account, ready whenever you want them:`
      : `Your copy of <strong>${escapeHtml(titleNames[0])}</strong> is unlocked and waiting for you.`;
    const listHtml = isBundle
      ? `<ul style="padding-left:20px;margin:12px 0;color:#cfc9e0;">${titleNames
          .map((n) => `<li style="margin-bottom:4px;">${escapeHtml(n)}</li>`)
          .join('')}</ul>`
      : '';

    const html = `
      <div style="font-family:Georgia,'Times New Roman',serif;background:#17141f;padding:32px 16px;">
        <div style="max-width:480px;margin:0 auto;background:#1f1b2a;border-radius:12px;padding:32px 28px;color:#ece7f5;">
          <p style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#a99be0;margin:0 0 18px;">Wovenfate</p>
          <h1 style="font-size:22px;line-height:1.3;margin:0 0 14px;color:#ffffff;">${escapeHtml(heading)}</h1>
          <p style="font-size:15px;line-height:1.6;color:#cfc9e0;margin:0 0 6px;">${bodyLine}</p>
          ${listHtml}
          <a href="${continueUrl}" style="display:inline-block;margin-top:18px;background:#a297ee;color:#17141f;text-decoration:none;font-weight:600;padding:12px 22px;border-radius:8px;font-family:Georgia,serif;">Continue reading</a>
          <p style="font-size:12.5px;line-height:1.6;color:#8b83a3;margin-top:28px;">Sent because a purchase was just completed on your account. Questions? Just reply to this email, or write to support@wovenfate.app.</p>
        </div>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Wovenfate <hello@wovenfate.app>',
        to,
        reply_to: 'support@wovenfate.app',
        subject: isBundle ? 'Your Wovenfate library is unlocked' : `${titleNames[0]} — unlocked`,
        html,
      }),
    });

    if (!res.ok) {
      console.error('Resend purchase email failed:', res.status, await res.text());
    }
  } catch (err) {
    console.error('Resend purchase email threw:', err.message);
  }
}

Deno.serve(async (req) => {
  const signature = req.headers.get('stripe-signature');
  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature!, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return new Response('Invalid signature', { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const { user_id, type, title_id } = session.metadata ?? {};
    // Hosted Checkout populates customer_details.email once payment
    // completes, regardless of whether a persistent Customer object was
    // created — customer_email is only ever set if pre-filled, so it's
    // checked second as a fallback rather than relied on.
    const customerEmail = session.customer_details?.email ?? session.customer_email ?? null;

    if (!user_id) {
      console.error('Webhook received without user_id:', session.id);
      return new Response('Missing metadata', { status: 400 });
    }

    if (type === 'bundle') {
      // Unlock every currently published title for this user — one
      // purchases row per title, same shape as a single purchase, so
      // the existing per-title unlock check (usePurchase) needs zero
      // changes to recognize a bundle-purchased title as unlocked.
      const { data: titles, error: titlesError } = await supabaseAdmin
        .from('titles')
        .select('id, name')
        .eq('is_published', true);

      if (titlesError || !titles) {
        console.error('Failed to load titles for bundle unlock:', titlesError?.message);
        return new Response('DB error', { status: 500 });
      }

      const rows = titles.map((t) => ({
        user_id,
        title_id: t.id,
        platform: 'stripe',
        receipt: session.id,
      }));

      const { error } = await supabaseAdmin
        .from('purchases')
        .upsert(rows, { onConflict: 'user_id,title_id' });

      if (error) {
        console.error('Failed to record bundle purchase:', error.message);
        return new Response('DB error', { status: 500 });
      }

      await sendPurchaseEmail(customerEmail, titles.map((t) => t.name));
    } else {
      if (!title_id) {
        console.error('Webhook received without title_id for single purchase:', session.id);
        return new Response('Missing metadata', { status: 400 });
      }

      const { error } = await supabaseAdmin.from('purchases').upsert({
        user_id,
        title_id,
        platform: 'stripe',
        receipt: session.id,
      }, { onConflict: 'user_id,title_id' });

      if (error) {
        console.error('Failed to record purchase:', error.message);
        return new Response('DB error', { status: 500 });
      }

      // Best-effort: fetch the title's display name for the email. The
      // purchase itself is already safely recorded regardless of
      // whether this lookup or the email below succeeds.
      const { data: title } = await supabaseAdmin
        .from('titles')
        .select('name')
        .eq('id', title_id)
        .single();

      await sendPurchaseEmail(customerEmail, [title?.name ?? 'Your book']);
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
