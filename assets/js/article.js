const root = document.getElementById("article-root");
const id = new URLSearchParams(location.search).get("id");
const article = articles.find((a) => a.id === id);
if (!article) {
  root.innerHTML =
    '<section class="not-found"><p class="eyebrow">Pesquisa não encontrada</p><h1>Este caderno ainda não tem essa página.</h1><a class="button" href="index.html#pesquisas">Ver pesquisas</a></section>';
} else {
  document.title = `${article.title} — Alice Sena`;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", article.description);
  const nav = article.sections
    .map((s) => `<a href="#${s[0]}">${s[1]}</a>`)
    .join("");
  const content = article.sections
    .map((s) => `<section id="${s[0]}"><h2>${s[1]}</h2>${s[2]}</section>`)
    .join("");
  const reader = article.sourcePdf
    ? `<section class="document-reader" id="texto-integral" aria-labelledby="integral-title"><div class="reader-heading"><div><p class="eyebrow">Texto original</p><h2 id="integral-title">Pesquisa na íntegra</h2><p>Esta é a versão integral do documento fornecido, preservada com sua redação, estrutura, tabelas, referências e paginação originais.</p></div><a class="button" href="${article.sourcePdf}" target="_blank">Abrir em nova aba</a></div><object class="pdf-viewer" data="${article.sourcePdf}#view=FitH" type="application/pdf" aria-label="Documento integral: ${article.title}"><p>Seu navegador não exibiu o PDF. <a href="${article.sourcePdf}" target="_blank">Abra o documento integral</a>.</p></object></section>`
    : "";
  root.innerHTML = `<div class="wrapper"><p class="breadcrumb"><a href="index.html">Início</a> / <a href="index.html#pesquisas">Pesquisas</a> / ${article.category}</p><header class="article-header"><p class="article-kicker">PESQUISA #${article.number} · ${article.area.toUpperCase()}</p><h1>${article.title}</h1><div class="article-meta"><span>${article.author}</span><span>${article.institution}</span><span>Publicado em ${article.year}</span><span>${article.readingTime}</span></div><div class="tags">${article.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div></header><div class="article-layout"><nav class="article-nav" aria-label="Navegação do artigo"><strong>Índice</strong>${nav}<a href="#texto-integral">Pesquisa na íntegra</a><a href="${article.sourcePdf}" target="_blank">Abrir PDF</a></nav><article class="article-content"><section class="abstract"><h2>Resumo</h2><p>${article.abstract}</p></section>${content}${reader}</article></div></div>`;
}
