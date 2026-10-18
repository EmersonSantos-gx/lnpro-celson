/**
 * Componente PrimaryCTA (Botão de destaque para Cotação Expressa)
 */
window.LNPRO = window.LNPRO || {};

window.LNPRO.renderPrimaryCTA = function renderPrimaryCTA() {
  const expressUrl = window.LNPRO.buildWhatsAppUrl(
    'Olá, Celson! Vim pelo seu cartão digital LN PRO e quero solicitar uma cotação expressa para meu veículo.'
  );

  return `
    <div class="section-kicker">Sua proteção começa aqui</div>

    <a
      class="primary"
      href="${expressUrl}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="icon"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></span>
      <span>
        <strong>Solicitar Cotação Expressa<br>no WhatsApp</strong>
        <small>Descubra o plano ideal para o seu veículo<br>com atendimento rápido e sem burocracia</small>
      </span>
      <i class="fa-solid fa-arrow-up-right-from-square arrow" aria-hidden="true"></i>
    </a>

    <p class="cta-note">Atendimento consultivo personalizado · Sem compromisso</p>
  `;
};
