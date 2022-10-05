var pessoa = {
    nome: 'Gustavo',
    idade: 28,
    endereco: {
        rua: 'Jose Feiten',
        numero: 301
    },
    telefones: [9999999, 8888888],
    ano: function() {
        return new Date().getFullYear();
    }
}

console.log(pessoa);