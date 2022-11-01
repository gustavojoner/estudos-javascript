Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }

    return newArray
}

const produtos = [
    { nome: 'notebook', preco: 4000, fragil: true },
    { nome: 'cadeira', preco: 300, fragil: false },
    { nome: 'copo', preco: 10, fragil: true },
]
const caro = produto => produto.preco > 2000
const eFragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(eFragil))