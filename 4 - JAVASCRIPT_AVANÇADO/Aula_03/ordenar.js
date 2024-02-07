const numeros = [8, 23, 12,56,6,15,14,155,6,144,1,22,98];

function comparacao (a, b){
    if (a == b) return 0;
    if (a > b) return 1;
    if (a < b) return -1;
}

numeros.sort(comparacao);

console.log(numeros);