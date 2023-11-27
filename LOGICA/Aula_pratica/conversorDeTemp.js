const prompt = require("prompt-sync")();


console.log("conversor de temperatura");

const texto = prompt("Escolha (F) Celsius para Fahrenheit / (C) fahrenheit para Celsius: ");

const temperatura = prompt("Digite a temp: ");

if (texto == "F"){
    // celsius para fahrenheit
    


    const fahrenheit =  temperatura * 1.8 + 32;

    console.log("A conversão de graus para fahrenheit é equivalente a: ", fahrenheit);

}else{
    // fahrenheit para celsius

    const celsius = (temperatura - 32) * (5 / 9);
    console.log("A conversão de graus para celsius é equivalente a: ", celsius);
}