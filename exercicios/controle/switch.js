const imprimirNota = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9: 
            console.log('Quadro de Honra')
            break                       // se for 10 ou 9
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação') // caso nao tenha break, ele vai executar todos
            break

        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break                     // outra forma de por case
        default: 
            console.log('Nota inválida')
            break
    }
}

imprimirNota(7.8)
imprimirNota(2.3)
imprimirNota(6)
imprimirNota(9.8)
imprimirNota(11)