const lista = [
    {
      "aluno": "Zépa",
      "montadora": "VW",
      "modelo": "Nivus",
      "cor": "Nardo gray",
      "ano": 2024
    },
    {
      "aluno": "Wagner",
      "montadora": "pegeout",
      "modelo": "207",
      "cor": "preto",
      "ano": 2010
    },
    {
      "aluno": "Thiago ",
      "montadora": "Fiat",
      "modelo": "Uno",
      "cor": "Preto",
      "ano": 2001
    },
    {
      "aluno": "dario",
      "montadora": "ferrari",
      "modelo": "california",
      "cor": "vermelha",
      "ano": 2023
    },
    {
      "aluno": "Pedro Huck",
      "montadora": "Porshe",
      "modelo": "911",
      "cor": "Verde",
      "ano": 2022
    },
    {
      "aluno": "Gui",
      "montadora": "Lamborghini",
      "modelo": "Veneno",
      "cor": "Vermelho",
      "ano": 2020
    },
    {
      "aluno": "Kályta",
      "montadora": "Fiat",
      "modelo": "Bravo",
      "cor": "Prata",
      "ano": 2016
    },
    {
      "aluno": "Isis",
      "montadora": "Chevrolet",
      "modelo": "Onix",
      "cor": "Laranja",
      "ano": 2023
    },
    {
      "aluno": "Bruna",
      "montadora": "Fiat",
      "modelo": "Mobi",
      "cor": "branco",
      "ano": 2016
    },
    {
      "aluno": "Luan",
      "montadora": "Jeep",
      "modelo": "Troller",
      "cor": "azul marinho",
      "ano": 2013
    },
    {
      "aluno": "darionaldo",
      "montadora": "Ford",
      "modelo": "Maverick",
      "cor": "Preto",
      "ano": 1976
    },
    {
      "aluno": "Tiago",
      "montadora": "Fiat",
      "modelo": "Argo",
      "cor": "azul",
      "ano": 2017
    },
    {
      "aluna": "Tamires",
      "montadora": "Honda",
      "modelo": "Fit",
      "cor": "preto",
      "ano": 2023
    },
    {
      "aluno": "Endreus",
      "montadora": "Uno",
      "modelo": "attractive",
      "cor": "verde limão",
      "ano": 2004
    },
    {
      "aluno": "Andre Felipe",
      "montadora": "Fiat",
      "modelo": "Uno",
      "cor": "Preto",
      "ano": 1996
    },
    {
      "aluno": "Bernardo Barbosa",
      "montadora": "Honda",
      "modelo": "Civic",
      "cor": "Preto",
      "ano": 2018
    }
];

ano = new Date().getFullYear();

const tres = (item) => item.ano >= ano - 3;


const resposta = lista.filter(tres);

console.log(resposta);