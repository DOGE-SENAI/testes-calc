function somar(valorA, valorB) {
    valorA = Number.parseFloat(valorA);
    valorB = Number.parseFloat(valorB);
    
    return valorA + valorB;
}

function subtrair(valorA, valorB) {
    valorA = Number.parseFloat(valorA);
    valorB = Number.parseFloat(valorB);
    
    return valorA - valorB;
}

function dividir(valorA, valorB) {
    valorA = Number.parseFloat(valorA);
    valorB = Number.parseFloat(valorB);

    if(valorB == 0){
        return("O segundo valor não pode ser 0")
    }

    return valorA / valorB;
}

module.exports = { somar, subtrair, dividir };
