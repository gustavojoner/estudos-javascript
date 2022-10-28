// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}

pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // nao consigo mais mexer no objeto

pessoa.nome ='Maria'
console.log(pessoa)

const pessoa2 = Object.freeze({nome: 'Ana'})
console.log(pessoa2)