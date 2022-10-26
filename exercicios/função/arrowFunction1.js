// -----------------------------------------------------------------------------

let dobro = function (a) {
    return 2 * a                        // forma 1
}                                       

dobro = (a) => {
    return 2 * a                        // forma 2
}                                       


dobro = a => 2 * a                      // forma 3 (return implicito)

console.log(dobro(Math.PI))

// -----------------------------------------------------------------------------

let ola = function() {
    return 'Olá'                        // forma 1
}

ola = () => 'Olá'                       // forma 2.1
ola = _ => 'Olá'                        // forma 2.2

console.log(ola())

// -----------------------------------------------------------------------------