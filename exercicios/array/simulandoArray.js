const quaseArray = { 0: 'Ana', 1: 'Julio', 2: 'Rafa' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Luana', 'Celso']
console.log(meuArray)