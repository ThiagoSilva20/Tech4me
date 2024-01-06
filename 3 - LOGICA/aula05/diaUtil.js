const prompt = require("prompt-sync")();

var dia_semana = prompt("Qual é o dia da semana ? ");

// switch(dia_semana){
//     case "segunda":
//     case "terca":
//     case "quarta":
//     case "quinta":
//     case "sexta":{
//         console.log("Trabalhar");
//         break;
//     }
    
//     case "sabado":
//     case "domingo":{
//         console.log("Folga");
//         break;
//     }
    
    
// }
if(dia_semana == "segunda" || dia_semana == "terça" || dia_semana == "quarta" || dia_semana == "quinta" || dia_semana == "sexta"){
    console.log("Trabalhar");    
}else{
    if(dia_semana == "sabado" || dia_semana == "domingo"){
        console.log("Folga");
    }
}
