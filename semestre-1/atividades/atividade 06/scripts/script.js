async function carregar(nome) {
    const resposta = await axios.get(`https://api.tvmaze.com/search/shows?q=${nome}`);
    const dados = resposta.data;
    return dados;
}
function criarCard(filme) {
    
    let col = document.createElement("div");
    col.classList.add("col")

    let card = document.createElement("div");
    card.classList.add("card")
    card.classList.add("h-100")

    let imagem;
    if(filme.show.image && filme.show.image.medium) {
        imagem = document.createElement("img");
        imagem.src = filme.show.image.medium;
        imagem.classList.add("card-img-top")
    }
    else {
        imagem = document.createElement("p");
        imagem.innerText = "Imagem não encontrada!";
        imagem.classList.add("card-text")
    }
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body")

    let titulo = document.createElement("h5");
    titulo.innerText = filme.show.name;
    titulo.classList.add("card-title")

    let descricao = document.createElement("p");
    descricao.innerHTML = filme.show.summary;
    descricao.classList.add("card-text")

    let avaliacao = document.createElement("p");
    avaliacao.innerText = filme.show.rating.average ?? "Sem avaliação";
    avaliacao.classList.add("card-text")

    card.appendChild(imagem);
    cardBody.appendChild(titulo);
    cardBody.appendChild(descricao);
    cardBody.appendChild(avaliacao);
    card.appendChild(cardBody);
    col.appendChild(card);
    
    let main = document.getElementById("main");
    main.appendChild(col);
}
const form = document.querySelector("form");
form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const nome = document.querySelector("#inputNome").value.trim();
    filmes = await carregar(nome);
    filmes.forEach(filme => {
        criarCard(filme);
    });
})