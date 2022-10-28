const sequencia = {
    _valor: 1, // convencao (pretendido ser acessado apenas internamente)
    get valor() { return this._valor++ },
    set valor(valor) { this._valor = valor } // consigo colocar if se necessario
}

console.log(sequencia.valor, sequencia.valor) // a busca é feita pelo get, nao preciso escreve-lo

sequencia.valor = 10
console.log(sequencia.valor, sequencia.valor)