const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Generico'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Carla',
        idade: 23
    }],
    calcularValorSeguro: function(){
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Jose Feiten'

console.log(carro)

delete carro.proprietario.endereco
delete carro.condutores
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)