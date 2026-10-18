# Mini Site LN PRO — Celson Rosendo (Estrutura Modular para VS Code)

Projeto front-end modular em **JavaScript**, **HTML5** e **CSS3 / Tailwind CSS**, estruturado em componentes separados (`Header.js`, `PrimaryCTA.js`, `Simulator.js`, etc.) e compatível tanto com abertura direta (`index.html`) quanto com **Live Server** no **VS Code** e **GitHub Pages**.

## Fotos Incluídas no Código

1. **Foto Inicial do Consultor (`CONFIG.photoUrl`)**: `https://i.imgur.com/Qb1ElI9.jpeg` (com `referrerpolicy="no-referrer"` para evitar bloqueio do Imgur no `localhost` / VS Code).
2. **Foto Automotiva de Fundo (`CONFIG.heroBackgroundUrl`)**: `https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=80`.
3. **Como usar arquivo de foto local (Opcional)**: Se quiser salvar a imagem diretamente na pasta `assets/img/celson.jpg`, basta alterar em `src/config/config.js`:
   ```js
   photoUrl: './assets/img/celson.jpg',
   ```

## Estrutura de Pastas

```text
lnpro-celson-vscode/
├── index.html                  # Documento principal (carrega o CSS e os módulos JS)
├── assets/
│   ├── css/
│   │   └── styles.css          # Estilos Dark Tech Premium e animações
│   └── img/                    # Pasta pronta caso queira salvar fotos locais
└── src/
    ├── main.js                 # Inicializador da aplicação e eventos do DOM
    ├── config/
    │   └── config.js           # Dados centralizados e URLs das fotos do Celson Rosendo
    ├── utils/
    │   ├── whatsapp.js         # Construtor de links para API do WhatsApp
    │   └── vcard.js            # Gerador de arquivo de contato (.vcf)
    └── components/
        ├── Header.js           # Topbar, Foto real com anel giratório, bio, selos e redes sociais
        ├── PrimaryCTA.js       # Botão principal de Cotação Expressa
        ├── Simulator.js        # Simulador de veículo (Carro, Moto, Caminhão, App)
        ├── ActionLinks.js      # Botões de Coberturas, Assistência 24h e Indicação
        ├── CoverageGrid.js     # Bento Grid 2x3 de coberturas numeradas
        ├── AuthoritySection.js # Indicadores de autoridade e chamada final
        ├── Footer.js           # Rodapé institucional e compartilhamento
        ├── FloatingWhatsApp.js # Botão flutuante fixo (FAB) do WhatsApp
        └── Modals.js           # Modais (<dialog>) e sistema de Toast
```
