const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
console.log(concatenacao)

const template = `Olá ${nome}!`
console.log(template)

console.log(`1 + 1 = ${1 + 1}`)

// neste caso permanecera a organizacao
const template2 = `
Olá
${nome}
!`
console.log(template2)

const up = texto => texto.toUpperCase() // up = funcao, texto = parametro
console.log(`Ei... ${up('cuidado')}!`)  // utilizando funcao