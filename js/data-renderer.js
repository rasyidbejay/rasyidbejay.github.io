const safe = (value) => value ?? "";
const firstSentence = (text = "") => {
  const cleaned = text.trim();
  if (!cleaned) return "";
  const sentence = cleaned.match(/^[^.!?]+[.!?]/);
  return sentence ? sentence[0] : cleaned;
};

export async function loadPortfolioData() {
  const response = await fetch("data.json");
  if (!response.ok) throw new Error("Unable to load data.json");
  return response.json();
}

export function renderPortfolio(data) {
  const { meta } = data;
  const role = meta.role || meta.title || "Portfolio";
  document.title = `${meta.shortName} | ${role}`;
  document.getElementById("navName").textContent = meta.shortName;
  document.getElementById("heroLocation").textContent = meta.location;
  document.querySelector(".hero-title").dataset.text = meta.name;
  document.querySelector(".hero-subtitle").dataset.text = role;
  document.getElementById("heroBio").textContent = meta.bio;

  document.getElementById("heroActions").innerHTML = `
    <a href="mailto:${meta.email}" class="btn btn-magnetic">Email</a>
    <a href="${meta.socials.linkedin}" class="btn btn-magnetic" target="_blank" rel="noopener">LinkedIn</a>
    <a href="${meta.socials.github}" class="btn btn-magnetic" target="_blank" rel="noopener">GitHub</a>`;

  document.getElementById("aboutCard").innerHTML = `
    <p>${meta.bio}</p>
    <p><strong>Website:</strong> <a href="${meta.website}" target="_blank" rel="noopener">${meta.website}</a></p>
    <p><strong>Languages:</strong> ${data.extras.languages.join(", ")}</p>`;

  document.getElementById("experienceList").innerHTML = data.experience.map((item) => `
    <article class="glass-card card-hover reveal-stagger simple-card">
      <div class="card-header-row">
        <h3>${item.role} — ${item.company}</h3>
        <span class="period">${item.period}</span>
      </div>
      <p class="desc">${firstSentence(item.description || item.highlights[0])}</p>
      <div class="tags">${(item.tags || item.skills || []).map((skill) => `<span class="chip">${skill}</span>`).join(" ")}</div>
    </article>
  `).join("");

  document.getElementById("projectsList").innerHTML = data.projects.map((project) => `
    <article class="glass-card card-hover reveal-stagger simple-card">
      <h3>${project.title}</h3>
      <p class="desc">${firstSentence(project.description)}</p>
      <div class="tags">${project.tags.map((tag) => `<span class="chip">${tag}</span>`).join(" ")}</div>
    </article>
  `).join("");

  const skillGroups = [data.skills.frontend, data.skills.seo, data.skills.tools, data.skills.data].filter(Boolean);
  document.getElementById("skillsList").innerHTML = skillGroups.map((group) => `
    <article class="skill-group">
      <h4>${group.title}</h4>
      <p>${group.items.join(", ")}</p>
    </article>
  `).join("");

  const educationItems = Array.isArray(data.education) ? data.education : [data.education];
  document.getElementById("educationList").innerHTML = educationItems.map((item) => `
    <article class="glass-card card-hover">
      <h3>${item.degree}</h3>
      <p>${item.minor}</p>
      <p>${item.institution} · ${item.location}</p>
      <p>${item.period}</p>
      <p>${item.honors.join(", ")}</p>
      <p>${item.coursework.join(" · ")}</p>
    </article>
  `).join("");

  document.getElementById("certificationsList").innerHTML = data.certifications.map((cert) => `
    <article class="glass-card card-hover">
      <h3>${cert.name}</h3>
      <p>${cert.issuer} · ${cert.date}</p>
      <p>${cert.credentialId ? `Credential ID: ${cert.credentialId}` : "Credential ID: N/A"}</p>
      <div>${cert.skills.map((skill) => `<span class="chip">${skill}</span>`).join(" ")}</div>
    </article>
  `).join("");

  document.getElementById("testimonialsList").innerHTML = data.testimonials.map((t) => `
    <blockquote class="glass-card card-hover">
      <p>“${t.quote}”</p>
      <cite>${t.author}, ${t.company}</cite>
    </blockquote>
  `).join("");

  document.getElementById("contactCard").innerHTML = `
    <p><strong>Email:</strong> <a href="mailto:${meta.email}">${meta.email}</a></p>
    <p><strong>Phone:</strong> <a href="tel:${meta.phone.replace(/\s+/g, "")}">${meta.phone}</a></p>
    <p><strong>Location:</strong> ${meta.location}</p>
    <p><strong>Activities:</strong> ${data.extras.activities.join(" • ")}</p>
  `;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: meta.name,
    alternateName: meta.shortName,
    jobTitle: role,
    email: `mailto:${meta.email}`,
    url: meta.website,
    sameAs: Object.values(meta.socials)
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.append(script);

  return safe(data);
}
