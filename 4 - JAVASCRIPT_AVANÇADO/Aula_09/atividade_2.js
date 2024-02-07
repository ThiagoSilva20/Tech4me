let nomesla = {
    nome: 'thiago',
}

nomesla.nome = (function(a){
    return a.toUpperCase();
})(nomesla.nome);

console.log(nomesla.nome);