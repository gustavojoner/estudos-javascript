const alunos = [
    { nome: 'Joao', idade: 23, bolsista: true },
    { nome: 'Maria', idade: 25, bolsista: false },
    { nome: 'Ana', idade: 21, bolsista: false },
    { nome: 'Pedro', idade: 22, bolsista: true }
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const existeBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(existeBolsista))