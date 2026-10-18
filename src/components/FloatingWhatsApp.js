/**
 * Componente FloatingWhatsApp (Botão Flutuante Fixo no Canto Inferior Direito)
 */
window.LNPRO = window.LNPRO || {};

window.LNPRO.renderFloatingWhatsApp = function renderFloatingWhatsApp() {
  const whatsappUrl = window.LNPRO.buildWhatsAppUrl();

  return `
    <a
      class="fab"
      href="${whatsappUrl}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar cotação pelo WhatsApp"
    >
      <span class="fab-label">Cotação Online Agora</span>
      <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
      <span class="fab-badge" aria-hidden="true">1</span>
    </a>
  `;
};
