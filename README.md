# CareLoop_Ai ❄️

**Elevator pitch**

CareLoop_Ai is an AI-powered daily wellbeing check-in that helps people who fall through care gaps notice trends early and take action. In ~2 minutes per day users complete 3–5 adaptive text/voice prompts; AI surfaces risk signals (stress, burnout, depressive patterns), generates empathetic next steps, and optionally notifies trusted contacts while preserving privacy.

---

## Why this will win Snow Fest 🏆

- **Clarity of the problem:** Targets a clear, urgent gap—people who don’t get timely mental/behavioral support.
- **Innovation:** Lightweight, adaptive check-ins + simple explainable AI signals (not overcomplicated ML). Practical integrations (voice, alerts, family circle) increase differentiation.
- **Impact & Scalability:** Globally relevant, low friction, easy localisation and onboarding.
- **Execution quality:** Demoable end-to-end flow (daily check-in → insight → history → optional alert).
- **Storytelling:** Human story + data-driven impact (show a user who avoided escalation because they caught the pattern early).

---

## Strategic direction (final pick)

We recommend shipping the **CARELOOP AI** MVP focusing on: simple daily check-ins, lightweight AI analysis, time-series pattern detection, shareable alerts (opt‑in), and a clear demo flow. This hits judge priorities: impact, clarity, and a high-quality, demoable execution.

---

## 3‑Day Sprint Plan (sharp, practical) ⚡

Day 0 (planning — 0.5 day)
- Finalize MVP scope & acceptance criteria (who is primary user, success metrics).
- Assign roles: frontend, backend, AI, demo/story.
- Create issues for each task in repo.

Day 1 (MVP core)
- Implement check-in flow (3–5 adaptive Qs) — UI + minimal validation.
- Wire basic AI scoring: heuristic or lightweight prompt + small model for signal detection.
- Persist responses and show simple timeline.

Day 2 (polish + integrations)
- Add voice input option and quick analytics (pattern highlight).
- Implement optional trusted-contact alert (email / simulated flow).
- UX polish: animations, pricing/plan stub, and deploy preview.

Day 3 (demo + submission)
- Record 3–5 minute video (script below).
- Final deploy (Vercel/Netlify), make sure demo link works.
- Complete Devpost submission, final copy, screenshots, and push last fixes.

---

## MVP feature checklist ✅

- [ ] 3–5 adaptive text questions (mobile-friendly)
- [ ] Optional voice check-ins (record → transcribe)
- [ ] Lightweight AI scoring (risk flags + short human-friendly advice)
- [ ] History & simple charts (7–30 day timeline)
- [ ] Opt‑in trusted contact alerts (privacy-preserving)
- [ ] Clean landing + pricing (demo-focused)

---

## Demo flow (3 minutes) 🎬

1. Short problem hook (20s): real human story + scope.
2. Show 1-minute quick onboarding and daily check-in.
3. Trigger an alert / show pattern detection (the value reveal).
4. Show history and a single controlled `what-if` (explain why it matters).
5. Quick deploy/scale note and call-to-action (“Why this needs funding / adoption”).

---

## Devpost Submission Checklist 📋

- [ ] GitHub repo link (this repo)
- [ ] Hosted demo link (Vercel / Netlify / static preview)
- [ ] 3–5 minute video demo (screen + walk-through + 20s pitch)
- [ ] Short project description (problem, solution, why it matters)
- [ ] Technology stack details and any APIs or frameworks used
- [ ] Team information: Names, roles, and contact details
- [ ] (Optional) Supplementary materials like UI/UX mockups, business models, or presentation slides

---

## Quick run & dev notes 🔧

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Tests: `npm run test`

Environment notes
- Add all secret keys to a local `.env` (already ignored). If using Supabase or external APIs, add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` to `.env`.

---

## What I added right away ✨
- `/.env.example` with placeholder environment variables
- `/.github/workflows/ci.yml` basic CI to install, build, and test
- `VIDEO_SCRIPT.md` with a ready-to-record 3–5 minute demo script
- `DEVPOST.md` with a suggested submission write-up and checklist
- `ISSUES.md` with a prioritized task list for the 3‑day sprint

---

## Suggested immediate follow-ups (pick any)
- Create a short 3–5 minute recording using `VIDEO_SCRIPT.md`.
- Add the project to Vercel/Netlify and paste the demo link into `DEVPOST.md`.
- Open the top-priority issues and assign owners — I can create them if you want.
- Add a `/.env.example` and a small pre-commit hook to block secrets.

---

## Contacts & Roles

Add team member names, GitHub handles, and roles here (example):
- Alice — Product & Demo
- Bob — Frontend
- Carol — Backend / Integrations
- Dan — AI / Prompts

---

## Final notes

This README is optimized for Snow Fest clarity and a demo-first submission. I can add the slide deck, open issues with owners, or set up a Vercel preview deployment — which should I do next?

---

License: MIT
