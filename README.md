# Kierloyd Vince V. Schofield — Portfolio

A responsive portfolio and printable one-page resume built with Flask, HTML5, CSS3, and vanilla JavaScript.

## Local setup

Requires Python 3.10 or newer.

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python backend/app.py
```

Open `http://localhost:5000`.

## Routes

- `/` — Portfolio and resume interface
- `/api/profile` — Structured profile JSON
- `/health` — Deployment health check

## Features

- Light/dark theme persisted in `localStorage`
- Responsive navigation and project filters
- Live previews for RESQ-ROUTE and Rizal's Footsteps; a static screenshot preview for Lost Boys Club (in development)
- RESQ-ROUTE live features depend on `https://resq-route-api-kier.onrender.com/`
- Email and phone copy-to-clipboard actions
- Toggleable character reference contact notice
- Printable A4 resume in the site’s warm serif theme, with current profile details, selected projects, and a portfolio QR code
- Print/Save Resume button using `window.print()`

## Render deployment

1. Push the repository to GitHub.
2. Create a new Render Web Service.
3. Select Python as the environment.
4. Set Build Command to `pip install -r requirements.txt`.
5. Set Start Command to `gunicorn backend.app:app --bind 0.0.0.0:$PORT`.
6. Deploy and verify `/health`.

The included `render.yaml` can also be used to provision the service as a Blueprint.

## Modern Web Guidance

Modern Web Guidance is installed in `.agents/skills/modern-web-guidance/` for future HTML, CSS, and client-side JavaScript work.
