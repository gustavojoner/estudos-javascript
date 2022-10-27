console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y            // a vantagem de usar dessa forma é poder usar antes de ser declarada
}                           // pois as funcoes sao carregadas antecipadamente

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}