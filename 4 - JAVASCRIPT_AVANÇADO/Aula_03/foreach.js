const lista = [
    { aluno: "Endreus", prato: "strogonoff"},
    { aluno: "Tamires Guedes", prato: "strogonoff"}, { aluno: "Tiago Martins", prato: "Lasanha" },
    { aluno: "Bruna Pires", prato: "empadão" },
    { aluno: "Thiago Da Silva", prato: "estrogonefe" },
    { aluno: "Wagner Murath", prato: "pizza" },
    { aluno: "Darionaldo Costa", prato: "pernil assado" },
    { aluno: "Isis Terra", prato: "macarrão" },
    { aluno: "dario jessula", prato: "Lasanha" }, 
    { aluno: "Luan Costa", prato: "Panqueca" }, { aluno: "Bernardo Barbosa", prato: "lasanha" },
    { aluno: "Kalyta Carvalho", prato: "Churrasco" }, 
    { aluno: "Gui Mota", prato: "pizza" },
];

function paraCada(item){
    item.acompanha = "farofa";
}

lista.forEach(paraCada);

console.log(lista);