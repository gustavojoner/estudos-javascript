console.log('01)' ,'1' == 1)            // valores sao iguais
console.log('02)' ,'1' === 1)           // os valores nao sao estritamente iguais, pois string e int
console.log('03)' ,'3' != 3)            // valores sao iguais, entao nao
console.log('04)' ,'3' !== 3)           // os valores sao diferentes, string e int, entao sim

console.log('05)' , 3 > 2)
console.log('06)' , 3 < 2)
console.log('07)' , 3 <= 2)
console.log('08)' , 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)            // em ambos casos, os locais de memoria sao diferentes
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined === null)
console.log('13)', undefined == null)