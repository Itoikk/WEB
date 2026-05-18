function criar_elemento() {
    let nome = document.getElementById("nome").value;
    let estado = document.getElementById("estado").value;
    let cor = document.getElementById("cor").value;

    let p = document.createElement("li");
    p.innerText = "nome: " + nome + " | estado: " + estado;
    p.style.color = cor;

    lista = document.getElementById("lista");
    lista.appendChild(p);
}