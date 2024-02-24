document.addEventListener("DOMContentLoaded", () => {
  // const api_key = 'Chave disponibilizada pela api'
  // fetch(url, {headers:{
  //     'x-api-key': api_key
  // }})
  const url = `https://swapi.dev/api/people/`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao receber os dados");
      }
      return response.json();
    })
    .then((data) => {
      renderizarPersonagens(data);
    })
    .catch((err) => console.log(err));
});

function renderizarPersonagens(itens) {
  const conteiner = document.getElementById("personagem-container");

  itens.results.forEach((item, index) => {
    const divPersonagens = document.createElement('div');
    divPersonagens.innerHTML = `
        <div class="personagem-caixa">
            <img src="perso${index}.png">
            <div>
                <h3>${item.name}</h3>
            </div>
        </div>
    `;
    divPersonagens.addEventListener('click', () => {
      detalhesPersonagem(item, index)
    })
    divPersonagens.classList.add('personagem')
    conteiner.appendChild(divPersonagens)
  })
}

function detalhesPersonagem(item, index) {
  window.location.href = `person.html?index=${index}`
}
