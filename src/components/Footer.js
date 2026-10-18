/**
 * Componente Footer (Rodapé institucional + botão de compartilhamento)
 */
window.LNPRO = window.LNPRO || {};

window.LNPRO.renderFooter = function renderFooter() {
  const { CONFIG } = window.LNPRO;
  const currentYear = new Date().getFullYear();
  const institutionalText = CONFIG.cnpj
    ? `${CONFIG.legalName || CONFIG.company} · CNPJ ${CONFIG.cnpj}`
    : `Consultoria Autorizada ${CONFIG.company} · ${CONFIG.name}`;

  return `
    <footer class="footer">
      <div class="brand">LN <span>PRO</span> ↗</div>
      <p>Proteção Veicular · Maceió, AL · Atendimento 24h 0800 142 1622</p>
      <p id="institutional">${institutionalText}</p>
      <button id="share" type="button" class="share">
        <i class="fa-solid fa-arrow-up-from-bracket" aria-hidden="true"></i>
        Compartilhar este Cartão Digital
      </button>
      <p>© <span id="year">${currentYear}</span> Criado por Gxcodev. Todos os direitos reservados.</p>
      <p style="margin-top:5px">${CONFIG.name} · ${CONFIG.whatsappDisplay}</p>
    </footer>
  `;
};
