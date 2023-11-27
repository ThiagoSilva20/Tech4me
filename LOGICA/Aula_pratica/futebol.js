const prompt = require("prompt-sync")();

const selecao = prompt("Historico de partidas: Digite a Sigla da Seleção desejada:");

// if (selecao == "ARG"){

//     console.log("Resultado da útima partida:", selecao);
//     console.log("data do Jogo: 21/11/2023");
//     console.log("Placar: ARG 2 x 1 BRA");

// }else if (selecao == "BRA"){

//     console.log("Resultado da útima partida: ", selecao);
//     console.log("data do Jogo: 21/11/2023");
//     console.log("Placar: BRA 1 x 2 ARG");

// }else if (selecao == "FRA"){

//     console.log("Resultado da útima partida: ", selecao);
//     console.log("data do Jogo: 21/11/2023");
//     console.log("Placar: FRA 5 x 3 VEN");

// }

var time = "";
var data = "";
var placar = "";

switch(selecao) {
    case "ARG":
        time = "Argentina";
        data = "21/11/2023";
        placar = "ARG 1 x 0 BRA";
        break;
    case "BRA":
        time = "Brasil";
        data = "21/11/2023";
        placar = "ARG 1 x 0 BRA";
        break;
    case "FRA":
        time = "França";
        data = "21/11/2023";
        placar = "FRA 5 x 0 BOL";
        break;
}

console.log(time, data, placar);