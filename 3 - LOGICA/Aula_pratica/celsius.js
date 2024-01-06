const prompt = require("prompt-sync")();


console.log("conversor celsius para fahrenheit");

const celsius = parseFloat(prompt("Graus celsius: "));

const fahrenheit =  celsius * 1.8 + 32;

console.log("A conversão de graus para fahrenheit é equivalente a: ", fahrenheit);