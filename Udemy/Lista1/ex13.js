// 13)

function diaUtilOuNao (dia) {

    switch (dia) {

        case 1: return "Fim de semana"
        case 2: case 3: case 4: case 5: case 6: return "Dia útil"
        case 7: case 8: return "Fim de semana"
        case 9: case 10: case 11: case 12: case 13: return "Dia útil"
        case 14: case 15: return "Fim de semana"
        case 16: case 17: case 18: case 19: case 20: return "Dia útil"
        case 21: case 22: return "Fim de semana"
        case 23: case 24: case 25: case 26: case 27: return "Dia útil"
        case 28: case 29: return "Fim de semana"
        case 30: return "Dia útil"

        default: return "Erro #001 - O dia inserido é inválido."
    }

}

// Testes
console.log(diaUtilOuNao(-12))
console.log(diaUtilOuNao(0))
console.log(diaUtilOuNao(23))
console.log(diaUtilOuNao(7))
console.log(diaUtilOuNao(31))
