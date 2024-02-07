let alunos = [
    { nome: 'thiago', idade: 20 },
    { nome: 'zum', idade: 34 }
];

let api_turma = "https://65b83cd546324d531d560eab.mockapi.io/alunos";

const topicos = document.getElementById("topicos");

function consultar() {

    for (const aluno of alunos) {
        const item = document.createElement('li');
        item.innerText = aluno.nome + ' | ' + 'idade: ' + aluno.idade;
        topicos?.appendChild(item);
    }
}

const url = 'https://65b83cd546324d531d560eab.mockapi.io/alunos'

function incluir(){
    const aluno = {
        nome: 'thiago',
        idade: 20,
    };
    
    const config = {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno),
    };

    fetch(url, config).then(response).then(dados);

    function response(res){
        return res.json();
    }

    function dados(data){
        alert("Aluno criado com o id " + data.id)
    }
    
}
