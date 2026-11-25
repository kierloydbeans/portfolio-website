const state = { profile: null };

async function loadProfile() {
  const response = await fetch("/api/profile");
  if (!response.ok) throw new Error("Could not load profile");
  return response.json();
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
  })[character]);
}

function renderProfile(profile) {
  state.profile = profile;
  const heroHeadline = document.querySelector(".hero__headline");
  const heroSummary = document.querySelector(".hero__summary");
  if (heroHeadline) heroHeadline.textContent = profile.headline;
  if (heroSummary) heroSummary.textContent = profile.summary;
  document.querySelector(".about-summary").textContent = profile.summary;

  document.querySelectorAll(".copy-contact").forEach((button) => {
    if (button.dataset.copy === "email") {
      button.setAttribute("title", profile.email);
    }
  });

  document.querySelector(".resume-header h2").textContent = profile.name;
  document.querySelector(".resume-headline").textContent = profile.headline;
  document.querySelector(".resume-contact").textContent =
    `${profile.phone}  |  ${profile.email}  |  ${profile.location}`;
  document.querySelector(".resume-summary").textContent = profile.summary;
  document.querySelector(".resume-projects").innerHTML = profile.projects.map((project) => `
    <article>
      <div class="resume-project-heading">
        <h4>${escapeHTML(project.title)}</h4>
        <span>${escapeHTML(project.status)}</span>
      </div>
      <p>${escapeHTML(project.description)}</p>
      ${project.stack ? `<p class="resume-item-meta">${escapeHTML(project.stack)}</p>` : ""}
      <a class="resume-project-url" href="${escapeHTML(project.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(project.display_url)}</a>
    </article>
  `).join("");

  document.querySelector(".resume-experience").innerHTML = profile.experience.map((item) => `
    <article>
      <h4>${escapeHTML(item.title)}</h4>
      <p class="resume-item-meta">${escapeHTML(item.organization)} | ${escapeHTML(item.period)}</p>
      <ul>${item.points.map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ul>
    </article>
  `).join("");

  document.querySelector(".resume-education").innerHTML = profile.education.map((item) => `
    <article>
      <h4>${escapeHTML(item.degree)}</h4>
      <p>${escapeHTML(item.school)}<br>${escapeHTML(item.period)}</p>
      ${item.details ? `<p>${escapeHTML(item.details)}</p>` : ""}
      ${item.coursework ? `<p><strong>Coursework:</strong> ${escapeHTML(item.coursework)}</p>` : ""}
    </article>
  `).join("");

  document.querySelector(".resume-skills").innerHTML = profile.skills.map((skill) => `
    <p><strong>${escapeHTML(skill.category)}:</strong> ${escapeHTML(skill.items)}</p>
  `).join("");

  document.querySelector(".reference-name").textContent = profile.reference.name;
  document.querySelector(".reference-title").textContent = profile.reference.title;

  document.querySelector(".experience-grid").innerHTML = profile.experience.map((item) => `
    <article class="experience-card" data-domains="${escapeHTML((item.domains || [item.domain]).join("|"))}">
      <div class="experience-card__top">
        <span>${escapeHTML(item.period)}</span>
        <span class="tag">${escapeHTML(item.domain)}</span>
      </div>
      <h3>${escapeHTML(item.title)}</h3>
      <p class="experience-card__organization">${escapeHTML(item.organization)}</p>
      <ul>${item.points.map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ul>
    </article>
  `).join("");

  document.querySelector(".skills-grid").innerHTML = profile.skills.map((skill) => `
    <article class="skill-card">
      <h3>${escapeHTML(skill.category)}</h3>
      <p>${escapeHTML(skill.items)}</p>
    </article>
  `).join("");

  document.querySelector(".education-list").innerHTML = profile.education.map((item) => `
    <article class="education-card">
      <div>
        <p class="education-card__period">${escapeHTML(item.period)}</p>
        <h3>${escapeHTML(item.degree)}</h3>
        <p>${escapeHTML(item.school)}</p>
      </div>
      ${item.details ? `<p>${escapeHTML(item.details)}</p>` : ""}
      ${item.coursework ? `<p><strong>Relevant Coursework</strong><br>${escapeHTML(item.coursework)}</p>` : ""}
    </article>
  `).join("");
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.setTimeout(() => toast.classList.remove("visible"), 2200);
}

async function copyText(value, label) {
  try {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
    await navigator.clipboard.writeText(value);
  } catch {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      if (!copied) throw new Error("Copy failed");
    } catch {
      showToast(`${label} could not be copied`);
      return;
    }
  }
  showToast(`${label} copied`);
}

function setupInteractions(profile) {
  document.querySelectorAll(".copy-contact").forEach((button) => {
    button.addEventListener("click", () => {
      const field = button.dataset.copy;
      copyText(profile[field], field === "email" ? "Email" : "Phone");
    });
  });

  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      const filter = button.dataset.filter;
      document.querySelectorAll(".experience-card").forEach((card) => {
        const domains = (card.dataset.domains || "").split("|");
        const visible = filter === "All" || domains.includes(filter);
        card.hidden = !visible;
      });
    });
  });

  document.querySelector(".print-button").addEventListener("click", () => window.print());

  const themeToggle = document.querySelector(".theme-toggle");
  const colorScheme = document.querySelector('meta[name="color-scheme"]');
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem("portfolio-theme");
  } catch {}
  if (savedTheme === "dark") document.documentElement.dataset.theme = "dark";

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    colorScheme.content = nextTheme;
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch {}
    themeToggle.setAttribute("aria-pressed", String(!isDark));
  });

  const navToggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelector(".nav__links");
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.focus();
    }
  });

  document.querySelector(".reference-toggle").addEventListener("click", (event) => {
    const contact = document.querySelector(".reference-contact");
    const open = contact.hidden;
    contact.hidden = !open;
    event.currentTarget.textContent = open ? "Hide contact details" : "Show contact details";
    event.currentTarget.setAttribute("aria-expanded", String(open));
  });
}

loadProfile()
  .then((profile) => {
    renderProfile(profile);
    setupInteractions(profile);
  })
  .catch((error) => showToast(error.message));

document.querySelector("#year").textContent = new Date().getFullYear();
