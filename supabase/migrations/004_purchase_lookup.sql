-- Run this in Supabase SQL Editor.
--
-- Backs the check-purchase-status Edge Function (see
-- supabase/functions/check-purchase-status), which fixes the cross-device
-- purchase detection gap for readers whose email already belongs to an
-- existing account: the confirming device gets signed into THAT existing
-- user id, not the anonymous id the original device is watching, so
-- polling `purchases` by the original device's own user_id can never see
-- it. Resolving by email instead requires reading auth.users, which
-- isn't otherwise queryable — this function is the narrow, service-role-
-- only door for that one lookup.

create or replace function get_user_id_by_email(lookup_email text)
returns uuid
language sql
security definer
set search_path = auth, public
as $$
  select id from auth.users where email = lookup_email limit 1;
$$;

-- Only the service role may call this — never anon or authenticated.
-- It exists purely for check-purchase-status (which itself only ever
-- returns a boolean to the client, never the id or anything else about
-- the account) to use server-side.
revoke all on function get_user_id_by_email(text) from public, anon, authenticated;
grant execute on function get_user_id_by_email(text) to service_role;
