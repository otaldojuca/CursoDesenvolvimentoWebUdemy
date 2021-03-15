// 06) 

function jurosComposto (capitalInicial, taxaJuros, tempoAplicacaoMeses) {

    let montante = capitalInicial
    let taxaReal = 1 + taxaJuros / 100

    for (let count = 0; count < tempoAplicacaoMeses; count++) {
        montante *= taxaReal
    }

    return montante.toFixed(2)
}

// Testes I
console.log(jurosComposto(1000, 10, 2))
console.log(jurosComposto(250, 2, 3))
console.log(jurosComposto(500, 1.5, 12))


function jurosSimples (capitalInicial, taxaJuros, tempoAplicacaoMeses) {

    let bonus = (capitalInicial * (taxaJuros / 100)) * tempoAplicacaoMeses
    let montante = bonus + capitalInicial

    return montante.toFixed(2)
}

// Testes II
console.log(jurosSimples(1000, 10, 2))
console.log(jurosSimples(250, 2, 3))
console.log(jurosSimples(500, 1.5, 12))
