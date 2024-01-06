const prompt = require("prompt-sync")();

var poesia = "No meio do caminho tinha uma pedra.\ntinha uma pedra no meio do caminho. \ntinha uma pedra. \nnunca me esquecerei desse acontecimento. \nna vida de minhas retinas tão fatigadas. \nNunca me esquecerei que no meio do caminho. \ntinha uma pedra. \ntinha uma pedra no meio do caminho.\nno meio do caminho tinha uma pedra.";
var resposta = "S";

while (resposta == "S"){
    console.log(poesia);
    resposta = prompt("Quer ver a poesia novamente?(S ou N)");
}
