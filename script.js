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

function setupFilterPills() {
  const filterGroups = document.querySelectorAll('.filter-options');
  const clearButtons = document.querySelectorAll('[data-clear-filters]');

  filterGroups.forEach((group) => {
    group.addEventListener('click', (event) => {
      const target = event.target.closest('.filter-pill');
      if (!target || !group.contains(target)) return;

      group.querySelectorAll('.filter-pill').forEach((pill) => {
        pill.classList.toggle('is-active', pill === target);
      });
    });
  });

  clearButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterGroups.forEach((group) => {
        group.querySelectorAll('.filter-pill').forEach((pill) => {
          pill.classList.remove('is-active');
        });
      });
    });
  });
}

function hydrateMapPage() {
  if (!document.body.classList.contains('map-results-page')) return;

  const params = new URLSearchParams(window.location.search);
  const context = params.get('context') === 'alugar' ? 'alugar' : 'comprar';

  const tabs = document.querySelectorAll('[data-map-tab]');
  tabs.forEach((tab) => {
    const isActive = tab.dataset.mapTab === context;
    tab.classList.toggle('active', isActive);
  });

  const contextLabels = document.querySelectorAll('[data-map-context-label]');
  contextLabels.forEach((label) => {
    label.textContent = context === 'alugar' ? 'Alugar' : 'Comprar';
  });

  const summaryLocationTarget = document.querySelector('[data-summary-location]');
  const resolvedLocation = summaryLocationTarget
    ? summaryLocationTarget.textContent.trim()
    : '';
  const overlayLocationTarget = document.querySelector('[data-map-location]');

  if (overlayLocationTarget && resolvedLocation) {
    overlayLocationTarget.textContent = resolvedLocation;
  }

  const returnButton = document.querySelector('[data-map-return]');
  if (returnButton) {
    const targetPage = context === 'alugar' ? 'alugar-resultados.html' : 'comprar-resultados.html';
    returnButton.dataset.mapLink = targetPage;
    returnButton.dataset.mapContext = context;
  }
}

function setupMapLinks() {
  const triggers = document.querySelectorAll('[data-map-link]');
  if (!triggers.length) return;

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      if (trigger.tagName === 'A') {
        event.preventDefault();
      }

      const params = new URLSearchParams(window.location.search);

      const triggerContext = trigger.dataset.mapContext;
      const pageContext = document.body.dataset.results;

      if (triggerContext) {
        params.set('context', triggerContext);
      } else if (pageContext && pageContext !== 'mapa') {
        params.set('context', pageContext);
      } else if (!params.has('context')) {
        params.set('context', 'comprar');
      }

      const targetPage = trigger.dataset.mapLink || 'mapa.html';
      const destinationParams = new URLSearchParams(params);
      const isMapDestination = targetPage.includes('mapa');

      if (!isMapDestination) {
        destinationParams.delete('context');
      }

      const queryString = destinationParams.toString();
      const destination = queryString ? `${targetPage}?${queryString}` : targetPage;

      window.location.href = destination;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  hydrateResultsPage();
  setupFilterPills();
  hydrateMapPage();
  setupMapLinks();
});
