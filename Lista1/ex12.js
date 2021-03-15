// 12)

function fatorial (num) {

    let resultado = 1

    if (num >= 0) {

        while (num > 1) {
            resultado *= num
            num--
        }
        return resultado

    } else { 
        return "Erro #001 - Não existe fatorial de números negativos."
    }

}

// Testes
console.log(fatorial(0)) // 1
console.log(fatorial(1)) // 1
console.log(fatorial(2)) // 1*2 = 2
console.log(fatorial(3)) // 1*2*3 = 6
console.log(fatorial(4)) // 1*2*3*4 = 24
console.log(fatorial(5)) // 1*2*3*4*5 = 120
console.log(fatorial(-1))
