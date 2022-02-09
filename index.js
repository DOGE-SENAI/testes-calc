function somar(valorA, valorB) {
    if(/[A-Z]/gi.test(valorA) || /[A-Z]/gi.test(valorB)){
        return "Os valores nao podem conter letras";
    }

    valorA = Number.parseFloat(valorA);
    valorB = Number.parseFloat(valorB);
    
    return valorA + valorB;
}

function subtrair(valorA, valorB) {
    if(/[A-Z]/gi.test(valorA) || /[A-Z]/gi.test(valorB)){
        return "Os valores nao podem conter letras";
    }

    valorA = Number.parseFloat(valorA);
    valorB = Number.parseFloat(valorB);
    
    return valorA - valorB;
}

function multiplicar(valorA, valorB) {
    if(/[A-Z]/gi.test(valorA) || /[A-Z]/gi.test(valorB)){
        return "Os valores nao podem conter letras";
    }

    valorA = Number.parseFloat(valorA);
    valorB = Number.parseFloat(valorB);

    return valorA * valorB;
}

function dividir(valorA, valorB) {
    if(/[A-Z]/gi.test(valorA) || /[A-Z]/gi.test(valorB)){
        return "Os valores nao podem conter letras";
    }

    valorA = Number.parseFloat(valorA);
    valorB = Number.parseFloat(valorB);

    if(valorB == 0){
        return("O segundo valor não pode ser 0")
    }

    return valorA / valorB;
}

module.exports = { somar, subtrair, multiplicar, dividir };
