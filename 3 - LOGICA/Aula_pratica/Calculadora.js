const prompt = require("prompt-sync")();


const valor1 = prompt("Digite o primeiro valor: ");
const valor2 = prompt("Digite o segundo valor: ");

const v1 = parseInt(valor1);
const v2 = parseInt(valor2);

const soma = v1 + v2;
const sub = v1 - v2;
const multi = v1 * v2;
const divInteira = Math.trunc(v1 / v2);
const divReal = v1 / v2;

console.log("Resultado:");
console.log("Soma: ", soma);
console.log("Sub: ", sub );
console.log("multi: ", multi);
console.log("divisão inteira: ", divInteira);
console.log("divisão real: ", divReal);