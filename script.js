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

function hydrateResultsPage() {
  const resultsSection = document.body.dataset.results;
  if (!resultsSection) return;

  const params = new URLSearchParams(window.location.search);
  const locationValue = params.get('local');
  const typeValue = params.get('tipo');

  const locationTarget = document.querySelector('[data-summary-location]');
  if (locationTarget && locationValue) {
    locationTarget.textContent = locationValue;
  }

  const locationInput = document.querySelector('[data-filter-location]');
  if (locationInput && locationValue) {
    locationInput.value = locationValue;
  }

  const subtitle = document.querySelector('[data-summary-subtitle]');
  if (subtitle) {
    const typeLabels = {
      casa: 'Casas',
      apartamento: 'Apartamentos',
      cobertura: 'Coberturas',
      terreno: 'Terrenos',
      'sala-comercial': 'Salas comerciais',
      kitnet: 'Kitnets',
      'kitnet/studio': 'Kitnets e studios',
    };

    let text = subtitle.textContent;
    const fallbackType = typeValue
      ? typeValue
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, (letter) => letter.toUpperCase())
      : '';
    const formattedType = typeLabels[typeValue] || fallbackType;

    if (formattedType && locationValue) {
      text = `${formattedType} em ${locationValue}`;
    } else if (formattedType) {
      text = `${formattedType} disponíveis`;
    } else if (locationValue) {
      text = `Imóveis em ${locationValue}`;
    }

    subtitle.textContent = text;
  }
}

document.addEventListener('DOMContentLoaded', hydrateResultsPage);
