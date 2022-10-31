function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj2.__proto__)

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.nome}.`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

// outra forma de criar

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Thiago'
obj3.falar()

// resumindo

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)