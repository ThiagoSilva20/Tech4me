function extrairTipoPlaca(numero) {
    const quinto = numero.substring(4, 5);
    if (quinto >= "0" && quinto <= "9") return "antiga";
    
    return "mercosul";

}

const prompt = require('prompt-sync')();

console.log("== Cancela de pedágio ==");

//Entrada 
const placa = prompt("Digite a placa: ");

//Processamento 
const tipo = extrairTipoPlaca(placa);

//Saída
console.log("O carro na cancela tem a placa", tipo);
