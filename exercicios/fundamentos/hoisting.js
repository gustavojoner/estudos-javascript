console.log('a = ', a)
var a = 2               // içamento, acontece como se a variavel tivesse sido criada antes de tudo
console.log('a = ', a)  // porém sem valor definido

console.log('b = ', b)
let b = 2               // nesse caso, não ocorre içamento
console.log('b = ', b)
