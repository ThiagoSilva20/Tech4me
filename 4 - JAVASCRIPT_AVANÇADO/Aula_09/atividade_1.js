let carro = {
    modelo: 'fusquinha',
    ano_frab: 2003,
    mes_frab: 7,
}

carro.ano_frab = (function(a,b){
    if (b > 6){
        return a + 1;
    }else{
        return a;
    }
})(carro.ano_frab,carro.mes_frab);

console.log(carro.ano_frab);