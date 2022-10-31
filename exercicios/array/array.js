console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Pedro', 'Bino', 'Cilada') // forma 1
console.log(aprovados)

aprovados = ['Pedro', 'Bino', 'Cilada'] // forma 2 - mais utilizado
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Ana')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[2]
console.log(aprovados[2])

aprovados = ['Ana', 'Bia', 'Carlos']
aprovados.splice(1, 1) // a partir do indice 1, exclui 1
console.log(aprovados)
aprovados.splice(1, 0, 'Jorge', 'Roberto') // a partir do indice 1, exclui 0, insere . . .
console.log(aprovados)