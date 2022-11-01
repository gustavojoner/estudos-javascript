const alunos = [
    { nome: 'Joao', idade: 23, bolsista: true },
    { nome: 'Maria', idade: 25, bolsista: false },
    { nome: 'Ana', idade: 21, bolsista: false },
    { nome: 'Pedro', idade: 22, bolsista: true }
]

console.log(alunos.map(a => a.idade))
const resultado = alunos.map(a => a.idade).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)