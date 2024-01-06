const prompt = require("prompt-sync")();

console.log(" == LANCHONETE TECH_LANCHES == ");
console.log("Misto quente: Pão de forma, presunto e queijo. \nPreço: R$ 5,00. \nBauru: Pão francês, rosbife, queijo derretido, tomate e pepino. \nPreço: R$ 15,00. \nX-salada: Pão de hambúrguer, hambúrguer, queijo, alface, tomate e maionese. \nPreço: R$ 20,00. \nMortadela: Pão francês, mortadela, queijo, tomate e alface. \nPreço: R$ 25,00. \nFrango: Pão francês, frango desfiado, queijo, tomate e alface. \nPreço: R$ 30,00.");

var sanduiche = prompt("DIGITE O SANDUICHE QUE VOCÊ QUEIRA: ");
var preco = 0;



    var itens = [];
    var adic = 0;
    var adicionar = true;

    while(adicionar){

        var querAdicionar = prompt("Você quer adicionar algo ?\nCaso queira digite 'Sim' e 'Não' caso não queira: ");

        if(querAdicionar == "Sim"){

            itens = prompt("DIGITE O ADICIONAL DA SUA ESCOLHA: ");
            adic++;

        }else{
            adicionar = false;
        }
    }
    preco = adic * preco; 

adicionarMaisUm();

switch(sanduiche){
    case 'Misto quente': preco = 5; adicional; console.log()


}
