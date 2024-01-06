const prompt = require("prompt-sync")();

console.log("== Tech4 FM ==");

var continuar = true;

do {
    console.log("Não diga alô, diga 'Tech4FM'");


    const resposta = prompt("Telefone toca: ");

    if (resposta == "tech4fm") {
        console.log("parabéns, ganhou a camisa !");
        continuar == false
    }
}while (continuar);
console.log("Obrigado pela participação! ");