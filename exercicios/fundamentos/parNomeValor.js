// key/value

const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos sao grupos aninhados de pares chave/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec(saudacao))  // conclusao, podemos ter a mesma chave com valores diferentes, dependendo do escopo
console.log(cliente)