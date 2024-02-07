const listaCarros = document.getElementsByClassName("carro");

console.log(listaCarros.length);

const lista = document.getElementById("lista");

function addCarro() {
    const li = document.createElement("li");
    lista?.appendChild(li);
    li.innerText = "Chevrolet";

    document.getElementById("total").innerText = listaCarros.length;

}

function obterCarros() {
    
    const url = "http://localhost:8080/carros";
    fetch(url).then(resposta).then(processar);
    function resposta (response){
        return response.json();
    }
    function processar (carros){
        for (let i = 0; i < carros.length;i++){
            
            const li = document.createElement('li');
            lista?.appendChild(li);

            const carro = carros[i];

            li.innerText = "Dono: " + carro.aluno + " | Modelo: " + carro.modelo;
        }
    }
    function novoCarro(){

        const config = {
            method: 'POST',
            Headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(url,config)
    }


}