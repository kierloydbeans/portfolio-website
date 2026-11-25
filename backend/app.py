import os

from flask import Flask, jsonify, render_template


app = Flask(
    __name__,
    template_folder="../frontend/templates",
    static_folder="../frontend/static",
)


PROFILE = {
    "name": "Kierloyd Vince V. Schofield",
    "headline": "4th-Year BS Information Systems Student (Graduating April 2027) | Backend & Spatial Routing, Networking & Live AV Ops",
    "location": "38B General Concepcion Street, Bagong Barrio, Caloocan City",
    "phone": "0994 839 8164",
    "email": "schofieldkier09@gmail.com",
    "portfolio_url": "kierloydschofield-portfolio.onrender.com",
    "summary": "Fourth-year BS Information Systems student (expected graduation April 2027) with hands-on experience building web applications, simulated configuration of network infrastructure, and leading technical and student organization initiatives. Experienced with Python, FastAPI, React, PostgreSQL/PostGIS, and Cisco networking fundamentals.",
    "projects": [
        {
            "title": "RESQ-ROUTE",
            "status": "Capstone / 2026–Present",
            "description": "A disaster response and evacuation logistics platform with hazard-aware routing, mapping, and resource coordination.",
            "stack": "Python · FastAPI · PostgreSQL/PostGIS · Maps & Routing",
            "url": "https://resq-route-kier.onrender.com",
            "display_url": "resq-route-kier.onrender.com",
        },
        {
            "title": "Rizal’s Footsteps",
            "status": "Interactive archive",
            "description": "An interactive archive exploring the life and legacy of José Rizal through significant events and visual storytelling.",
            "stack": "Interactive storytelling · Digital archive",
            "url": "https://rizals-life.onrender.com",
            "display_url": "rizals-life.onrender.com",
        },
        {
            "title": "Lost Boys Club",
            "status": "In development",
            "description": "This project is not finished yet and is currently in development.",
            "stack": "",
            "url": "https://lostboysclub.infinityfreeapp.com/",
            "display_url": "lostboysclub.infinityfreeapp.com",
        },
    ],
    "experience": [
        {
            "title": "Capstone Developer (Backend & System Architecture)",
            "organization": "RESQ-ROUTE",
            "period": "2026–Present",
            "domain": "Backend & Spatial",
            "domains": ["Backend & Spatial"],
            "points": [
                "Architected backend services and spatial routing workflows using Python, FastAPI, and PostgreSQL/PostGIS for disaster evacuation logistics and resource tracking.",
                "Integrated mapping, routing engines, and LLM-assisted data workflows to streamline hazard-aware route decisions and form autofill.",
            ],
        },
        {
            "title": "Practicum Trainee (OJT)",
            "organization": "University of Caloocan City",
            "period": "2026",
            "domain": "OJT & Ops",
            "domains": ["OJT & Ops", "Live AV & Broadcast"],
            "points": [
                "Operated live LED screen wall systems at SM Mall of Asia Arena and recognition displays at Caloocan Sports Complex for the 52nd Commencement Exercises and Recognition Ceremony.",
                "Produced event visuals, invitations, tickets, and presentation decks across 400+ practicum hours of departmental technical and administrative support.",
            ],
        },
        {
            "title": "Student Assistant - Computer Studies Department",
            "organization": "University of Caloocan City",
            "period": "2023–Present",
            "domain": "Live AV & Broadcast",
            "domains": ["Live AV & Broadcast"],
            "points": [
                "Provided technical, administrative, and operational support across multiple academic years, serving as a senior student assistant.",
                "Coordinated task assignments, onboarding, and daily workflows for fellow assistants while liaising with faculty and department leadership.",
                "Supported assemblies and laboratory readiness, troubleshooting hardware, audiovisual setups, and workstation issues on-site.",
                "Managed student records and office communications with accuracy and confidentiality.",
                "Managed OBS Studio broadcasts and live stream operations for CIRCLES 2025 and RISE 2026.",
                "Operated live audio mixers and real-time AV troubleshooting for department assemblies and organization events.",
            ],
        },
    ],
    "education": [
        {
            "degree": "Bachelor of Science in Information Systems (BSIS)",
            "school": "University of Caloocan City",
            "period": "Aug. 2023 – Present",
            "details": "RESQ-ROUTE: Developing an enterprise resource planning and dynamic hazard-aware spatial routing system for disaster response, evacuation routing, and evacuation center logistics.",
            "coursework": "Systems Analysis & Design, Database Management Systems, Computer Networking, Web & Mobile Application Development, IT Project Management",
        },
        {
            "degree": "Information and Communications Technology (ICT) Strand with Honors",
            "school": "Electron College of Technical Education",
            "period": "2021 – July 2023",
        },
    ],
    "skills": [
        {"category": "Web & Mobile Development", "items": "Python, FastAPI, React, PHP, HTML, CSS, Git/GitHub"},
        {"category": "Databases & Spatial/Routing Tools", "items": "PostgreSQL, PostGIS (Supabase), SQL, MapLibre, GraphHopper, Valhalla"},
        {"category": "Live AV, Sound & Broadcast", "items": "Live Audio Mixing, Signal Routing, Real-Time Troubleshooting, OBS Studio"},
        {"category": "Media & Productivity", "items": "DSLR & Low-Light Photography, Adobe Camera Raw, Event Collateral, Presentation Design, Technical Documentation"},
    ],
    "reference": {
        "name": "Dr. Teodoro A. Macaraeg, Jr.",
        "title": "BSIS Program Head, AVP for Research and Publication",
    },
}


@app.get("/")
def index():
    return render_template("index.html")


@app.get("/api/profile")
def profile():
    return jsonify(PROFILE)


@app.get("/health")
def health():
    return jsonify({"status": "ok"})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
