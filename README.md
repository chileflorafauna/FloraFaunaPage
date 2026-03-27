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

## Contact Form Email Setup (Brevo)

The contact form sends emails through `app/api/contact/route.ts`.

It now supports 2 delivery methods:

1. Brevo API (recommended)
2. SMTP fallback (optional)

### 1) Configure Brevo account (dashboard)

1. Create/login to Brevo: https://www.brevo.com/
2. Verify your sender:
	- Go to `Senders, Domains & Dedicated IP`.
	- Add a sender email (example: `no-reply@tudominio.com`).
	- Validate the confirmation email.
3. (Recommended) Authenticate your domain:
	- Add SPF/DKIM DNS records Brevo gives you.
	- Wait until status is green/verified.
4. Create API key:
	- Go to `SMTP & API` > `API Keys`.
	- Create a key and copy it once.

### 2) Configure local environment

1. Create `.env.local` in project root.
2. Copy variables from `.env.example`.
3. Fill at least Brevo API variables:

- `BREVO_API_KEY`
- `BREVO_SENDER_EMAIL`
- `BREVO_SENDER_NAME` (optional but recommended)
- `BREVO_TO_EMAIL`
- `BREVO_TO_NAME` (optional)

### 3) Optional SMTP fallback

If you also want SMTP fallback configured, set:

- `SMTP_HOST=smtp-relay.brevo.com`
- `SMTP_PORT=587`
- `SMTP_SECURE=false`
- `SMTP_USER` (Brevo SMTP login)
- `SMTP_PASS` (Brevo SMTP key/password)
- `SMTP_FROM`
- `SMTP_TO`

Notes:

- Use `SMTP_PORT=465` and `SMTP_SECURE=true` if you prefer implicit TLS.
- In production (Vercel or similar), configure the same variables in project environment settings.
- Never expose API keys in client-side code. Keep them server-side only.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy on GitHub Pages

This project is configured to deploy static export (`out/`) to GitHub Pages using GitHub Actions.

### Important limitation

GitHub Pages is static hosting. The server route `app/api/contact/route.ts` will not run there.
If you deploy to Pages, contact form submissions to `/api/contact` will fail unless you point the form to an external backend.

### Make the form work on static Pages (Brevo + Cloudflare Worker)

This repo includes a Worker template in `workers/brevo-contact-worker.js`.

1. Install Wrangler globally or run it with npx.
2. In `workers/`, copy `wrangler.example.toml` to `wrangler.toml`.
3. Deploy the worker:
	- `cd workers`
	- `wrangler login`
	- `wrangler deploy`
4. Add Worker secrets (never in frontend):
	- `wrangler secret put BREVO_API_KEY`
	- `wrangler secret put BREVO_SENDER_EMAIL`
	- `wrangler secret put BREVO_SENDER_NAME`
	- `wrangler secret put BREVO_TO_EMAIL`
	- `wrangler secret put BREVO_TO_NAME`
5. Copy the deployed Worker URL (example: `https://florafauna-contact.<tu-subdominio>.workers.dev`).
6. In GitHub repository settings, create variable:
	- `NEXT_PUBLIC_CONTACT_ENDPOINT` = your Worker URL
7. Re-run Pages deployment (push to `main` or run workflow manually).

The frontend uses `NEXT_PUBLIC_CONTACT_ENDPOINT` automatically in static builds.
If this variable is missing, it falls back to `/api/contact` for local/SSR environments.

### Steps

1. Push this project to the repository in your secondary GitHub account.
2. In that repository, go to `Settings > Pages`.
3. Set `Build and deployment` to `GitHub Actions`.
4. Push to `main`.
5. The workflow `.github/workflows/deploy-pages.yml` builds and publishes automatically.

### Secondary account while VS Code is logged into primary account

You can keep VS Code logged into your primary account and still push to another account by configuring git remote credentials:

1. Create a personal access token (classic or fine-grained) in the secondary account with repository write access.
2. Add the secondary repository as remote (or replace origin).
3. Push using that remote and authenticate with the secondary token when prompted.

Example commands:

```bash
git remote -v
git remote set-url origin https://github.com/SECONDARY_USER/REPO_NAME.git
git push -u origin main
```
