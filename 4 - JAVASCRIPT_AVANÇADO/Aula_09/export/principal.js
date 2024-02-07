import { alunos, servidor, soma } from "./constantes.js";

const h2 = document.createElement("h2");

h2.innerText = soma(2,5);
document.body.appendChild(h2);