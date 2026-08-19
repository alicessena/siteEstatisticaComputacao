/* Fonte única do acervo. Novos artigos devem ser adicionados a este array. */
const articles = [
  {
    id: "assimetria-curtose",
    number: "01",
    category: "Estatística",
    area: "Estatística × Inteligência Artificial",
    year: 2026,
    title:
      "Assimetria e Curtose: uma análise comparativa das interpretações produzidas por Large Language Models sobre a forma das distribuições estatísticas",
    author: "Alice Maria Sena Pereira",
    institution: "CESAR School – Embarque Digital",
    readingTime: "aproximadamente 8 min",
    sourcePdf: "assets/documents/assimetria-e-curtose.pdf",
    excerpt:
      "Uma investigação comparativa sobre como ChatGPT e Google Gemini explicam assimetria e curtose e sobre a necessidade de validação científica das respostas produzidas por LLMs.",
    description:
      "Análise comparativa das interpretações de ChatGPT e Google Gemini sobre assimetria e curtose em distribuições estatísticas.",
    tags: ["Estatística", "Inteligência Artificial", "LLMs", "Pesquisa"],
    abstract:
      "Esta pesquisa analisa comparativamente como as Large Language Models ChatGPT e Google Gemini interpretam os conceitos de assimetria e curtose em distribuições estatísticas. As respostas produzidas pelas ferramentas são confrontadas com a literatura científica, com o objetivo de identificar convergências, divergências e limitações. O estudo reforça que LLMs podem apoiar a exploração inicial de conceitos, mas não substituem a validação em fontes especializadas e o pensamento crítico do pesquisador.",
    sections: [
      [
        "introducao",
        "1. Introdução",
        `<p>Ao analisar um conjunto de dados, observar apenas seus valores não é suficiente para compreender o comportamento de uma distribuição. Duas bases podem apresentar médias semelhantes e, ainda assim, possuir comportamentos bastante diferentes quando se observa a forma como os valores estão distribuídos. É nesse contexto que medidas como assimetria e curtose ganham importância, pois permitem olhar para características da distribuição que nem sempre são percebidas por medidas de tendência central.</p><p>A assimetria está relacionada ao grau de equilíbrio ou desequilíbrio de uma distribuição em torno de seu centro, permitindo identificar a presença de uma cauda mais alongada em determinada direção. Já a curtose está associada ao comportamento das caudas e à ocorrência ou propensão de valores extremos. Embora esses conceitos sejam frequentemente apresentados de maneira simplificada, sua interpretação exige cuidado.</p><p>Paralelamente, o avanço das Large Language Models criou novas formas de buscar explicações e interpretar conceitos técnicos. Esta pesquisa propõe uma análise comparativa das respostas produzidas por ChatGPT e Google Gemini sobre assimetria e curtose, confrontando-as com a literatura estatística. Mais do que identificar qual ferramenta oferece a melhor explicação, busca-se compreender como a IA pode ser utilizada como ponto de partida para a aprendizagem sem substituir investigação, análise e validação científica.</p>`,
      ],
      [
        "problema",
        "2. Problema da Pesquisa",
        `<p>Caracteristicas relacionadas à assimetria e à curtose podem revelar informações importantes sobre a forma dos dados, a presença de caudas mais alongadas e a ocorrência de valores extremos. Entretanto, esses conceitos costumam ser apresentados de maneira simplificada, especialmente em materiais introdutórios. Essa simplificação pode gerar interpretações equivocadas, como tratar a curtose apenas como medida de “pico” ou “achatamento”.</p><p>O crescimento das LLMs oferece a estudantes e pesquisadores explicações rápidas e acessíveis, mas uma resposta gerada por IA não deve ser automaticamente considerada uma fonte científica. A questão que orienta este estudo é: em que medida as explicações de ChatGPT e Google Gemini sobre assimetria e curtose são compatíveis com a literatura estatística?</p>`,
      ],
      [
        "objetivos",
        "3. Objetivos",
        `<h3>3.1 Objetivo geral</h3><p>Analisar comparativamente como as Large Language Models ChatGPT e Google Gemini interpretam os conceitos de assimetria e curtose em distribuições estatísticas, confrontando suas respostas com a literatura científica a fim de identificar convergências, divergências e possíveis limitações.</p><h3>3.2 Objetivos específicos</h3><ul><li>Compreender os conceitos de assimetria e curtose e sua importância na interpretação de distribuições estatísticas.</li><li>Diferenciar assimetria positiva, negativa e distribuição simétrica.</li><li>Investigar as classificações leptocúrtica, mesocúrtica e platicúrtica e sua relação com as caudas.</li><li>Comparar as respostas das duas LLMs a partir de um mesmo conjunto de perguntas.</li><li>Validar as informações apresentadas por meio de artigos, livros e outras fontes acadêmicas.</li><li>Refletir sobre o uso de LLMs como apoio à aprendizagem de Estatística.</li></ul>`,
      ],
      [
        "metodologia",
        "4. Metodologia",
        `<h3>4.1 Caracterização da pesquisa</h3><p>A pesquisa caracteriza-se como exploratória, qualitativa, comparativa e de natureza bibliográfica e documental. As LLMs são utilizadas como instrumentos de exploração e comparação, e não como fontes científicas primárias.</p><h3>4.2 Delimitação do objeto de estudo</h3><p>O objeto corresponde às respostas textuais produzidas por ChatGPT e Google Gemini acerca de sete aspectos: conceito de assimetria; assimetria positiva, negativa e distribuição simétrica; conceito de curtose; classificações de curtose; relação com caudas; relação entre assimetria, média, mediana e moda; e aplicações práticas.</p><h3>4.3 Seleção das LLMs</h3><p>Foram selecionados ChatGPT e Google Gemini por serem ferramentas amplamente conhecidas e utilizadas para consulta e explicação de conteúdos em linguagem natural.</p><h3>4.4 Instrumento de coleta</h3><p>Foi aplicado o mesmo conjunto de perguntas às duas ferramentas. A padronização reduz diferenças decorrentes da formulação e permite analisar as respostas sob critérios comuns.</p><h3>4.5 Procedimento de coleta</h3><ol><li>Aplicação do prompt no ChatGPT.</li><li>Aplicação do mesmo prompt no Google Gemini.</li><li>Organização das respostas para leitura comparativa.</li><li>Comparação dos conteúdos apresentados.</li><li>Validação científica com literatura especializada.</li><li>Interpretação dos resultados.</li></ol><h3>4.6 Estratégia de análise das respostas</h3><p>A análise considerou precisão conceitual, clareza, completude, relação com exemplos e possíveis simplificações. A literatura foi empregada para verificar compatibilidade conceitual, em especial a interpretação de curtose como característica associada às caudas.</p><h3>4.7 Análise comparativa</h3><p>As respostas foram organizadas por conceito e confrontadas entre si e com fontes acadêmicas. A análise não procura tratar uma LLM como autoridade, mas identificar como cada uma constrói explicações.</p><h3>4.8 Validação científica</h3><p>A validação foi realizada com obras e artigos presentes nas referências desta pesquisa. Essa etapa é indispensável porque respostas de modelos podem conter simplificações, omissões ou informações imprecisas.</p><h3>4.9 Critérios de análise</h3><p>Foram considerados: coerência com a literatura, clareza da explicação, presença de contextualização, tratamento das caudas e dos valores extremos, e adequação dos exemplos apresentados.</p><h3>4.10 Limitações da pesquisa</h3><p>As respostas de LLMs variam conforme versão, contexto e formulação do prompt. A comparação reflete as respostas obtidas no recorte da pesquisa e não estabelece avaliação definitiva sobre as ferramentas.</p><h3>4.11 Síntese metodológica</h3><p>O percurso metodológico articula coleta padronizada, análise qualitativa, comparação e validação bibliográfica, preservando o papel da literatura científica como referência para as conclusões.</p>`,
      ],
      [
        "resultados",
        "5. Resultados",
        `<h3>5.1 Resposta do ChatGPT</h3><p>A resposta do ChatGPT apresentou definições de assimetria e curtose em linguagem acessível, relacionando a assimetria à direção das caudas e à posição das medidas de tendência central. A explicação indicou que a curtose se relaciona à concentração e ao comportamento dos extremos, aspecto que requer ressalva quando reduzido apenas à ideia de “pontudeza”.</p><h3>5.2 Resposta do Gemini</h3><p>A resposta atribuída ao Gemini apresentou os conceitos de modo organizado e com exemplos. Na análise comparativa, observou-se convergência geral com a explicação de assimetria e a necessidade de cuidado na apresentação de curtose, pois o conceito exige contextualização sobre caudas e valores extremos.</p><h3>5.3 Comparação entre as respostas</h3><p>As duas ferramentas produziram explicações úteis como ponto de partida. Contudo, a confrontação com a literatura mostra que explicações sintéticas devem ser lidas criticamente, sobretudo quando a curtose é associada exclusivamente ao formato do pico.</p>${comparisonTable()}${distributionCharts()}<blockquote>As LLMs podem auxiliar na exploração inicial de conceitos; a fundamentação e a validação das informações permanecem responsabilidades do pesquisador.</blockquote>`,
      ],
      [
        "conclusao",
        "6. Conclusão",
        `<p>A pesquisa demonstrou que ChatGPT e Google Gemini são capazes de apresentar conceitos fundamentais de Estatística de maneira acessível e relativamente convergente. Entretanto, a etapa de validação mostrou que uma resposta produzida por IA não deve ser automaticamente considerada uma fonte científica.</p><p>A análise da literatura permitiu aprofundar conceitos que haviam sido apresentados de maneira simplificada, especialmente a compreensão da curtose. No contexto de Análise e Desenvolvimento de Sistemas, conhecimentos estatísticos são relevantes para análise de métricas de software, desempenho, comportamento de usuários, testes, Ciência de Dados, Inteligência Artificial e Machine Learning.</p><p>A principal contribuição não está em determinar qual LLM apresentou a melhor resposta, mas em demonstrar que seu uso pode integrar um processo de investigação responsável: a tecnologia como instrumento de apoio, e a responsabilidade pela análise, validação e construção do conhecimento com o pesquisador.</p>`,
      ],
      [
        "referencias",
        "7. Referências",
        `<ul class="references"><li>JOANES, D. N.; GILL, C. A. Comparing measures of sample skewness and kurtosis. <em>Journal of the Royal Statistical Society: Series D</em>, v. 47, n. 1, p. 183–189, 1998. <a href="https://doi.org/10.1111/1467-9884.00122" target="_blank" rel="noreferrer">DOI: 10.1111/1467-9884.00122</a>.</li><li>WESTFALL, P. H. Kurtosis as Peakedness, 1905–2014. R.I.P. <em>The American Statistician</em>, v. 68, n. 3, p. 191–195, 2014. <a href="https://doi.org/10.1080/00031305.2014.917055" target="_blank" rel="noreferrer">DOI: 10.1080/00031305.2014.917055</a>.</li><li>MEYER, J. G. et al. ChatGPT and large language models in academia: opportunities and challenges. <em>BioData Mining</em>, v. 16, n. 20, 2023. <a href="https://doi.org/10.1186/s13040-023-00339-9" target="_blank" rel="noreferrer">DOI: 10.1186/s13040-023-00339-9</a>.</li></ul>`,
      ],
    ],
  },
  {
    id: "estatistica-computacao",
    number: "02",
    category: "Computação",
    area: "Computação × Estatística",
    year: 2026,
    title:
      "Estatística na Computação: uma análise comparativa das respostas de Large Language Models sobre conceitos, origem e aplicações na Análise e Desenvolvimento de Sistemas",
    author: "Alice Maria Sena Pereira",
    institution: "CESAR School – Embarque Digital",
    readingTime: "aproximadamente 9 min",
    sourcePdf: "assets/documents/estatistica-na-computacao.pdf",
    excerpt:
      "Uma investigação sobre conceitos, origem e aplicações da Estatística na formação em Análise e Desenvolvimento de Sistemas.",
    description:
      "Estudo sobre Estatística, Computação e respostas de Large Language Models.",
    tags: ["Computação", "Estatística", "Inteligência Artificial", "ADS"],
    abstract:
      "Esta pesquisa investiga a Estatística a partir de uma perspectiva aplicada à Computação, utilizando ChatGPT e Google Gemini como ferramentas auxiliares e objetos de análise crítica. As respostas sobre conceito, origem, finalidade e aplicações da Estatística são confrontadas com a literatura científica.",
    sections: [
      [
        "ideia",
        "1. Ideia da pesquisa",
        `<p>A presente pesquisa investiga a Estatística a partir de uma perspectiva aplicada à Computação, utilizando Large Language Models como ferramentas auxiliares no processo de investigação e construção do conhecimento. A atividade parte de quatro questões: o que é Estatística, como surgiu, para que serve e onde se aplica na formação em Análise e Desenvolvimento de Sistemas.</p><p>A Estatística não deve ser compreendida apenas como conjunto de fórmulas ou procedimentos matemáticos, mas como uma forma de pensar sobre problemas que envolvem dados, incerteza e tomada de decisões. Essa perspectiva é relevante para a Computação, onde dados são continuamente produzidos para compreender comportamentos, avaliar sistemas, identificar padrões e apoiar decisões.</p><p>A investigação utiliza LLMs como instrumentos de exploração e como objetos de análise crítica. As respostas são comparadas com literatura especializada, pois modelos podem produzir informações coerentes sem que elas sejam necessariamente verificáveis.</p>`,
      ],
      [
        "llms",
        "2. Seleção das LLMs e levantamento inicial",
        `<h3>2.1 Perguntas utilizadas</h3><p>Foram selecionadas duas ferramentas baseadas em Large Language Models: ChatGPT e Google Gemini. Ambas receberam o mesmo conjunto de perguntas: “O que é Estatística?”, “Como surgiu a Estatística? Qual foi seu contexto histórico?”, “Para que serve a Estatística?” e “Onde a Estatística se aplica na área de Análise e Desenvolvimento de Sistemas?”.</p><h3>2.2 Quadro comparativo das respostas</h3><div class="table-wrap"><table class="comparison"><thead><tr><th>Pergunta</th><th>ChatGPT</th><th>Gemini</th></tr></thead><tbody><tr><td>O que é Estatística?</td><td>Área dedicada à coleta, organização, análise, interpretação e apresentação de dados; inclui métodos descritivos e inferenciais.</td><td>Ciência que utiliza métodos para coletar, organizar, analisar e interpretar dados, incluindo média, mediana, moda, probabilidade e amostragem.</td></tr><tr><td>Como surgiu?</td><td>Relaciona a origem a necessidades administrativas dos Estados, censos e registros; destaca o desenvolvimento da probabilidade.</td><td>Relaciona a origem a governos e sociedades antigas e à posterior passagem para análise de incertezas e inferências.</td></tr><tr><td>Para que serve?</td><td>Transformar dados em evidências, identificar padrões, estimar, testar hipóteses e apoiar decisões.</td><td>Compreender dados, identificar tendências, comparar grupos e estimar resultados.</td></tr><tr><td>Aplicações em ADS</td><td>Métricas, usuários, desempenho, testes, indicadores, Ciência de Dados e IA.</td><td>Análise de usuários, desempenho, testes, erros, métricas, Ciência de Dados e Machine Learning.</td></tr></tbody></table></div><h3>2.3 Análise comparativa das respostas</h3><p>Os modelos apresentam uma compreensão relativamente convergente: Estatística é associada à coleta, organização, análise e interpretação de dados, bem como à tomada de decisões. O ChatGPT oferece maior distinção entre Estatística Descritiva e Inferencial; o Gemini enfatiza a transformação de dados em informações e exemplifica conceitos fundamentais.</p><p>Em ADS, a convergência é ainda mais clara: ambos mencionam comportamento de usuários, desempenho, testes, métricas e Inteligência Artificial. As respostas podem apoiar uma exploração inicial, mas a utilidade acadêmica exige confrontação com conhecimento produzido e validado pela comunidade científica.</p>`,
      ],
      [
        "validacao",
        "3. Pesquisa e validação das informações",
        `<p>A validação ocorreu por meio de literatura especializada sobre pensamento estatístico, Ciência de Dados, Estatística e Inteligência Artificial. Essa etapa é necessária porque LLMs podem apresentar conteúdos factualmente incorretos ou não verificáveis, mesmo quando a resposta é linguística e estruturalmente convincente.</p><p>As respostas automatizadas devem ser tratadas como ponto de partida para investigação, e não como fontes científicas primárias. O processo de validação aproxima a resposta gerada por máquina do conhecimento produzido e revisado pela comunidade científica.</p>`,
      ],
      [
        "fundamentacao",
        "4. Fundamentação teórica",
        `<h3>4.1 Conceito e natureza da Estatística</h3><p>A Estatística é uma área voltada à obtenção de informações a partir de dados, considerando variabilidade e incerteza nos fenômenos observados. Sua abrangência envolve descrição, comparação, modelagem, inferência e interpretação, e não apenas médias, porcentagens e gráficos.</p><h3>4.2 Estatística Descritiva e Estatística Inferencial</h3><p>A Estatística Descritiva organiza, sintetiza e apresenta dados observados, por meio de medidas como média, mediana, moda, amplitude, variância e desvio padrão. A Inferencial utiliza informações de uma amostra para produzir conclusões sobre uma população ou fenômeno mais amplo.</p><h3>4.3 Variabilidade e incerteza</h3><p>Dados reais apresentam variação. A Estatística oferece instrumentos para quantificá-la e interpretá-la, evitando conclusões que desconsiderem limitações do processo de coleta, amostragem e análise.</p><h3>4.4 Desenvolvimento histórico da Estatística</h3><p>Seu desenvolvimento foi gradual e relacionado a necessidades administrativas, sociais e científicas. Registros populacionais, censos e levantamentos foram antecedentes importantes; a Teoria das Probabilidades forneceu fundamentos para o tratamento da incerteza e para a consolidação de métodos modernos.</p><h3>4.5 Estatística, Computação e Ciência de Dados</h3><p>A Computação ampliou a capacidade de coletar, armazenar, processar e analisar dados. Em Ciência de Dados, métodos estatísticos são relevantes desde a aquisição e exploração até a modelagem, validação e comunicação de resultados. Mais capacidade computacional não elimina a necessidade de interpretar dados e avaliar a qualidade dos modelos.</p><h3>4.6 Estatística na Inteligência Artificial e no Machine Learning</h3><p>Modelos de aprendizado de máquina dependem de dados para identificar padrões, prever e classificar. A Estatística contribui para a modelagem, validação e compreensão da incerteza: uma previsão não deve ser interpretada como certeza absoluta.</p><h3>4.7 Síntese da fundamentação</h3><p>A Estatística articula dados, variabilidade, incerteza, métodos matemáticos e tomada de decisões. Por isso, é um conhecimento relevante para ADS, especialmente diante da integração entre software, dados e Inteligência Artificial.</p>`,
      ],
      [
        "conclusao",
        "5. Conclusão",
        `<p>A pesquisa permitiu compreender a Estatística para além de sua dimensão matemática e evidenciar sua relevância na Computação e na formação em Análise e Desenvolvimento de Sistemas. ChatGPT e Gemini apresentaram conceitos fundamentais de forma acessível e relativamente convergente.</p><p>A validação, contudo, mostrou que uma resposta de IA não deve ser tomada automaticamente como fonte científica. A literatura complementa e aprofunda conceitos apresentados de maneira simplificada, reforçando a necessidade de raciocínio, interpretação, avaliação de incerteza e construção de conclusões fundamentadas.</p><p>A principal contribuição do estudo não é definir qual LLM respondeu melhor, mas demonstrar que essas ferramentas podem integrar um processo responsável de investigação: a tecnologia apoia a exploração, enquanto a análise, a validação e a construção do conhecimento permanecem com o pesquisador.</p>`,
      ],
      [
        "referencias",
        "Referências",
        `<ul class="references"><li>WILD, C. J.; PFANNKUCH, M. Statistical Thinking in Empirical Enquiry. <em>International Statistical Review</em>, v. 67, n. 3, p. 223–248, 1999.</li><li>DONOHO, D. 50 Years of Data Science. <em>Journal of Computational and Graphical Statistics</em>, 2017.</li><li>WEIHS, C.; ICKSTADT, K. Data Science: the impact of statistics. <em>International Journal of Data Science and Analytics</em>, v. 6, p. 189–194, 2018. <a href="https://doi.org/10.1007/s41060-018-0102-5" target="_blank" rel="noreferrer">DOI: 10.1007/s41060-018-0102-5</a>.</li><li>SCOTT, E. M. The role of Statistics in the era of big data: Crucial, critical and under-valued. <em>Statistics & Probability Letters</em>, v. 136, p. 20–24, 2018. <a href="https://doi.org/10.1016/j.spl.2018.02.050" target="_blank" rel="noreferrer">DOI: 10.1016/j.spl.2018.02.050</a>.</li><li>AMERICAN STATISTICAL ASSOCIATION. ASA Statement on the Role of Statistics in Data Science and Artificial Intelligence. Alexandria, VA, 2023.</li></ul>`,
      ],
    ],
  },
];

const projects = [
  {
    name: "Tectris",
    description:
      "Projeto acadêmico que articula desenvolvimento de software, lógica e experiência de interação.",
    tech: "Desenvolvimento de Software",
    status: "Em desenvolvimento",
  },
  {
    name: "Saúde Mais",
    description:
      "Iniciativa voltada à exploração de soluções digitais para contextos de saúde.",
    tech: "Tecnologia e impacto social",
    status: "Em desenvolvimento",
  },
  {
    name: "Rota Vital",
    description:
      "Projeto de investigação tecnológica orientado por problemas reais e acessibilidade.",
    tech: "Pesquisa aplicada",
    status: "Em estudo",
  },
];

function comparisonTable() {
  return `<div class="table-wrap"><table class="comparison"><caption class="sr-only">Quadro comparativo entre as respostas e a literatura</caption><thead><tr><th>Conceito</th><th>ChatGPT</th><th>Gemini</th><th>Literatura científica</th><th>Resultado</th></tr></thead><tbody><tr><td>Assimetria</td><td>Relaciona a direção da cauda e o desequilíbrio.</td><td>Apresenta definição equivalente.</td><td>Relaciona-se ao grau de simetria da distribuição.</td><td><span class="status validated">Validado</span></td></tr><tr><td>Curtose</td><td>Explicação acessível, com simplificação do formato.</td><td>Apresenta classificação em tipos.</td><td>Relação mais consistente com caudas e valores extremos.</td><td><span class="status qualified">Validado com ressalva</span></td></tr><tr><td>Uso de LLMs</td><td>Apoio à explicação inicial.</td><td>Apoio à explicação inicial.</td><td>Exige verificação em fontes científicas.</td><td><span class="status validated">Validado</span></td></tr></tbody></table></div>`;
}
function distributionCharts() {
  return `<figure class="chart-figure"><svg viewBox="0 0 700 240" role="img" aria-labelledby="chart-title chart-desc"><title id="chart-title">Formas de assimetria em distribuições</title><desc id="chart-desc">Três curvas representam distribuição simétrica, assimetria positiva e assimetria negativa.</desc><g fill="none" stroke="#d9d6cf"><path d="M30 188H670"/><path d="M245 28V188M470 28V188"/></g><g font-family="DM Sans, sans-serif" font-size="13" fill="#66645f"><text x="75" y="220">Simétrica</text><text x="275" y="220">Positiva</text><text x="510" y="220">Negativa</text></g><g fill="none" stroke="#6b5b4d" stroke-width="3"><path d="M45 188 C85 188 92 44 137 44 C182 44 189 188 229 188"/><path d="M260 188 C300 188 300 49 343 49 C390 49 378 188 455 188"/><path d="M485 188 C565 188 553 49 598 49 C638 49 642 188 665 188"/></g><g font-family="DM Sans, sans-serif" font-size="11" fill="#6b5b4d"><text x="92" y="24">caudas equilibradas</text><text x="327" y="24">cauda à direita</text><text x="550" y="24">cauda à esquerda</text></g></svg><figcaption><strong>Figura 1.</strong> Representação didática da assimetria: a direção da cauda mais longa indica o sentido da assimetria.</figcaption></figure><figure class="chart-figure"><svg viewBox="0 0 700 220" role="img" aria-labelledby="kurt-title"><title id="kurt-title">Comparação didática das classificações de curtose</title><g fill="none" stroke="#d9d6cf"><path d="M30 176H670"/></g><g fill="none" stroke-width="3"><path stroke="#6b5b4d" d="M45 176 C102 176 112 26 138 26 C164 26 174 176 230 176"/><path stroke="#64788a" d="M250 176 C292 176 305 60 350 60 C395 60 408 176 450 176"/><path stroke="#8a7764" d="M470 176 C500 176 510 99 570 99 C630 99 640 176 665 176"/></g><g font-family="DM Sans, sans-serif" font-size="13" fill="#66645f"><text x="89" y="205">Leptocúrtica</text><text x="313" y="205">Mesocúrtica</text><text x="548" y="205">Platicúrtica</text></g></svg><figcaption><strong>Figura 2.</strong> Visualização didática das classificações. A leitura acadêmica de curtose deve priorizar o comportamento das caudas e a propensão a valores extremos, não apenas a altura do pico.</figcaption></figure>`;
}
