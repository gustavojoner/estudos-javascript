// var criado fora de uma funcao, tem acesso global
{
    {
        {
            {
                var sera = 'Será?'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local) // nao tem acesso
