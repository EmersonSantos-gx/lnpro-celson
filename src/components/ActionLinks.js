/**
 * Componente ActionLinks (Botões empilhados de Coberturas, Assistência 24h e Indicação)
 */
window.LNPRO = window.LNPRO || {};

window.LNPRO.renderActionLinks = function renderActionLinks() {
  return `
    <a href="#coberturas" class="glass link-card">
      <span class="link-icon"><i class="fa-solid fa-layer-group" aria-hidden="true"></i></span>
      <span>
        <strong>Conhecer Coberturas e Benefícios Exclusivos</strong>
        <small>Veja todos os diferenciais da proteção LN PRO</small>
      </span>
      <i class="fa-solid fa-chevron-right arrow" aria-hidden="true"></i>
    </a>

    <button id="assistance" type="button" class="glass link-card">
      <span class="link-icon amber"><i class="fa-solid fa-truck-pickup" aria-hidden="true"></i></span>
      <span>
        <strong>Acionar Assistência 24h / Guincho</strong>
        <small>Suporte imediato e orientação para associados ativos</small>
      </span>
      <i class="fa-solid fa-chevron-right arrow" aria-hidden="true"></i>
    </button>

    <button id="referral" type="button" class="glass link-card">
      <span class="link-icon violet"><i class="fa-solid fa-gift" aria-hidden="true"></i></span>
      <span>
        <strong>Indique um Amigo e Ganhe Benefícios</strong>
        <small>Compartilhe proteção e aproveite condições especiais</small>
      </span>
      <i class="fa-solid fa-chevron-right arrow" aria-hidden="true"></i>
    </button>
  `;
};
