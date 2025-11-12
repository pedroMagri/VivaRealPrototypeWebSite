function handleForm(formId, localId, tipoId, targetPage) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    const locInput = document.getElementById(localId);
    const tipoInput = document.getElementById(tipoId);
    const loc = locInput ? locInput.value.trim() : '';
    const tipo = tipoInput ? tipoInput.value : '';

    if (loc) params.set('local', loc);
    if (tipo) params.set('tipo', tipo);

    const query = params.toString();
    window.location.href = query ? `${targetPage}?${query}` : targetPage;
  });
}

handleForm('formComprar', 'cmp-local', 'cmp-tipo', 'comprar-resultados.html');
handleForm('formAlugar', 'vnd-local', 'vnd-tipo', 'alugar-resultados.html');

const mapRegionsData = {
  comprar: [
    {
      id: 'centro',
      label: 'Centro',
      position: { top: '52%', left: '58%' },
      properties: [
        {
          address: 'Av. Paulo Fontes, 1200 - Centro',
          price: 'R$ 850.000',
          area: '82 m²',
          rooms: 2,
          baths: 2,
          parking: 1,
          image:
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=60',
          alt: 'Sala de estar iluminada com vista para a cidade',
        },
        {
          address: 'R. Felipe Schmidt, 455 - Centro',
          price: 'R$ 1.450.000',
          area: '110 m²',
          rooms: 3,
          baths: 3,
          parking: 2,
          image:
            'https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=400&q=60',
          alt: 'Quarto de apartamento com decoração moderna',
        },
        {
          address: 'Av. Beira-Mar Norte, 2100 - Centro',
          price: 'R$ 2.230.000',
          area: '140 m²',
          rooms: 4,
          baths: 3,
          parking: 3,
          image:
            'https://images.unsplash.com/photo-1616594039964-d9e7145984e9?auto=format&fit=crop&w=400&q=60',
          alt: 'Varanda ampla com vista para o mar',
        },
      ],
    },
    {
      id: 'campeche',
      label: 'Campeche',
      position: { top: '78%', left: '72%' },
      properties: [
        {
          address: 'Av. Campeche, 2300 - Campeche',
          price: 'R$ 1.150.000',
          area: '95 m²',
          rooms: 3,
          baths: 2,
          parking: 2,
          image:
            'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=400&q=60',
          alt: 'Sala com decoração clean e iluminação natural',
        },
        {
          address: 'Servidão Recanto do Sol, 45 - Campeche',
          price: 'R$ 980.000',
          area: '120 m²',
          rooms: 3,
          baths: 2,
          parking: 2,
          image:
            'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=400&q=60',
          alt: 'Fachada moderna com paisagismo tropical',
        },
        {
          address: 'R. Pequeno Príncipe, 980 - Campeche',
          price: 'R$ 780.000',
          area: '78 m²',
          rooms: 2,
          baths: 2,
          parking: 1,
          image:
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=60',
          alt: 'Cozinha integrada a sala de jantar',
        },
      ],
    },
    {
      id: 'jurere',
      label: 'Jurerê Internacional',
      position: { top: '24%', left: '46%' },
      properties: [
        {
          address: 'Av. dos Búzios, 600 - Jurerê Internacional',
          price: 'R$ 3.450.000',
          area: '210 m²',
          rooms: 4,
          baths: 5,
          parking: 3,
          image:
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=60',
          alt: 'Casa moderna com piscina',
        },
        {
          address: 'Al. César Nascimento, 250 - Jurerê',
          price: 'R$ 2.750.000',
          area: '180 m²',
          rooms: 4,
          baths: 4,
          parking: 3,
          image:
            'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=400&q=60',
          alt: 'Sala com pé-direito alto e janelas amplas',
        },
        {
          address: 'Rua das Algas, 110 - Jurerê',
          price: 'R$ 1.980.000',
          area: '150 m²',
          rooms: 3,
          baths: 3,
          parking: 2,
          image:
            'https://images.unsplash.com/photo-1462288685571-7d633cc945b1?auto=format&fit=crop&w=400&q=60',
          alt: 'Sala de jantar integrada à cozinha',
        },
      ],
    },
  ],
  alugar: [
    {
      id: 'trindade',
      label: 'Trindade',
      position: { top: '48%', left: '62%' },
      properties: [
        {
          address: 'R. Lauro Linhares, 460 - Trindade',
          price: 'R$ 3.300/mês',
          area: '86 m²',
          rooms: 3,
          baths: 2,
          parking: 1,
          image:
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=60',
          alt: 'Sala aconchegante com sofá azul',
        },
        {
          address: 'R. Des. Vítor Lima, 300 - Trindade',
          price: 'R$ 2.850/mês',
          area: '78 m²',
          rooms: 2,
          baths: 2,
          parking: 1,
          image:
            'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=400&q=60',
          alt: 'Sala integrada com varanda gourmet',
        },
        {
          address: 'R. Capitão Romualdo de Barros, 120 - Trindade',
          price: 'R$ 2.450/mês',
          area: '70 m²',
          rooms: 2,
          baths: 2,
          parking: 1,
          image:
            'https://images.unsplash.com/photo-1528701800489-20be3c2c80b1?auto=format&fit=crop&w=400&q=60',
          alt: 'Quarto planejado com madeira clara',
        },
      ],
    },
    {
      id: 'ingleses',
      label: 'Ingleses do Rio Vermelho',
      position: { top: '20%', left: '66%' },
      properties: [
        {
          address: 'Servidão dos Coroas, 90 - Ingleses',
          price: 'R$ 2.200/mês',
          area: '64 m²',
          rooms: 2,
          baths: 2,
          parking: 1,
          image:
            'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=400&q=60',
          alt: 'Cozinha americana com bancada branca',
        },
        {
          address: 'R. Intendente João Nunes Vieira, 1800 - Ingleses',
          price: 'R$ 2.950/mês',
          area: '88 m²',
          rooms: 3,
          baths: 2,
          parking: 2,
          image:
            'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=400&q=60',
          alt: 'Sala com sofá cinza e tapete geométrico',
        },
        {
          address: 'R. das Gaivotas, 650 - Ingleses',
          price: 'R$ 1.950/mês',
          area: '58 m²',
          rooms: 2,
          baths: 1,
          parking: 1,
          image:
            'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=400&q=60',
          alt: 'Sala minimalista com tons claros',
        },
      ],
    },
    {
      id: 'coqueiros',
      label: 'Coqueiros',
      position: { top: '60%', left: '46%' },
      properties: [
        {
          address: 'R. Des. Pedro Silva, 900 - Coqueiros',
          price: 'R$ 3.100/mês',
          area: '92 m²',
          rooms: 3,
          baths: 2,
          parking: 2,
          image:
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=60',
          alt: 'Sala com janelas grandes e plantas',
        },
        {
          address: 'Rua Praia de Fora, 150 - Coqueiros',
          price: 'R$ 2.650/mês',
          area: '80 m²',
          rooms: 2,
          baths: 2,
          parking: 1,
          image:
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=60',
          alt: 'Sala de estar com parede azul e quadros',
        },
        {
          address: 'R. Bento Góes da Silva, 300 - Coqueiros',
          price: 'R$ 2.250/mês',
          area: '74 m²',
          rooms: 2,
          baths: 1,
          parking: 1,
          image:
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=60',
          alt: 'Quintal integrado à sala de jantar',
        },
      ],
    },
  ],
};

function formatTypeLabel(typeValue = '') {
  const typeLabels = {
    casa: 'Casas',
    apartamento: 'Apartamentos',
    cobertura: 'Coberturas',
    terreno: 'Terrenos',
    'sala-comercial': 'Salas comerciais',
    kitnet: 'Kitnets',
    'kitnet/studio': 'Kitnets e studios',
  };

  if (!typeValue) return '';

  if (typeLabels[typeValue]) return typeLabels[typeValue];

  return typeValue
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function resolveSubtitleText({
  subtitle,
  location,
  typeValue,
  defaultText,
}) {
  const formattedType = formatTypeLabel(typeValue);

  if (!subtitle) return;

  if (formattedType && location) {
    subtitle.textContent = `${formattedType} em ${location}`;
  } else if (formattedType) {
    subtitle.textContent = `${formattedType} disponíveis`;
  } else if (location) {
    subtitle.textContent = `Imóveis em ${location}`;
  } else {
    subtitle.textContent = defaultText;
  }
}

function hydrateResultsPage() {
  const resultsSection = document.body.dataset.results;
  if (!resultsSection) return;

  const params = new URLSearchParams(window.location.search);
  const paramLocation = params.get('local');
  const typeValue = params.get('tipo');

  const locationTarget = document.querySelector('[data-summary-location]');
  const subtitle = document.querySelector('[data-summary-subtitle]');
  const subtitleDefault = subtitle ? subtitle.textContent : '';
  const defaultLocationText = locationTarget ? locationTarget.textContent : '';

  const locationInput = document.querySelector('[data-location-input]');
  const applyButton = document.querySelector('[data-location-apply]');

  function applyLocation(locationValue) {
    const cleanedValue = locationValue.trim();

    if (locationTarget) {
      locationTarget.textContent = cleanedValue || defaultLocationText;
    }

    resolveSubtitleText({
      subtitle,
      location: cleanedValue,
      typeValue,
      defaultText: subtitleDefault,
    });
  }

  if (locationInput) {
    locationInput.value = paramLocation || defaultLocationText;
  }

  if (applyButton) {
    applyButton.addEventListener('click', () => {
      const inputValue = locationInput ? locationInput.value || '' : '';
      applyLocation(inputValue);
    });
  }

  applyLocation(paramLocation || '');
}

function hydrateMapLinks() {
  const mapLinks = document.querySelectorAll('[data-map-link]');
  if (!mapLinks.length) return;

  const context = document.body.dataset.results;

  mapLinks.forEach((link) => {
    const params = new URLSearchParams(window.location.search);
    if (context) {
      params.set('context', context);
    }
    const search = params.toString();
    link.href = search ? `mapa.html?${search}` : 'mapa.html';
  });
}

function hydrateMapPage() {
  const mapPage = document.querySelector('[data-map-page]');
  if (!mapPage) return;

  const params = new URLSearchParams(window.location.search);
  const contextParam = params.get('context');
  const context = contextParam === 'alugar' ? 'alugar' : 'comprar';
  const locationValue = params.get('local') || 'Florianópolis - SC, Brasil';

  const heading = document.querySelector('[data-map-heading]');
  if (heading) heading.textContent = context === 'alugar' ? 'Alugar' : 'Comprar';

  const locationTarget = document.querySelector('[data-map-location]');
  if (locationTarget) locationTarget.textContent = locationValue;

  const backLink = document.querySelector('[data-back-to-results]');
  if (backLink) {
    const destination = context === 'alugar' ? 'alugar-resultados.html' : 'comprar-resultados.html';
    const backParams = new URLSearchParams(window.location.search);
    backParams.delete('context');
    const query = backParams.toString();
    backLink.href = query ? `${destination}?${query}` : destination;
  }

  const tabs = document.querySelectorAll('[data-map-tab]');
  tabs.forEach((tab) => {
    const tabContext = tab.dataset.mapTab || 'comprar';
    const tabParams = new URLSearchParams(window.location.search);
    tabParams.set('context', tabContext);
    const query = tabParams.toString();
    tab.href = query ? `mapa.html?${query}` : 'mapa.html';
    tab.classList.toggle('active', tabContext === context);
  });

  const clustersContainer = document.querySelector('[data-map-clusters]');
  const propertiesContainer = document.querySelector('[data-region-properties]');
  const regionTitle = document.querySelector('[data-region-title]');
  const regionSubtitle = document.querySelector('[data-region-subtitle]');
  if (!clustersContainer || !propertiesContainer || !regionTitle || !regionSubtitle) return;

  const regions = mapRegionsData[context] || [];

  clustersContainer.innerHTML = '';
  regions.forEach((region) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'map-cluster';
    button.dataset.region = region.id;
    button.style.top = region.position.top;
    button.style.left = region.position.left;
    const count = region.properties.length;
    button.innerHTML = `
      <span class="map-cluster-count">${count}</span>
      <span class="map-cluster-label">${region.label}</span>
    `;
    clustersContainer.appendChild(button);
  });

  function renderRegion(regionId) {
    const targetRegion = regions.find((item) => item.id === regionId) || regions[0];
    if (!targetRegion) {
      regionTitle.textContent = 'Nenhuma região';
      regionSubtitle.textContent = 'Não encontramos imóveis para exibir.';
      propertiesContainer.innerHTML = '';
      return;
    }

    clustersContainer.querySelectorAll('.map-cluster').forEach((cluster) => {
      cluster.classList.toggle('is-active', cluster.dataset.region === targetRegion.id);
    });

    regionTitle.textContent = targetRegion.label;
    const count = targetRegion.properties.length;
    regionSubtitle.textContent = `${count} ${count === 1 ? 'imóvel disponível' : 'imóveis disponíveis'}`;

    propertiesContainer.innerHTML = '';
    targetRegion.properties.forEach((property) => {
      const card = document.createElement('article');
      card.className = 'map-property-card';
      card.innerHTML = `
        <img src="${property.image}" alt="${property.alt}" />
        <div>
          <h3>${property.address}</h3>
          <div class="map-property-price">${property.price}</div>
          <div class="map-property-meta">
            <span>${property.area}</span>
          </div>
          <div class="map-property-stats">
            <span>${property.rooms} Quartos</span>
            <span>${property.baths} Banheiros</span>
            <span>${property.parking} Vagas</span>
          </div>
        </div>
      `;
      propertiesContainer.appendChild(card);
    });
  }

  clustersContainer.addEventListener('click', (event) => {
    const button = event.target.closest('.map-cluster');
    if (!button || !clustersContainer.contains(button)) return;
    renderRegion(button.dataset.region);
  });

  if (regions[0]) {
    renderRegion(regions[0].id);
  }
}

function setupFilterPills() {
  const filterGroups = document.querySelectorAll('.filter-options');

  filterGroups.forEach((group) => {
    group.addEventListener('click', (event) => {
      const target = event.target.closest('.filter-pill');
      if (!target || !group.contains(target)) return;

      group.querySelectorAll('.filter-pill').forEach((pill) => {
        pill.classList.toggle('is-active', pill === target);
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  hydrateResultsPage();
  setupFilterPills();
  hydrateMapLinks();
  hydrateMapPage();
});
