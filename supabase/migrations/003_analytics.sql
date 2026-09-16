-- Run this in Supabase SQL Editor — adds basic reader-behavior analytics.
--
-- Insert-only from the client, on purpose: there is no select policy
-- below, so the anon/authenticated roles get RLS's default deny on
-- read. Query this table from the SQL Editor (or with the service-role
-- key) — never from client code. Raw event payloads shouldn't be
-- fetchable by every anonymous reader's own session.

create table analytics_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  title_id text references titles(id) on delete set null,
  event_type text not null,
  payload jsonb default '{}',
  client_ts timestamptz,                 -- when the browser fired it
  created_at timestamptz default now()   -- when Supabase received it
);

create index analytics_events_type_created_idx on analytics_events (event_type, created_at);
create index analytics_events_title_type_idx on analytics_events (title_id, event_type);

alter table analytics_events enable row level security;

-- Same shape as the reading_progress/purchases policies: a reader
-- (anonymous or upgraded to email) can only ever log events under
-- their own user_id, never anyone else's.
create policy "Users can log their own analytics events"
  on analytics_events for insert
  to authenticated
  with check (auth.uid() = user_id);
