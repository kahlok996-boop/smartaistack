create table if not exists public.audit_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  website_url text,
  audit_type text not null,
  source_page text not null,
  notes text
);

alter table public.audit_leads enable row level security;

create policy "Allow public audit lead inserts"
  on public.audit_leads
  for insert
  to anon
  with check (true);
