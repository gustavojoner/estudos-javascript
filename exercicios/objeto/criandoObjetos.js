// usando a notacao literal
const obj1 = {}
console.log(obj1)

// objeto em js
const obj2 = new Object
console.log(obj2)

// funcao construtora
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoDesc = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Cadeira', 100, 0.1)
const p2 = new Produto('Mesa', 500, 0.15)

console.log(p1.getPrecoDesc(), p2.getPrecoDesc())

// funcao factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return ((salarioBase / 30) * (30 - faltas)).toFixed(2)
        }
    }
}

const fun1 = criarFuncionario('Joao', 1300, 2)
const fun2 = criarFuncionario('Ana', 1400, 0)

console.log(fun1.getSalario(), fun2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma funcao que retorna obj (famosa)
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)