-- Gift codes: a code unlocks every paid title (the same thing the bundle
-- unlocks) for free, e.g. for creators trying the app. One code per
-- recipient so redemptions can be traced; `label` says who it was for.
--
-- Both tables have RLS on and NO policies: the browser can never read or
-- write them. Redeeming goes through the redeem-gift-code edge function,
-- which calls redeem_gift_code() with the service role.

create table gift_codes (
  code text primary key check (code = upper(code)),
  label text,                                   -- who it's for, e.g. '@somecreator'
  max_redemptions int not null default 1 check (max_redemptions > 0),
  redemption_count int not null default 0,
  expires_at timestamptz,
  created_at timestamptz not null default now()
);

create table gift_code_redemptions (
  code text not null references gift_codes(code) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  redeemed_at timestamptz not null default now(),
  primary key (code, user_id)
);

alter table gift_codes enable row level security;
alter table gift_code_redemptions enable row level security;

-- Redeems `p_code` for `p_user` in one transaction: the code row is locked
-- so two people can't both take the last use of a single-use code.
-- Returns 'ok', 'invalid', 'expired', 'used_up' or 'already_redeemed'.
create or replace function redeem_gift_code(p_code text, p_user uuid)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  c gift_codes%rowtype;
begin
  select * into c from gift_codes where code = upper(trim(p_code)) for update;
  if not found then return 'invalid'; end if;
  if exists (select 1 from gift_code_redemptions where code = c.code and user_id = p_user) then
    return 'already_redeemed';
  end if;
  if c.expires_at is not null and c.expires_at < now() then return 'expired'; end if;
  if c.redemption_count >= c.max_redemptions then return 'used_up'; end if;

  insert into gift_code_redemptions (code, user_id) values (c.code, p_user);
  update gift_codes set redemption_count = redemption_count + 1 where code = c.code;

  -- Unlock every published paid title, shaped like a bundle purchase so the
  -- rest of the app needs no changes to treat it as owned.
  insert into purchases (user_id, title_id, platform, receipt)
  select p_user, t.id, 'gift', 'gift:' || c.code
  from titles t
  where t.is_published and t.price_cents > 0
  on conflict (user_id, title_id) do nothing;

  return 'ok';
end;
$$;

revoke all on function redeem_gift_code(text, uuid) from public, anon, authenticated;
grant execute on function redeem_gift_code(text, uuid) to service_role;
