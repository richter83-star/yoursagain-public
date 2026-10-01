-- Applied to Supabase project "Dracanus" (ohapewokvylhzuwcqdgn) on 2026-10-01.
-- Public-site lead intake. Anonymous visitors may INSERT only.
create table public.site_leads (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),
  first_name       text not null check (char_length(first_name) between 1 and 100),
  last_name        text not null check (char_length(last_name) between 1 and 100),
  email            text not null check (char_length(email) between 3 and 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  phone            text check (phone is null or char_length(phone) <= 40),
  property_address text not null check (char_length(property_address) between 3 and 300),
  message          text check (message is null or char_length(message) <= 4000),
  contact_consent  boolean not null check (contact_consent),
  eligibility      jsonb check (eligibility is null or (jsonb_typeof(eligibility) = 'object' and pg_column_size(eligibility) < 2000)),
  source_page      text not null default '/contact' check (char_length(source_page) <= 100),
  status           text not null default 'new' check (status in ('new','contacted','qualified','not_viable','duplicate','spam')),
  internal_notes   text
);
create index site_leads_created_at_idx on public.site_leads (created_at desc);
create index site_leads_email_idx on public.site_leads (lower(email));
alter table public.site_leads enable row level security;
create policy "anon can submit leads" on public.site_leads for insert to anon
  with check (status = 'new' and internal_notes is null);
revoke all on public.site_leads from anon, authenticated;
grant insert (first_name, last_name, email, phone, property_address, message,
              contact_consent, eligibility, source_page) on public.site_leads to anon;

-- Throttle: max 3 per email per hour, 300 total per hour.
create or replace function public.site_leads_throttle() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.site_leads where lower(email) = lower(new.email)
        and created_at > now() - interval '1 hour') >= 3 then
    raise exception 'rate limit' using errcode = 'P0001';
  end if;
  if (select count(*) from public.site_leads where created_at > now() - interval '1 hour') >= 300 then
    raise exception 'rate limit' using errcode = 'P0001';
  end if;
  return new;
end; $$;
revoke all on function public.site_leads_throttle() from public, anon, authenticated;
create trigger site_leads_throttle before insert on public.site_leads
  for each row execute function public.site_leads_throttle();
