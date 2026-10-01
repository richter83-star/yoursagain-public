-- Applied 2026-10-01. The "Dracanus" project contained 29 unused legacy tables
-- (users, refresh_tokens, password_resets, ...) with RLS disabled, i.e. fully
-- readable/writable with the public anon key. Lock them down (non-destructive).
do $$
declare t record;
begin
  for t in select tablename from pg_tables where schemaname = 'public' and tablename <> 'site_leads' loop
    execute format('alter table public.%I enable row level security', t.tablename);
    execute format('revoke all on public.%I from anon, authenticated', t.tablename);
  end loop;
end $$;
alter default privileges in schema public revoke all on tables from anon, authenticated;
alter default privileges in schema public revoke all on sequences from anon, authenticated;
alter default privileges in schema public revoke all on functions from anon, authenticated;
