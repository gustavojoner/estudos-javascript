const prod1 = {}                    // criado vazio
                                    // chave valor
prod1.nome = 'Celular'
prod1.preco = 2000
prod1['Desconto Legal'] = 0.2       // forma de usar chave com espaço (nao recomendado)

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 149.90,
    obs: {
        tamanho: 'M',
        marca: 'Nike'               // podemos inserir objetos dentro de objetos
    }
}

console.log(prod2)

prod2.desconto = 0.3

console.log(prod2)