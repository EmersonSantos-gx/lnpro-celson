/**
 * Componente CoverageGrid (Bento Grid 2x3 de Coberturas e Benefícios)
 */
window.LNPRO = window.LNPRO || {};

window.LNPRO.renderCoverageGrid = function renderCoverageGrid() {
  const { CONFIG } = window.LNPRO;
  const cardsHtml = CONFIG.coverages
    .map(
      (item) => `
        <article class="benefit glass">
          <span class="number">${item.number}</span>
          <i class="fa-solid ${item.icon}" aria-hidden="true"></i>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join('');

  return `
    <section id="coberturas" class="benefits" aria-labelledby="coverage-title">
      <div class="section-kicker">Tecnologia para ir além</div>
      <div class="section-head">
        <h2 id="coverage-title">Você segue. A gente protege.</h2>
      </div>

      <div class="bento">
        ${cardsHtml}
      </div>

      <p class="conditions">
        Coberturas, limites e benefícios aplicáveis conforme o plano escolhido e o regulamento vigente da ${CONFIG.company}.
      </p>
    </section>
  `;
};
