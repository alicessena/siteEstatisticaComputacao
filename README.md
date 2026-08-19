# Blog Acadêmico — Alice Sena

Site pessoal de divulgação científica de Alice Maria Sena Pereira. O projeto reúne pesquisas, estudos e projetos nas áreas de Tecnologia, Computação, Inteligência Artificial, Estatística e Educação.

## Tecnologias

- HTML5 semântico
- CSS3 responsivo
- JavaScript puro
- Google Fonts: Playfair Display e DM Sans

Não há dependências, processo de build ou instalação necessária.

## Como executar

Abra [index.html](./index.html) em um navegador. Para uma experiência mais próxima da publicação, recomenda-se usar uma extensão de servidor local, como Live Server no VS Code.

## Páginas

| Página | Finalidade |
| --- | --- |
| `index.html` | Página inicial, acervo de pesquisas e projetos em destaque. |
| `pesquisa.html?id=...` | Página dinâmica de cada artigo. |
| `sobre.html` | Trajetória e áreas de interesse da pesquisadora. |
| `projetos.html` | Projetos acadêmicos e tecnológicos. |
| `contato.html` | Canais de contato e redes profissionais. |

## Pesquisas

As publicações são mantidas em [data/articles.js](./data/articles.js). Cada item do array `articles` define metadados, resumo, tags, seções e referências de uma pesquisa.

Para cadastrar uma nova publicação:

1. Adicione um objeto ao array `articles`.
2. Defina um `id` único e legível, por exemplo `meu-novo-estudo`.
3. Preencha `title`, `category`, `year`, `excerpt`, `tags`, `abstract` e `sections`.
4. Acesse a pesquisa em `pesquisa.html?id=meu-novo-estudo`.

O card e os filtros da página inicial são gerados automaticamente a partir desse arquivo.

## Estrutura

```text
.
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── reference-theme.css
│   ├── documents/
│   └── js/
│       ├── app.js
│       └── article.js
├── data/
│   └── articles.js
├── index.html
├── pesquisa.html
├── sobre.html
├── projetos.html
└── contato.html
```

## Personalização antes da publicação

- Atualize os links de LinkedIn, GitHub e Instagram no rodapé.
- Atualize o endereço de e-mail em `contato.html` e `assets/js/app.js`.
- Revise o conteúdo e as referências de cada pesquisa antes de tornar o site público.

## Acessibilidade e responsividade

O projeto inclui navegação por teclado, foco visível, menu mobile, contraste de cores, tabela com rolagem horizontal em telas pequenas e suporte a `prefers-reduced-motion`.

## Créditos

Conteúdo acadêmico e autoria: Alice Maria Sena Pereira, CESAR School — Embarque Digital, 2026.
