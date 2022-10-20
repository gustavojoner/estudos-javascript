function tratarErro(erro) {
    throw new Error('...')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e) {
        tratarErro(e)
    } finally {                 // finally sempre é chamado
        console.log('Final')
    }
}

const obj = { nome: 'Gustavo' }
imprimirNomeGritado(obj)