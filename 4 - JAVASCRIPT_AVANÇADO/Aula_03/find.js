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

const criterio = "Churrasco";

const callb = (item) => item.prato == criterio;

const resultado = lista.find(callb);

console.log(resultado);