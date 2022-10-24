function teste1(num) {
    if (num > 7)
        console.log(num)
    console.log('Final') // está fora do if, sempre sendo executado
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); {      // erro aqui, pois está criando um bloco vazio no if
        console.log(num)
    }
}

teste2(6)
teste2(9)
