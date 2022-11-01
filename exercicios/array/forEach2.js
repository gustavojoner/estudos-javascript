Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        console.log(`${i+1}) ${this[i]}`)
    }
}
const aprovados = ['Agatha', 'Algo', 'Daniel', 'Raquel']

aprovados.forEach2()
