// 03)

function potenciacao (base, expoente) {

    if (base == 0 && expoente <= 0) {
        return "Indefinido."
    } else {

        auxiliar = 1
        for (let count = 0; count < Math.abs(expoente); count++) {
            auxiliar *= base;
        }

        if (expoente < 0) return (1 / auxiliar).toFixed(2) 
        else if (expoente > 0) return auxiliar
        else return 1

    }

}

// Testes
console.log(potenciacao(3, -2))
console.log(potenciacao(3, -1))
console.log(potenciacao(3, 0))
console.log(potenciacao(3, 1))
console.log(potenciacao(3, 2))
console.log()
console.log(potenciacao(0, 3))
console.log(potenciacao(0, -2))
console.log(potenciacao(0, 0))
console.log(potenciacao(-2, 0))
console.log(potenciacao(3, 0))
console.log(potenciacao(0, 1))
