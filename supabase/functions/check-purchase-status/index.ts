// supabase/functions/check-purchase-status/index.ts
//
// Cross-device purchase detection, resolved by EMAIL rather than by the
// calling device's own user id. Fixes a real gap in the original design:
// when a reader's email already belongs to an existing account,
// confirming the magic link signs whichever device clicks it into that
// EXISTING, DIFFERENT user id (see useEmailAuth.js's "already
// registered" fallback) — not the anonymous id the original (waiting)
// device started with. That device's own session never changes, so
// polling `purchases` by its own user_id (the original cross-device fix)
// can never see a purchase recorded under a different, correct id.
//
// Requires a valid (possibly anonymous) session, same as the other
// client-facing functions — this is a free anti-abuse gate, not an
// identity check: the lookup itself is keyed entirely on the email in
// the request body, not on whoever is calling. Only ever returns a
// boolean; the resolved user id and everything else about the account
// stays server-side.

import { createClient } from 'npm:@supabase/supabase-js@2';

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: corsHeaders });

  const authHeader = req.headers.get('Authorization');
  if (!authHeader) return new Response('Missing auth', { status: 401, headers: corsHeaders });

  const supabaseCaller = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: authHeader } } }
  );
  const { data: { user }, error: callerError } = await supabaseCaller.auth.getUser();
  if (callerError || !user) return new Response('Invalid session', { status: 401, headers: corsHeaders });

  let body: { email?: string; titleId?: string; bundle?: boolean };
  try {
    body = await req.json();
  } catch {
    return new Response('Invalid JSON', { status: 400, headers: corsHeaders });
  }

  const { email, titleId, bundle } = body;
  if (!email || (!titleId && !bundle)) {
    return new Response('Missing email or titleId/bundle', { status: 400, headers: corsHeaders });
  }

  const { data: userId, error: lookupError } = await supabaseAdmin.rpc('get_user_id_by_email', {
    lookup_email: email,
  });

  // No matching account yet, or the lookup itself failed — either way,
  // "not purchased" is the correct, safe answer; never treat this as
  // something to surface to the reader as an error.
  if (lookupError || !userId) {
    if (lookupError) console.error('Email lookup failed:', lookupError.message);
    return new Response(JSON.stringify({ purchased: false }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  if (bundle) {
    const [{ data: titles, error: titlesError }, { data: owned, error: ownedError }] = await Promise.all([
      supabaseAdmin.from('titles').select('id').eq('is_published', true),
      supabaseAdmin.from('purchases').select('title_id').eq('user_id', userId),
    ]);
    if (titlesError || ownedError || !titles) {
      console.error('Bundle status check failed:', titlesError?.message || ownedError?.message);
      return new Response(JSON.stringify({ purchased: false }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify({ purchased: (owned ?? []).length >= titles.length }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const { data, error } = await supabaseAdmin
    .from('purchases')
    .select('id')
    .eq('user_id', userId)
    .eq('title_id', titleId)
    .maybeSingle();
  if (error) {
    console.error('Purchase status check failed:', error.message);
    return new Response(JSON.stringify({ purchased: false }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ purchased: !!data }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
});
