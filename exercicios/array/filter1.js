const produtos = [
    { nome: 'notebook', preco: 4000, fragil: true },
    { nome: 'cadeira', preco: 300, fragil: false },
    { nome: 'copo', preco: 10, fragil: true },
]

console.log(produtos.filter(function (p) {
    return p.fragil == true
}))

const caro = produto => produto.preco > 2000
const eFragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(eFragil))