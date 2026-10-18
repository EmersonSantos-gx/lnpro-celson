/**
 * Componente Simulator (Seletor interativo de categoria de veículo + modelo/ano)
 */
window.LNPRO = window.LNPRO || {};

window.LNPRO.renderSimulator = function renderSimulator() {
  return `
    <form id="simulator" class="simulator glass" aria-labelledby="sim-title">
      <div class="title-row">
        <i class="fa-solid fa-bolt" aria-hidden="true"></i>
        <h2 id="sim-title">Qual é o seu veículo?</h2>
        <span class="tiny-badge">SIMULAÇÃO RÁPIDA</span>
      </div>
      <p class="sub">Selecione a categoria abaixo para adiantar seu atendimento:</p>

      <div class="vehicle-grid" role="group" aria-label="Tipo de veículo">
        <button type="button" class="vehicle" data-vehicle="Carro" aria-pressed="true">
          <i class="fa-solid fa-car-side" aria-hidden="true"></i>Carro
        </button>
        <button type="button" class="vehicle" data-vehicle="Moto" aria-pressed="false">
          <i class="fa-solid fa-motorcycle" aria-hidden="true"></i>Moto
        </button>
        <button type="button" class="vehicle" data-vehicle="Caminhão/Utilitário" aria-pressed="false">
          <i class="fa-solid fa-truck-pickup" aria-hidden="true"></i>Pick-Up<br>
        </button>
        <button type="button" class="vehicle" data-vehicle="App/Motorista" aria-pressed="false">
          <i class="fa-solid fa-id-card" aria-hidden="true"></i>App /<br>Motorista
        </button>
      </div>

      <label class="field-label" for="model">
        Modelo e Placa do Veículo <span style="color:#6c7f99">(Facilita a sua consulta)</span>
      </label>
      <input
        id="model"
        name="model"
        placeholder="Ex.: Onix 2010 XXX-1234, CG FAN 2007 XXX-1234..."
        maxlength=80"
        autocomplete="off"
      >
      <button type="submit" class="sim-link" style="width:100%">
        Quero minha cotação <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </button>
      <p class="sim-note">Envio direto para o WhatsApp oficial do consultor.</p>
    </form>
  `;
};
