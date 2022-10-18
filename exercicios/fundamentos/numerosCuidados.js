console.log(7/0)                    // infinito
console.log('10.0' / 2)             // string dividido por number
console.log('3' + 2)                // neste caso nao soma, pois considera uma concatenacao pois string tem preferencia
console.log('3' - 2)                // a subtracao e feita porque e o que faz sentido para string
console.log('Text' * 2)             // NaN = not a number
console.log(0.1 + 0.7)              // imprecisao
console.log((0.1 + 0.7).toFixed(2)) // correcao
