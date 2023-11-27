//Declarar o prompt
const prompt = require("prompt-sync")();

console.log("== Tech4Meet ==");
console.log("Você clicou em entrar");


const limite = 10;
const participantes = prompt("Digite os participantes da chamada: ");

//Entradas
const atingido = participantes >= limite;

if (atingindo){
    console.log("Você não pode entrar pois o limite foi atingido");
}else{   
    console.log("Seja bem vindo");
}
