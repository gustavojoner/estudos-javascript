const notas = [6.9, 7.3, 2.9, 5.7]

for(let i in notas) {
    console.log(i + ' : ' + notas[i])
}

const pessoa = {
    nome: 'Ana',
    idade: 19,
    peso: 64,
    altura: 162
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}