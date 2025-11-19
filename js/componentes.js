
async function carregarComponente(caminho, seletor) {
  try {
    const resposta = await fetch(caminho);
    if (resposta.ok) {
      const html = await resposta.text();
      document.querySelector(seletor).innerHTML = html;
    } else {
      console.error(`Erro ao buscar ${caminho}: ${resposta.statusText}`);
    }
  } catch (erro) {
    console.error(`Erro de fetch para ${caminho}:`, erro);
  }
}
