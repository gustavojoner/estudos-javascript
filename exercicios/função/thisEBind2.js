function Pessoa() {
    this.idade = 0

    const self = this // criando constante para acessar dentro da funcao
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // milisegundos
}

new Pessoa // ctrl alt m = parar