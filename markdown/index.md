Build a complete, responsive portfolio web application and printable 1-page resume generator using **Python (Flask or FastAPI)**, **Vanilla JavaScript (ES6+)**, and **HTML5 + CSS3** (no heavy frontend frameworks or CSS libraries like Bootstrap/Tailwind).

### 1. Project Architecture & Stack
- **Backend (`app.py`):** Serve static files and provide a `/api/profile` JSON endpoint containing structured resume & portfolio data. Include a `/health` check route and ensure it runs cleanly on Render (`gunicorn` or `uvicorn` on `0.0.0.0` and `$PORT`).
- **Frontend (`templates/index.html`, `static/css/styles.css`, `static/js/app.js`):**
  - Clean, modern developer/IT portfolio with a light/dark theme toggle persisted in `localStorage` and smooth section navigation.
  - A dedicated **Printable 1-Page Resume Mode / Print Sheet** (`@media print` styling) so I can print or export a crisp 1-page PDF resume directly from the browser.
  - Include a **static QR code** (generated cleanly via a lightweight vanilla JS QR library or pre-rendered SVG/PNG asset) linking directly to `https://kierloydschofield-portfolio.onrender.com`, placed neatly in the resume header alongside the clickable text URL.

### 2. Exact Candidate Data to Populate
Use the following details accurately and consistently across the portfolio and resume view:

- **Name:** Kierloyd Vince V. Schofield
- **Role / Headline:** 4th-Year BS Information Systems Student (Graduating April 2027) | Backend & Spatial Routing, Networking & Live AV Ops
- **Contact & Links:**
  - Location: 38B General Concepcion Street, Bagong Barrio, Caloocan City
  - Phone: 0994 839 8164
  - Email: schofieldkier09@gmail.com
  - Portfolio URL: `kierloydschofield-portfolio.onrender.com`
- **Summary:**
  Fourth-year BS Information Systems student (expected graduation April 2027) with hands-on experience building web applications, simulated configuration of network infrastructure, and leading technical and student organization initiatives. Experienced with Python, FastAPI, React, PostgreSQL/PostGIS, and Cisco networking fundamentals.

- **Experience & Projects:**
  1. **Capstone Developer (Backend & System Architecture) | RESQ-ROUTE (2026–Present)**
     - Architected backend services and spatial routing workflows using Python, FastAPI, and PostgreSQL/PostGIS for disaster evacuation logistics and resource tracking, building practical skills in efficient backend architecture.
     - Integrated mapping, routing engines, and LLM-assisted data workflows to streamline hazard-aware route decisions and form autofill, gaining hands-on experience in map routing and API tile integration.
  2. **Practicum Trainee (OJT) | University of Caloocan City (2026)**
     - Operated live LED screen wall systems at SM Mall of Asia (MOA) Arena and recognition displays at Caloocan Sports Complex for the 52nd Commencement Exercises and Recognition Ceremony, gaining hands-on skills in live event AV cueing and large-venue display operations.
     - Helped produce official event visuals, invitations, tickets, and presentation decks across 400+ practicum hours of departmental technical and administrative support, strengthening workflow coordination and multi-tasking under live event deadlines.
  3. **Student Assistant - Computer Studies Department (CSD) | University of Caloocan City (2023–Present)**
     - Provided ongoing technical, administrative, and operational support for the Computer Studies Department across multiple academic years, serving as one of the senior student assistants on the team.
     - Coordinated task assignments, onboarding, and daily shift workflows for fellow student assistants while liaising directly with faculty, department leadership, and students, learning practical skills in leadership.
     - Assisted with department-wide assemblies, academic events, and laboratory/office readiness, troubleshooting hardware, audio-visual setups, and workstation issues on-site, learning on-the-spot hardware and software troubleshooting.
     - Managed student records, academic routing documents, and office communications with strict accuracy and confidentiality, learning tidiness in maintaining records and documents.
     - Managed live OBS Studio broadcasts, scene transitions, and stream operations for university research conferences including CIRCLES 2025 and RISE 2026, gaining hands-on experience in livestreaming services.
     - Operated live audio mixers, sound routing, and real-time AV troubleshooting for Computer Studies Department assemblies, exhibits, and student organization events, gaining actual experience in real-time live audio mixing.

- **Education:**
  - **Bachelor of Science in Information Systems (BSIS)** — University of Caloocan City (Aug. 2023 – Present)
    - Capstone Project (RESQ-ROUTE): Developing an enterprise resource planning (ERP) and dynamic hazard-aware spatial routing system for disaster response, evacuation routing, and evacuation center logistics (in progress).
    - Relevant Coursework: Systems Analysis & Design, Database Management Systems, Computer Networking, Web & Mobile Application Development, IT Project Management.
  - **Information and Communications Technology (ICT) Strand with Honors** — Electron College of Technical Education (SHS) (2021 – July 2023)

- **Technical Skills (Grouped by Category):**
  - **Networking & Infrastructure (Cisco Packet Tracer):** VLANs, Inter-VLAN Routing, Static Routing, Subnetting, DHCP, DNS, Access Control Lists (ACLs), Port Security, Network Topology Design & Troubleshooting
  - **Web & Mobile Development:** Python, FastAPI, React, PHP, HTML, CSS, Git/GitHub
  - **Databases & Spatial/Routing Tools:** PostgreSQL, PostGIS (Supabase), SQL, MapLibre, GraphHopper, Valhalla
  - **Live AV, Sound & Broadcast Operations:** Live Audio Mixer Operation, Signal Routing & Real-Time Troubleshooting, OBS Studio (Live Streaming & Conference Broadcasts)
  - **Media, Design & Productivity Tools:** Event & Low-Light Photography (DSLR), Adobe Camera Raw, Event Collateral & Presentation Design, Technical Documentation

- **Character Reference:**
  - **Dr. Teodoro A. Macaraeg, Jr.** — BSIS Program Head, AVP for Research and Publication (include placeholder/toggleable contact details so email/phone aren't exposed publicly unless revealed or toggled in resume view).

### 3. Interactive Vanilla JS Features
- Filterable project/experience cards by domain (`All`, `Backend & Spatial`, `Networking & IT`, `Live AV & Broadcast`, `OJT & Ops`).
- Copy-to-clipboard toast notification for email (`schofieldkier09@gmail.com`) and phone (`0994 839 8164`).
- Clean "Print / Save 1-Page Resume" button that triggers `window.print()` with print-only CSS rules hiding navbars/buttons and fitting cleanly onto a single page.
- Include a `README.md` with local setup instructions (`pip install -r requirements.txt` and run command) and Render deployment steps.