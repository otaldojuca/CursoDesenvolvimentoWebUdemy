// 29)

    function intervalo (array) {

        let contadorDentro = 0;
        let contadorFora = 0;

        array.forEach(element => {

            if (element >= 10 && element <= 20) contadorDentro++
            else contadorFora++
            
        })

        return `Do vetor passado, 
    ${contadorDentro} elementos estão dentro do intervalo e
    ${contadorFora} elementos estão fora.`

    }

// Testes
console.log(intervalo([14, 22, 31, 2, 5, 3, 6, 7, 11, 14]))
console.log(intervalo([10, 20, 12.5, 1, 2, 3, 4, 5, 6, 7]))
