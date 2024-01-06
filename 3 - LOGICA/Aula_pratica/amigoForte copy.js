const prompt = require("prompt-sync")();


// entrada
const amigo1 = prompt("Nome Primeiro amigo: ");
const alcance1 = prompt("altura Primeiro amigo: ");

const amigo2 = prompt("Nome Segundo amigo: ");
const alcance2 = prompt("altura Segundo amigo : ");

const amigo3 = prompt("Nome Terceiro amigo: ");
const alcance3 = prompt("altura Terceiro amigo : ");

//processamento

if (alcance1 > alcance2 && alcance1 > alcance3) {console.log("O vencedor é ", amigo1);}
if (alcance2 > alcance1 && alcance2 > alcance3) {console.log("O vencedor é ", amigo2);}
if (alcance3 > alcance2 && alcance3 > alcance1) {console.log("O vencedor é ", amigo3);}