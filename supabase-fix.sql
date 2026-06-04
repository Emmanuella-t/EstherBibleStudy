-- Run this in Supabase → SQL Editor if the site shows "Sync error"
-- (Fixes: permission denied for table chapter_edits)

grant usage on schema public to anon, authenticated;

grant select, insert, update, delete on table public.chapter_edits to anon;
grant select, insert, update, delete on table public.chapter_edits to authenticated;

-- Ensure RLS policies exist (safe to re-run)
alter table chapter_edits enable row level security;

drop policy if exists "Anyone can read edits" on chapter_edits;
drop policy if exists "Anyone can save edits" on chapter_edits;
drop policy if exists "Anyone can update edits" on chapter_edits;
drop policy if exists "Anyone can delete edits" on chapter_edits;

create policy "Anyone can read edits"
  on chapter_edits for select using (true);

create policy "Anyone can save edits"
  on chapter_edits for insert with check (true);

create policy "Anyone can update edits"
  on chapter_edits for update using (true);

create policy "Anyone can delete edits"
  on chapter_edits for delete using (true);
