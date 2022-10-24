const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(6.7)
imprimirResultado(7.3)

const imprimirResultado2 = nota => nota >= 7 ? console.log('Aprovado!!!') : console.log('Reprovado!!!');

imprimirResultado2(6.8)
imprimirResultado2(7.7)