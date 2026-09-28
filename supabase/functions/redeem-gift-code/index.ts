// supabase/functions/redeem-gift-code/index.ts
//
// Called from the site's "Have a code?" box (src/components/RedeemCode.jsx).
// Redeems a gift code for the signed-in reader by calling the
// redeem_gift_code() database function (supabase/migrations/005_gift_codes.sql),
// which checks the code and unlocks every paid title in one transaction.
//
// Anonymous sessions are refused with 'sign_in_required': like a purchase,
// a redeemed code must be tied to an email account so it survives a
// cleared browser or a new device.

import { createClient } from 'npm:@supabase/supabase-js@2';

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

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
  const { data: { user }, error: userError } = await supabaseCaller.auth.getUser();
  if (userError || !user) return new Response('Invalid session', { status: 401, headers: corsHeaders });
  if (user.is_anonymous) return json({ status: 'sign_in_required' });

  let code: unknown;
  try {
    ({ code } = await req.json());
  } catch {
    return new Response('Invalid JSON', { status: 400, headers: corsHeaders });
  }
  if (typeof code !== 'string' || code.trim().length < 4 || code.length > 64) {
    return json({ status: 'invalid' });
  }

  const { data: status, error } = await supabaseAdmin.rpc('redeem_gift_code', { p_code: code, p_user: user.id });
  if (error) {
    console.error('redeem_gift_code failed:', error.message);
    return new Response('Redeem failed', { status: 500, headers: corsHeaders });
  }
  return json({ status });
});
