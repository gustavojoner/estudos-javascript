// Object.preventExtensions, podemos modificar os atributos, mas nao adicionar mais
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1, tag: 'Promocao'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
delete produto.tag
console.log(produto)

// Object.seal, nao consegue adicionar ou excluir elementos do objeto
const pessoa = {nome: 'Juliana', idade: 34}

Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.nome = 'Ana'
delete pessoa.idade
console.log(pessoa)

// Object.freeze = selado + valores constantes
