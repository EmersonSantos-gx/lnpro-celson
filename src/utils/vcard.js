/**
 * Utilitário gerador do arquivo de contato (.vcf / vCard)
 */
window.LNPRO = window.LNPRO || {};

window.LNPRO.downloadVCard = function downloadVCard(onComplete) {
  const { CONFIG } = window.LNPRO;
  const escapeVCard = (str) =>
    String(str)
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,');

  const vcardLines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Rosendo;Celson;;;',
    `FN:${escapeVCard(CONFIG.name)}`,
    `ORG:${escapeVCard(CONFIG.company)}`,
    'TITLE:Consultor Autorizado de Proteção Veicular',
    `TEL;TYPE=CELL,VOICE:+${CONFIG.whatsapp}`,
    `URL:https://www.instagram.com/${CONFIG.instagram}/`,
    'NOTE:Proteção Veicular LN PRO - Maceió AL e Todo o Brasil',
    'END:VCARD',
    ''
  ].join('\r\n');

  const blob = new Blob([vcardLines], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Celson-Rosendo-LN-PRO.vcf';
  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => URL.revokeObjectURL(url), 10000);

  if (typeof onComplete === 'function') {
    onComplete('Contato gerado! Abra o arquivo baixado para salvar na agenda.');
  }
};
