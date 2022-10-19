let valor // nao inicializada
console.log(valor)

valor = null
console.log(valor) // ausencia de valor

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 5.99
console.log(produto)

produto.preco = undefined // evitar settar undefined
console.log(produto)
console.log(!!produto.preco)

delete produto.preco
console.log(produto)

produto.preco = null
console.log(produto)
