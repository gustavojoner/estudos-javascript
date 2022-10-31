const pilotos = ['Alonso', 'Massa', 'Vettel', 'Raikkonen']

pilotos.pop() // remove ultimo

pilotos.push('Verstappen') // adiciona ultimo

pilotos.shift() // remove primeiro

pilotos.unshift('Hamilton') // adiciona primeiro

console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Raikkonen') // adicionando a partir do indice 2

console.log(pilotos)

const algunsPilotos = pilotos.slice(2, 5) // novo array partindo de um pedaço do array pegou 2, 3, 4
console.log(algunsPilotos)