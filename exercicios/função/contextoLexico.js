const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
} 

function exec() {
    const valor ='Local'
    minhaFuncao()
}                                   // vai mostrar (Global)

exec()