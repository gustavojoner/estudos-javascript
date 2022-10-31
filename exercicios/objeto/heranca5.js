console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Gustavo'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5].first())

// FOI ADICIONADO MANUALMENTE FUNCOES PARA ESSAS FUNCOES CITADAS - POREM DEVE TER CUIDADO