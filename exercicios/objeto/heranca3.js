const pai = { nome: 'Pedro', corCabelo: 'preto' }
const filha = Object.create(pai)

filha.nome = 'Ana'
console.log(filha.corCabelo)

const filho = Object.create(pai, {
    nome: { value: 'Joao', writable: false, enumerable: true } // writable significa se pode ser reescrito
})

console.log(filho.nome)
filho.nome = 'Carlos'
console.log(filho.nome, filho.corCabelo)

console.log(Object.keys(filha))
console.log(Object.keys(filho))

for(let key in filha) {
    filha.hasOwnProperty(key) ? console.log(`Sem Herança: ${key}`) : console.log(`Por Herança: ${key}`)
}