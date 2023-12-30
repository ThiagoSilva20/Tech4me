const prompt = require("prompt-sync")();

var numeroAle = Math.random() * 9 + 1;
var valor = Math.trunc(numeroAle);

var nro = 0;
var x = 0;

while(nro != valor){
    const texto = prompt("Digite um numero: ");
    nro = parseInt(texto);
    x++;
}

console.log("Você acertou em " + x + " tentativas, a resposta correta é " + valor);