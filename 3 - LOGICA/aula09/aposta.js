const prompt = require("prompt-sync")();

const amigos = 4;
var i = 0;
var total = 0;

while(i < amigos){
    var resposta = prompt(i + ". Valor da sua aposta: ");
    var valor = parseFloat(resposta);

    total = total + valor;
    i++;
}

console.log("O total da aposta é: ", total);