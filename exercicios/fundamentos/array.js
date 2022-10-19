const valores = [7.7, 8.8, 9.9]

console.log(valores[0], valores[2])
console.log(valores[3]) // indefinido

valores[3] = 6.6

console.log(valores[3])

valores[8] = 5.5

console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // push insere na ultima posicao

console.log(valores)
console.log(valores.pop()) // pop remove na ultima posicao
console.log(valores)