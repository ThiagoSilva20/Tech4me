function calcularIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
}

let imc = peso / (altura * altura);

const resultado = document.getElementById('resultado');
resultado.innerText = `Meu imc é ${imc}`;