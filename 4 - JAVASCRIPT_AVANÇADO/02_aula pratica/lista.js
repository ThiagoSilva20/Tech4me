let arr = ['at1','at2','at3','at4','at5'];

let lista = document.getElementById('lista');

function carregar(){
    for (const texto of arr){

        const li = document.createElement("li");
        li.textContent = texto;
        lista.appendChild(li);
    }


}