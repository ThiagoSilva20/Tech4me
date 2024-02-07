let tempo = 0;

const relogio = document.getElementById("relogio");

let id = 0;
const btnIniciar = document.getElementById("iniciar");
const btnParar = document.getElementById("parar");

function iniciar(){
    id = setInterval(incremento, 1000);
    btnIniciar.disabled = true;
    btnParar.disabled = false;
}

function incremento(){
    tempo++;
    let min = Math.trunc(tempo / 60);
    let seg = tempo % 60;
    let zero = seg > 9 ? "" : "0";
    relogio.innerText = `${min}:${zero}${seg}`;   
}

function parar(){
    clearInterval(id);
    btnIniciar.disabled = false;
    btnParar.disabled = true;

}