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
  const commonButton = document.querySelector('[common-button]');

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

document.addEventListener('DOMContentLoaded', hydrateResultsPage);
