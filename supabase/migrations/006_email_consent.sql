-- Optional "email me when new books come out" consent, one row per saved
-- account. Records what the reader agreed to and when, as UK GDPR expects
-- for consent-based marketing: the exact wording shown, where they gave it,
-- and when it was given or withdrawn. Rows are written by the reader's own
-- signed-in session (never a guest session), and only for the email that
-- session is signed in as, so nobody can opt in someone else's address.
create table if not exists public.email_consent (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  opted_in boolean not null,
  wording text not null,
  source text not null check (source in ('save_account', 'account_settings')),
  consented_at timestamptz,
  withdrawn_at timestamptz,
  updated_at timestamptz not null default now()
);

alter table public.email_consent enable row level security;

-- A signed-in (non-guest) reader can see and change only their own row,
-- for their own confirmed email.
create policy "own consent: read" on public.email_consent
  for select using (auth.uid() = user_id);

create policy "own consent: add" on public.email_consent
  for insert with check (
    auth.uid() = user_id
    and coalesce((auth.jwt() ->> 'is_anonymous')::boolean, false) = false
    and lower(email) = lower(auth.jwt() ->> 'email')
  );

create policy "own consent: change" on public.email_consent
  for update using (auth.uid() = user_id)
  with check (
    auth.uid() = user_id
    and coalesce((auth.jwt() ->> 'is_anonymous')::boolean, false) = false
    and lower(email) = lower(auth.jwt() ->> 'email')
  );
