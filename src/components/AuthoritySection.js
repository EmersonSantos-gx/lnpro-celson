/**
 * Componente AuthoritySection (Indicadores de Autoridade + Chamada Final)
 */
window.LNPRO = window.LNPRO || {};

window.LNPRO.renderAuthoritySection = function renderAuthoritySection() {
  const { CONFIG, buildWhatsAppUrl } = window.LNPRO;
  const contactUrl = buildWhatsAppUrl();

  return `
    <section class="authority glass" aria-label="Diferenciais de atendimento">
      <div class="authority-grid">
        <div>
          <div class="metric">100%</div>
          <p class="metric-label">Tabela<br>FIPE</p>
        </div>
        <div>
          <div class="metric">24/7</div>
          <p class="metric-label">Suporte &amp;<br>Assistência</p>
        </div>
        <div>
          <div class="metric">Nacional</div>
          <p class="metric-label">Cobertura em<br>todo o Brasil</p>
        </div>
      </div>
    </section>

    <section class="closing">
      <h2>Mais tranquilidade.<br><span>Em cada quilômetro.</span></h2>
      <p>Fale agora com ${CONFIG.name} e receba sua proposta sob medida.</p>
      <a class="text-link" href="${contactUrl}" target="_blank" rel="noopener noreferrer">
        Falar com Celson no WhatsApp <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </a>
    </section>
  `;
};
