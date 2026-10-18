/**
 * Ponto de entrada principal (main.js)
 * Monta todos os componentes na árvore DOM (#app) e inicializa os eventos.
 */
(function () {
  'use strict';

  function initApp() {
    const appRoot = document.querySelector('#app');
    if (!appRoot || !window.LNPRO) return;

    const {
      renderHeader,
      renderPrimaryCTA,
      renderSimulator,
      renderActionLinks,
      renderCoverageGrid,
      renderAuthoritySection,
      renderFooter,
      renderFloatingWhatsApp,
      renderModals
    } = window.LNPRO;

    appRoot.innerHTML = `
      <main id="topo" class="shell max-w-[440px] mx-auto">
        ${renderHeader()}
        <div class="content reveal delay">
          <section aria-label="Atendimento e simulação">
            ${renderPrimaryCTA()}
            ${renderSimulator()}
            ${renderActionLinks()}
          </section>
          ${renderCoverageGrid()}
          ${renderAuthoritySection()}
          ${renderFooter()}
        </div>
      </main>
      ${renderFloatingWhatsApp()}
      ${renderModals()}
    `;

    bindEvents();
  }

  function bindEvents() {
    const { CONFIG, buildWhatsAppUrl, getShareableUrl, downloadVCard } = window.LNPRO;
    const $ = (selector) => document.querySelector(selector);

    // Garante referrerpolicy="no-referrer" para carregar a foto do Imgur em qualquer ambiente (localhost, file://, GitHub)
    const avatarEl = $('#avatar');
    if (avatarEl) {
      avatarEl.referrerPolicy = 'no-referrer';
      avatarEl.src = CONFIG.photoUrl;
      avatarEl.addEventListener('error', function () {
        this.onerror = null;
        this.referrerPolicy = 'no-referrer';
        this.src = CONFIG.fallbackPhotoUrl;
      });
    }

    // Simulador Interativo de Veículo
    let selectedVehicle = 'Carro';
    const vehicleButtons = document.querySelectorAll('[data-vehicle]');
    vehicleButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedVehicle = btn.dataset.vehicle;
        vehicleButtons.forEach((item) => {
          item.setAttribute('aria-pressed', String(item === btn));
        });
      });
    });

    const simulatorForm = $('#simulator');
    if (simulatorForm) {
      simulatorForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const modelInput = $('#model');
        const model = modelInput ? modelInput.value.trim() : '';
        const message =
          `Olá, Celson! Quero fazer uma cotação na LN PRO. Veículo: ${selectedVehicle}.` +
          (model ? ` Modelo/ano: ${model}.` : '') +
          ' Pode me informar os planos disponíveis?';
        window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
      });
    }

    // Sistema de Notificação Toast
    let toastTimer;
    function notify(message) {
      const toastEl = $('#toast');
      if (!toastEl) return;
      clearTimeout(toastTimer);
      toastEl.textContent = message;
      toastTimer = setTimeout(() => {
        toastEl.textContent = '';
      }, 4200);
    }

    // Controle de Modais (<dialog>)
    function openDialog(id) {
      const dialog = $(id);
      if (dialog && typeof dialog.showModal === 'function') {
        dialog.showModal();
      }
    }

    document.querySelectorAll('dialog').forEach((dialog) => {
      const closeBtn = dialog.querySelector('[data-close]');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => dialog.close());
      }
      dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
          const rect = dialog.getBoundingClientRect();
          const clickedOutside =
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom;
          if (clickedOutside) dialog.close();
        }
      });
    });

    // Botão Assistência 24h
    const assistanceBtn = $('#assistance');
    if (assistanceBtn) {
      assistanceBtn.addEventListener('click', () => {
        const assistLink = $('#assist-link');
        const assistCopy = $('#assist-copy');
        if (CONFIG.assistancePhone && assistLink && assistCopy) {
          assistCopy.textContent =
            'Acione diretamente a central telefônica 24h da LN PRO. Tenha em mãos a placa do veículo e sua localização.';
          assistLink.href = 'tel:' + CONFIG.assistancePhone.replace(/\D/g, '');
          assistLink.removeAttribute('target');
          assistLink.textContent = `Ligar para Assistência 24h (${CONFIG.assistancePhone})`;
        }
        openDialog('#assist-dialog');
      });
    }

    // Botão Indique e Ganhe
    const referralBtn = $('#referral');
    if (referralBtn) {
      referralBtn.addEventListener('click', () => openDialog('#refer-dialog'));
    }

    // Botão Salvar Contato (vCard)
    const saveContactBtn = $('#save-contact');
    if (saveContactBtn) {
      saveContactBtn.addEventListener('click', () => downloadVCard(notify));
    }

    // Botão Compartilhar Cartão Digital
    const shareBtn = $('#share');
    if (shareBtn) {
      shareBtn.addEventListener('click', async () => {
        const url = getShareableUrl();
        if (navigator.share) {
          try {
            await navigator.share({
              title: `${CONFIG.name} | ${CONFIG.company} • Proteção Veicular`,
              text: `Faça sua cotação de proteção veicular na ${CONFIG.company} com o consultor autorizado ${CONFIG.name}.`,
              url
            });
            return;
          } catch (err) {
            if (err && err.name === 'AbortError') return;
          }
        }
        const shareInput = $('#share-url');
        if (shareInput) shareInput.value = url;
        openDialog('#share-dialog');
      });
    }

    // Botão Copiar Link no Modal
    const copyShareBtn = $('#copy-share');
    if (copyShareBtn) {
      copyShareBtn.addEventListener('click', async () => {
        const field = $('#share-url');
        if (!field) return;
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(field.value);
          } else {
            field.focus();
            field.select();
            document.execCommand('copy');
          }
          notify('Link copiado para a área de transferência!');
          $('#share-dialog').close();
        } catch (err) {
          field.focus();
          field.select();
          try {
            document.execCommand('copy');
            notify('Link copiado para a área de transferência!');
            $('#share-dialog').close();
          } catch (fallbackErr) {
            notify('Selecione o link acima e toque em Copiar.');
          }
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
