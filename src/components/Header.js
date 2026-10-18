/**
 * Componente Header (Foto de fundo automotiva, Foto real do Celson Rosendo com referrerpolicy="no-referrer", Bio, Selos e Redes Sociais)
 */
window.LNPRO = window.LNPRO || {};

window.LNPRO.renderHeader = function renderHeader() {
  const { CONFIG, buildWhatsAppUrl } = window.LNPRO;
  const instagramUrl = `https://www.instagram.com/${CONFIG.instagram}/`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.officeAddress)}`;
  const whatsappUrl = buildWhatsAppUrl();

  return `
    <header class="hero reveal">
      <div class="hero-art" aria-hidden="true">
        <!-- Background automotivo ilustrativo -->
        <img
          src="${CONFIG.heroBackgroundUrl}"
          alt=""
          fetchpriority="low"
          referrerpolicy="no-referrer"
          onerror="this.style.display='none'"
        >
      </div>

      <div class="topbar">
        <a class="brand" href="#coberturas" aria-label="${CONFIG.company}, ver coberturas">
          LN <span>PRO</span><span style="font-size:12px">↗</span>
        </a>
        <span class="eyebrow">Proteção em movimento</span>
      </div>

      <div class="avatar-wrap">
        <!-- FOTO REAL DO CONSULTOR: https://i.imgur.com/Qb1ElI9.jpeg (referrerpolicy="no-referrer" evita bloqueio do Imgur no localhost/VS Code) -->
        <img
          id="avatar"
          class="avatar"
          src="${CONFIG.photoUrl}"
          alt="${CONFIG.name}, consultor autorizado ${CONFIG.company}"
          width="118"
          height="118"
          fetchpriority="high"
          referrerpolicy="no-referrer"
        >
        <span class="online" title="Atendimento digital disponível">
          <span class="dot"></span>Online
        </span>
      </div>

      <div class="content">
        <span class="verified">
          <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
          Consultor Autorizado Verificado
        </span>

        <h1>${CONFIG.name}</h1>
        <p class="role">${CONFIG.role}</p>
        <p class="bio">${CONFIG.bio}</p>
        <p class="location">
          <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
          ${CONFIG.locationLabel}
        </p>

        <div class="pills">
          <div class="pill">
            <i class="fa-solid fa-user-shield" aria-hidden="true"></i>
            Sem Consulta<br>SPC/Serasa
          </div>
          <div class="pill">
            <i class="fa-solid fa-headset" aria-hidden="true"></i>
            Assistência 24h<br>Nacional
          </div>
          <div class="pill">
            <i class="fa-solid fa-shield-heart" aria-hidden="true"></i>
            100%<br>Tabela FIPE
          </div>
        </div>

        <nav class="socials" aria-label="Redes sociais e contato rápido">
          <a
            id="instagram"
            class="social"
            href="${instagramUrl}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Instagram de ${CONFIG.name}"
          >
            <i class="fa-brands fa-instagram" aria-hidden="true"></i>
          </a>
          <a
            class="social"
            href="${whatsappUrl}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar no WhatsApp"
          >
            <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
          </a>
          <a
            id="maps"
            class="social"
            href="${mapsUrl}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver região de atendimento em Maceió"
          >
            <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
          </a>
          <button
            id="save-contact"
            type="button"
            class="social"
            aria-label="Salvar contato de ${CONFIG.name} na agenda"
          >
            <i class="fa-regular fa-address-card" aria-hidden="true"></i>
          </button>
        </nav>
      </div>
    </header>
  `;
};
