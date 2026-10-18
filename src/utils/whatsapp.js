/**
 * Utilitários de links do WhatsApp e URL compartilhável
 */
window.LNPRO = window.LNPRO || {};

window.LNPRO.buildWhatsAppUrl = function buildWhatsAppUrl(customMessage) {
  const { CONFIG } = window.LNPRO;
  const message = customMessage || CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
};

window.LNPRO.getShareableUrl = function getShareableUrl() {
  const { CONFIG } = window.LNPRO;
  if (CONFIG.publicUrl) return CONFIG.publicUrl;
  if (/^https?:$/.test(window.location.protocol)) {
    return window.location.href.split('#')[0];
  }
  return `https://www.instagram.com/${CONFIG.instagram}/`;
};
