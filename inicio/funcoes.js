teste('gustavo', 10);

calcularAreaCirculo(10);

function teste(string, number) {
    number += 5;
    console.log(string, number);
}

function calcularAreaCirculo(raio) {
    console.log((raio * raio * Math.PI).toFixed(3) + "m²"); // toFixed adiciona numero de casas decimais desejadas
}                                                           // Math apresenta funcoes matematicas

