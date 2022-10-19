// funcao em variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// funcao arrow em variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 4))

// retorno implicito

const subtracao = (a, b) => a - b
console.log(subtracao(5, 3))

const imprimir = a => console.log(a)
imprimir('Legal!')