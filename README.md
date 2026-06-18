# Willy Agency

Website for [willyagency.ch](https://willyagency.ch).

Willy Agency builds AI-powered business applications, agentic workflows, and
production-ready automations. The first published case study is
[Saas-Fee AI Concierge](https://saas-fee-concierge.ch).

## Stack

- Next.js
- React
- Tailwind CSS
- Vercel

## Development

```bash
npm install
npm run dev
npm run build
```

The project requires Node.js `>=22.13.0`.

## HubSpot

The contact form posts to `/api/contact` and creates or updates a HubSpot
contact, then attaches the submitted message as a note.

Set these environment variables in Vercel:

```bash
HUBSPOT_PRIVATE_APP_TOKEN=
HUBSPOT_OWNER_ID=93428995
```
