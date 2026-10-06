# Next.js Full-Stack Test - Vercel + Prisma Postgres

This is just a minimal full-stack CRUD app built to test whether Vercel can replace a
sleeping Railway backend for low-traffic projects. No separate backend
server, no CORS, no Render. One Next.js project, one Vercel deployment.

## What This Is

A Notes app with Create, Read, and Delete functionality. It exists to
prove out a specific stack:

- **Next.js 16** (App Router, React Server Components, Turbopack)
- **Server Actions** for mutations (no separate Express server)
- **Prisma 7** with the Postgres driver adapter
- **Prisma Postgres** as the hosted database
- **Vercel Hobby** for hosting

## Why This Stack

The original problem: a backend hosted on Railway's free plan slept
when idle, causing ~10 second wake-ups on the first request. The goal
was to find a free-tier setup that stayed responsive for low traffic.

**Vercel's model -> Fluid Compute + bytecode caching + hosted Postgres**
addresses this without a separate backend service. For CRUD apps, a
dedicated server is unnecessary overhead.

