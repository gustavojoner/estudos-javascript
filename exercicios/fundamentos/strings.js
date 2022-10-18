const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.indexOf('d'))

console.log(escola.substring(1))        // do indice 1 ate o final
console.log(escola.substring(0, 3))     // do indice 0 ate o indice 3

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e'))     // subtstitui o indice passado pelo valor passado

console.log('Maria,Ana,Jose'.split(','))// define qual sera o algarismo considerado separador, formando um array