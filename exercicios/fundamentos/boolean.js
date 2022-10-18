let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)  // utilizando negacao ! duas vezes, força a conversao para boolean

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
console.log(!!('' || null || 0 || 'epa' || 3)) // basta que um seja verdadeiro, para retornar true
console.log(('' || null || 0 || 'epa' || 3)) // basta que um seja verdadeiro, para retornar o primeiro valor encontrado

let nome1 = ''
console.log(nome1 || 'Desconhecido') // retorna o valor 'Desconhecido' pois o primeiro é falso/nulo/vazio

let nome2 = 'Lucas'
console.log(nome2 || 'Desconhecido') // retorna o valor 'Lucas' pois o primeiro é true/preenchido