const prompt = require("prompt-sync")();

console.log(" == LANCHONETE TECH_LANCHES == ");

const sanduiche = prompt("Qual é o seu sanduiche: ");
var acomp = 0;
var lista = "";

for( var i = 0; i < 5; i++){
    const texto = prompt("Acompanhamento? (concluir para sair) " );
    if(texto == "concluir") break;

    lista += texto + ", ";
    acomp++;

}

console.log("Seu sanduiche é ", sanduiche);
console.log("Acompanhamento ", lista);