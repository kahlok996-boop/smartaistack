This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Supabase audit lead capture setup

SmartAIStack saves audit and redesign requests into a Supabase table named `audit_leads` through the reusable browser client in `app/lib/supabase/client.ts`.

### 1. Install dependencies

```bash
npm install
```

The project requires `@supabase/supabase-js` for client-side inserts.

### 2. Create the Supabase table

Open your Supabase project, go to **SQL Editor**, and run the schema in `supabase/audit_leads.sql`:

```sql
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
```

The insert-only policy lets anonymous website visitors submit lead requests with the public anon key while keeping reads unavailable to the public client.

### 3. Add environment variables

Create a local `.env.local` file in the project root and add your Supabase project settings:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-public-anon-key
```

For production, add the same variables in your hosting provider dashboard, such as **Vercel → Project → Settings → Environment Variables**. Restart the dev server after changing `.env.local`.

### 4. How submissions are saved

All lead capture UI calls `submitAuditLead` from `app/lib/audit-leads.ts`, which inserts into `public.audit_leads` with these fields:

- `email`: visitor email from the form.
- `website_url`: website URL when the form collects one or an audit target exists.
- `audit_type`: the funnel/request type, such as `upload_audit_request`, `upload_redesign_brief`, or `generator_direction_request`.
- `source_page`: the page where the request started, such as `/upload`, `/generator`, or `/before-after`.
- `notes`: extra context collected by each form, such as name, WhatsApp, budget, selected website type, generated audit score, or message.

Connected forms currently include the upload page quote form, the upload audit result brief request, the generator page quote form, and before/after lead forms. The homepage does not currently include an email-based lead capture form, so no homepage lead insert is performed until that form exists.
