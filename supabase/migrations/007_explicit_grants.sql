-- Explicit Data API grants for every table, least privilege.
--
-- Why: from 30 October 2026 Supabase stops automatically granting API
-- access to new tables in `public`, including when the schema is rebuilt
-- from these migrations (new project, preview branch, `supabase db reset`).
-- Until now every table relied on the old blanket default (anon and
-- authenticated could do anything the table allowed, with RLS as the only
-- guard). This states each table's access outright and narrows it to what
-- its RLS policies actually permit, so nothing that works today changes:
-- an operation with no policy was already refused by RLS.
--
-- Roles: guests use Supabase anonymous sign-in, so both guests and saved
-- accounts call the API as `authenticated`; `anon` is a visitor whose
-- session hasn't started yet. Edge functions, the seed and the stats
-- scripts use `service_role`, which bypasses RLS.
--
-- Every new table needs its own block here (or in its own migration).

-- Start from nothing for the two public-facing roles…
revoke all on public.titles, public.nodes, public.reading_progress, public.purchases,
  public.analytics_events, public.gift_codes, public.gift_code_redemptions, public.email_consent
  from anon, authenticated;

-- …then grant back exactly what each table's policies allow.

-- Catalogue: anyone can read published titles and their scenes.
grant select on public.titles to anon, authenticated;
grant select on public.nodes to anon, authenticated;

-- Reading progress: each reader manages their own rows.
grant select, insert, update, delete on public.reading_progress to anon, authenticated;

-- Purchases: readers can see their own; only Stripe's webhook (service
-- role) writes them.
grant select on public.purchases to anon, authenticated;

-- Analytics: signed-in sessions (guests included) log their own events;
-- nobody reads them through the API.
grant insert on public.analytics_events to authenticated;

-- Email consent: readers read and change their own choice (RLS limits it
-- to signed-in accounts and their own email).
grant select, insert, update on public.email_consent to anon, authenticated;

-- Gift codes: server only. Readers redeem through the redeem-gift-code
-- edge function, which calls redeem_gift_code() as the service role.
-- (No grants for anon/authenticated on gift_codes or gift_code_redemptions.)

-- Service role: full access everywhere (it bypasses RLS by design).
grant select, insert, update, delete on public.titles, public.nodes, public.reading_progress,
  public.purchases, public.analytics_events, public.gift_codes, public.gift_code_redemptions,
  public.email_consent
  to service_role;
