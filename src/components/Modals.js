/**
 * Componente Modals (Dialogs de Assistência 24h, Indique e Ganhe, Compartilhar e Toast)
 */
window.LNPRO = window.LNPRO || {};

window.LNPRO.renderModals = function renderModals() {
  const { CONFIG, buildWhatsAppUrl } = window.LNPRO;
  const referralUrl = buildWhatsAppUrl(
    'Olá, Celson! Quero participar do programa Indique um Amigo da LN PRO.'
  );
  const assistDefaultUrl = buildWhatsAppUrl(
    'Olá, Celson! Sou associado LN PRO e preciso de suporte para acionar a Assistência 24h / Guincho.'
  );

  return `
    <div id="toast" class="toast" role="status" aria-live="polite"></div>

    <dialog id="assist-dialog" aria-labelledby="assist-title">
      <button type="button" class="close" data-close aria-label="Fechar">
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
      </button>
      <h2 id="assist-title">Assistência 24h ${CONFIG.company}</h2>
      <p id="assist-copy">
        Associado ativo ${CONFIG.company}: tenha em mãos a placa do veículo e sua localização atual para agilizar o atendimento de emergência ou solicitação de guincho.
      </p>
      <p id="assist-note">
        Clique abaixo para receber suporte imediato ou o número direto da central 0800 da sua região.
      </p>
      <a id="assist-link" class="dialog-action" href="${assistDefaultUrl}" target="_blank" rel="noopener noreferrer">
        Solicitar Suporte de Assistência 24h
      </a>
    </dialog>

    <dialog id="refer-dialog" aria-labelledby="refer-title">
      <button type="button" class="close" data-close aria-label="Fechar">
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
      </button>
      <h2 id="refer-title">Indique e Ganhe ${CONFIG.company}</h2>
      <p>
        Conhece alguém que precisa proteger o carro ou a moto? Indique um amigo para o consultor ${CONFIG.name} e aproveite condições especiais de indicação.
      </p>
      <a
        class="dialog-action"
        href="${referralUrl}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Enviar Indicação pelo WhatsApp
      </a>
    </dialog>

    <dialog id="share-dialog" aria-labelledby="share-title">
      <button type="button" class="close" data-close aria-label="Fechar">
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
      </button>
      <h2 id="share-title">Compartilhar Cartão Digital</h2>
      <p>Copie o link abaixo e envie para quem precisa de proteção veicular:</p>
      <label for="share-url" class="field-label">Link do Cartão Digital</label>
      <input id="share-url" readonly>
      <button id="copy-share" type="button" class="dialog-action" style="width:100%">
        Copiar link
      </button>
    </dialog>
  `;
};
