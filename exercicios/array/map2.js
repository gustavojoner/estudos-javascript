const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 15.90 }',
    '{ "nome": "Lápis", "preco": 1.45 }'
]

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

console.log(carrinho.map(paraObj).map(apenasPreco))