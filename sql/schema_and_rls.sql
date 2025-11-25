-- SQL: Create family_members table and RLS policies (private per-user)
create extension if not exists "uuid-ossp";

create table if not exists public.family_members (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  name text not null,
  role text,
  father_id uuid,
  mother_id uuid,
  avatar_url text,
  avatar_path text,
  created_at timestamptz default now()
);

create index if not exists idx_family_members_user on public.family_members (user_id);
create index if not exists idx_family_members_created_at on public.family_members (created_at);

-- enable RLS
alter table public.family_members enable row level security;

-- allow authenticated users to insert rows where user_id = auth.uid()
create policy "family_members_insert_owner" on public.family_members
  for insert
  with check (auth.role() = 'authenticated' AND user_id = auth.uid());

-- allow owners to select their rows
create policy "family_members_select_owner" on public.family_members
  for select
  using (user_id = auth.uid());

-- allow owners to update their rows
create policy "family_members_update_owner" on public.family_members
  for update
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- allow owners to delete their rows
create policy "family_members_delete_owner" on public.family_members
  for delete
  using (user_id = auth.uid());
