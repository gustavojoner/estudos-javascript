Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 15.90 }',
    '{ "nome": "Lápis", "preco": 1.45 }'
]

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

console.log(carrinho.map2(paraObj).map2(apenasPreco))