function promoPar() {
    console.log("Você ganhou 4% (par)")
};

function promoImpar() {
    console.log("Você ganhou 3% (impar)")

};

var minuto = new Date().getSeconds();

if (minuto % 2 == 0) promocao = promoPar();
else promocao = promoImpar();

promocao();