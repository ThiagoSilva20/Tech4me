

const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/RJ/municipios";
function obterCidade(){
    fetch(url).then(resposta).then(definitiva);

    function resposta(dados){
        return dados.json();
    }
}

function definitiva(texto){
    console.log(texto);
}
