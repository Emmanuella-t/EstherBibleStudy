# Cloud sync setup (one-time)

Edits to **Application** and **Discussion** sync for everyone who visits the site.

## 1. Create a free Supabase project

1. Go to [supabase.com](https://supabase.com) and sign up (free).
2. **New project** → pick a name and password → **Create**.

## 2. Create the database table

In your project: **SQL Editor** → **New query** → paste and **Run**:

```sql
create table chapter_edits (
  chapter int primary key,
  app text not null default '',
  questions jsonb not null default '[]'::jsonb,
  updated_at timestamptz default now()
);

alter table chapter_edits enable row level security;

create policy "Anyone can read edits"
  on chapter_edits for select using (true);

create policy "Anyone can save edits"
  on chapter_edits for insert with check (true);

create policy "Anyone can update edits"
  on chapter_edits for update using (true);

create policy "Anyone can delete edits"
  on chapter_edits for delete using (true);
```

## 3. Copy your API keys

**Project Settings** → **API** → copy:

- **Project URL**
- **anon public** key (not the service_role key)

## 4. Add keys to this site

Open `config.js` in this folder and paste:

```javascript
window.ESTHER_CONFIG = {
  supabaseUrl: 'https://YOUR_PROJECT.supabase.co',
  supabaseAnonKey: 'YOUR_ANON_KEY'
};
```

## 5. Deploy

Commit and push to GitHub (same as any other site update):

```bash
git add config.js
git commit -m "Enable cloud sync for study edits"
git push
```

Wait 1–2 minutes, then open your site. The nav should show **Live sync**. Edits will appear for everyone.

---

**Note:** With public write policies, anyone who finds the site can edit. For a small group study that is usually fine. To restrict edits later, ask for help tightening Supabase policies.
