const safe = (value) => value ?? "";

export async function loadPortfolioData() {
  const response = await fetch("data.json");
  if (!response.ok) throw new Error("Unable to load data.json");
  return response.json();
}

export function renderPortfolio(data) {
  const { meta } = data;
  document.title = `${meta.shortName} | ${meta.title}`;
  document.getElementById("navName").textContent = meta.shortName;
  document.getElementById("heroLocation").textContent = meta.location;
  document.querySelector(".hero-title").dataset.text = meta.name;
  document.querySelector(".hero-subtitle").dataset.text = meta.title;
  document.getElementById("heroBio").textContent = meta.bio;

  document.getElementById("heroActions").innerHTML = `
    <a href="mailto:${meta.email}" class="btn btn-magnetic">Email</a>
    <a href="tel:${meta.phone.replace(/\s+/g, "")}" class="btn btn-magnetic">Phone</a>
    <a href="${meta.socials.linkedin}" class="btn btn-magnetic" target="_blank" rel="noopener">LinkedIn</a>
    <a href="${meta.socials.github}" class="btn btn-magnetic" target="_blank" rel="noopener">GitHub</a>`;

  document.getElementById("aboutCard").innerHTML = `
    <p>${meta.bio}</p>
    <p><strong>Website:</strong> <a href="${meta.website}" target="_blank" rel="noopener">${meta.website}</a></p>
    <p><strong>Languages:</strong> ${data.extras.languages.join(", ")}</p>`;

  document.getElementById("experienceList").innerHTML = data.experience.map((item) => `
    <article class="glass-card card-hover reveal-stagger">
      <h3>${item.role}</h3>
      <p>${item.company} · ${item.location} · ${item.period}</p>
      <ul>${item.highlights.map((line) => `<li>${line}</li>`).join("")}</ul>
      <div>${item.skills.map((skill) => `<span class="chip">${skill}</span>`).join(" ")}</div>
    </article>
  `).join("");

  document.getElementById("projectsList").innerHTML = data.projects.map((project) => `
    <article class="glass-card card-hover reveal-stagger">
      <h3>${project.title}</h3>
      <p>${project.period} · ${project.category}</p>
      <p>${project.description}</p>
      <div>${project.tags.map((tag) => `<span class="chip">${tag}</span>`).join(" ")}</div>
      <p>${project.links.live ? `<a href="${project.links.live}" target="_blank" rel="noopener">Live</a>` : ""} ${project.links.github ? `<a href="${project.links.github}" target="_blank" rel="noopener">GitHub</a>` : ""}</p>
    </article>
  `).join("");

  document.getElementById("skillsList").innerHTML = Object.values(data.skills).map((group) => `
    <article class="glass-card card-hover">
      <h3>${group.title}</h3>
      <div>${group.items.map((item) => `<span class="chip">${item}</span>`).join(" ")}</div>
    </article>
  `).join("");

  document.getElementById("educationList").innerHTML = data.education.map((item) => `
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
    jobTitle: meta.title,
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
