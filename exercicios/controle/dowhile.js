function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let total = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    total++
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log(`Tentativas: ${total}`)
console.log('Fim')