// 08)

function registro (stringPontuacao) {

    arrayPontuacao = stringPontuacao.split(" ").map(Number)

    let maior = arrayPontuacao[0]
    let menor = arrayPontuacao[0]
    let contadorMaior = 0
    
    for (let count = 0; count < arrayPontuacao.length; count++) {

        if (arrayPontuacao[count] > maior) {
            maior = arrayPontuacao[count]
            contadorMaior++;
        }
        if (arrayPontuacao[count] < menor) {
            menor = arrayPontuacao[count]
        }

    }

    return [(contadorMaior - 1), menor]
}

// Testes
console.log(registro("10 13 15 1 2 3"))
console.log(registro("20 22 24 19 18 17 30"))
