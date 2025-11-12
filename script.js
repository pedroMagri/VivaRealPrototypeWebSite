function handleForm(formId, localId, tipoId, contexto) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const loc = document.getElementById(localId).value;
    const tipo = document.getElementById(tipoId).value;
    alert(`${contexto}:\nLocalização: ${loc || '(vazio)'}\nTipo: ${tipo || '(vazio)'}`);
  });
}

handleForm('formComprar', 'cmp-local', 'cmp-tipo', 'Buscar (comprar)');
handleForm('formVender', 'vnd-local', 'vnd-tipo', 'Buscar (vender)');
