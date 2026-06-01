function criarTarefa(formulario){
    let descricao = document.createElement("p");
    descricao.innerText = formulario.get("inputTarefa");
    let prioridade = formulario.get("select");

    let div = document.createElement("div");
    div.appendChild(descricao);

    div.classList.add("border");
    switch(prioridade){
        case "1":
            div.classList.add("border-success");
            break;
        case "2":
            div.classList.add("border-warning");
            break;
        case "3":
            div.classList.add("border-danger");
            break;
    }

    let main = document.getElementById("main");

    let col = document.createElement("div");
    col.classList.add("col")
    
    col.appendChild(div)
    main.appendChild(col);
    document.getElementById("formulario").reset();
}

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let formulario = document.getElementById("formulario");
    let dados = new FormData(formulario);
    criarTarefa(dados);
    
})