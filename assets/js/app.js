const theme = document.createElement("link");
theme.rel = "stylesheet";
theme.href = "assets/css/reference-theme.css";
document.head.append(theme);
const header = `<header class="site-header"><nav class="nav wrapper" aria-label="Navegação principal"><a class="brand" href="index.html">Alice Sena<small>Pesquisa · Tecnologia · Ciência</small></a><button class="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Abrir menu">☰</button><div class="nav-links" id="nav-links"><a href="index.html">Início</a><a href="index.html#pesquisas">Pesquisas</a><a href="projetos.html">Projetos</a><a href="sobre.html">Sobre</a><a href="contato.html">Contato</a></div></nav></header>`;
const footer = `<footer class="site-footer"><div class="wrapper"><div class="footer-grid"><div><p class="footer-name">Alice Maria Sena Pereira</p><p class="footer-tag">Pesquisa · Tecnologia · Ciência</p></div><div class="footer-links"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a><a href="mailto:alice.sena@outlook.com">E-mail</a></div></div><p class="copyright">© 2026 Alice Maria Sena Pereira</p></div></footer>`;
document.getElementById("site-header").innerHTML = header;
document.getElementById("site-footer").innerHTML = footer;
const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((a) => {
  if (
    a.getAttribute("href") === current ||
    (current === "pesquisa.html" && a.textContent === "Pesquisas")
  )
    a.setAttribute("aria-current", "page");
});
const toggle = document.querySelector(".nav-toggle"),
  links = document.querySelector(".nav-links");
toggle?.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
  toggle.textContent = open ? "×" : "☰";
});
links
  ?.querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open")),
  );
const back = document.querySelector(".back-top");
addEventListener(
  "scroll",
  () => back?.classList.toggle("show", scrollY > 450),
  { passive: true },
);
back?.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
function projectMarkup(project) {
  return `<article class="project"><p class="eyebrow">${project.status}</p><h3>${project.name}</h3><p>${project.description}</p><footer>${project.tech}</footer></article>`;
}
document
  .getElementById("project-preview")
  ?.insertAdjacentHTML("beforeend", projects.map(projectMarkup).join(""));
document
  .getElementById("projects-page")
  ?.insertAdjacentHTML("beforeend", projects.map(projectMarkup).join(""));
const grid = document.getElementById("research-grid"),
  filters = document.getElementById("filters");
function researchCard(a) {
  return `<article class="research-card"><a class="card-link" href="pesquisa.html?id=${a.id}" aria-label="Ler pesquisa: ${a.title}"></a><p class="card-meta">Pesquisa #${a.number} · ${a.category} · ${a.year}</p><h3>${a.title}</h3><p>${a.excerpt}</p><div class="tags">${a.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div><span class="read-more">Ler pesquisa <span aria-hidden="true">→</span></span></article>`;
}
if (grid) {
  const categories = [
    "Todos",
    "Inteligência Artificial",
    "Estatística",
    "Computação",
    "Educação",
    "Engenharia de Software",
  ];
  filters.innerHTML = categories
    .map(
      (c, i) =>
        `<button class="filter" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`,
    )
    .join("");
  const render = (filter) =>
    (grid.innerHTML =
      articles
        .filter(
          (a) =>
            filter === "Todos" ||
            a.tags.includes(filter) ||
            a.category === filter,
        )
        .map(researchCard)
        .join("") || "<p>Nenhuma pesquisa nesta categoria.</p>");
  render("Todos");
  filters.addEventListener("click", (e) => {
    if (!e.target.matches(".filter")) return;
    filters
      .querySelectorAll(".filter")
      .forEach((b) => b.setAttribute("aria-pressed", "false"));
    e.target.setAttribute("aria-pressed", "true");
    render(e.target.dataset.filter);
  });
}
