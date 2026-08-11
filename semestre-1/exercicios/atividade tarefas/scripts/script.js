function criar_card() {
    let nome = document.getElementById("nome").value;
    if (nome == "") {
        return
    }

    let prioridade = document.getElementById("prioridade").value;

    let card = document.createElement("div");

    let info = document.createElement("h3")
    info.innerText = nome;

    card.appendChild(info);

    document.getElementById("nome").value = "";
    card.classList.add("border");
    card.classList.add("bege")
    card.classList.add("border-5")
    card.classList.add("rounded")
    card.classList.add("p-2")
    

    if(prioridade == "Baixa") {
        card.classList.add("border-success");
    }
    else if(prioridade == "Media") {
        card.classList.add("border-warning");
    }
    else {
        card.classList.add("border-danger");
    }

    main = document.getElementById("main");

    let naosei = document.createElement("div");
    naosei.appendChild(card);
    naosei.classList.add("col-4")
    main.appendChild(naosei);
}