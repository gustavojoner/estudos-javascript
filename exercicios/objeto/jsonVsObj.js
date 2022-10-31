const obj = { a: 1, b: 'teste', c: 3, soma() { // vai levar apenas os dados
    return a + b + c
}}

// objeto para JSON
console.log(JSON.stringify(obj))

// JSON para Objeto
console.log(JSON.parse('{ "a": 1, "b": "teste", "c": 3 }')) 