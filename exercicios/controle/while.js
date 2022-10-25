function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

let opcao = 0
let total = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    total++
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log(`Tentativas: ${total}`)
console.log('Fim')