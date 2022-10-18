let a = 2;
let b = 3;

[a, b] = [b, a]; // atribuir valores com listas

console.log(a + " " + b);

let listaVazia = [];
let listaNumero = [1, 2, 3, 4, 55, 66, 777];
let listaPalavras = ["ola", "mundo", "mundojs", "batata"];
let listaMista = [1, "ola", true, [111,222,333], 1.345];

//primeiro item é 0
console.log(listaNumero[0]);

//maior que maximo causa erro
console.log(listaPalavras[1]);

//lista dentro de lista, mostrando primeiro item da lista dentro dela
console.log(listaMista[3][0]);

//adiciona no ultimo local
listaNumero[7] = 88;
listaNumero.push(99);
console.log(listaNumero);