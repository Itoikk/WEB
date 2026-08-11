let continuar = true;
let alunos = [];
function opcoes() {
    console.log("="*20);
    console.log("0 – Sair");
    console.log("1 – Adicionar aluno");
    console.log("2 – Listar alunos");
    console.log("3 – Buscar aluno");
    console.log("4 – Alterar aluno");
    console.log("5 – Remover aluno");
}

class Aluno {
    constructor(nome, idade, media){
        this.nome = nome;
        this.idade = idade;
        this.media = media;
    }
    resumo(){
        console.log("nome:", this.nome);
        console.log("idade:", this.idade);
        console.log("media:", this.media);
    }
}


do{
    opcoes();
    let opcao = prompt("Opção: ");
    if (opcao == "0") {
        continuar = false;
    }
    if (opcao == "1") {
        let nome = prompt("nome: ");
        if (nome == ""){
            console.log("nome não pode ser vazio!");
            continue
        }
        let idade = parseInt(prompt("idade: "));
        if (idade <= 0){
            console.log("idade não pode ser menor ou igual a 0!");
            continue
        }
        let media = Number(prompt("media: "));
        if (media < 0 || media > 10){
            console.log("media deve estar entre 0 e 10!");
            continue
        }
        alunos.push(new Aluno(nome, idade, media));
    }
    if (opcao == "2") {
        if (alunos == []) {
            console.log("lista vazia!");
            continue;
        }
        alunos.forEach(aluno => aluno.resumo());
    }
} while (continuar)