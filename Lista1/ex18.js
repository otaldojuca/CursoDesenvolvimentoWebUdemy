// 18)

function extenso (num) {

    switch (num) {
        
        case 0: return "Zero."
        case 1: return "Um."
        case 2: return "Dois."
        case 3: return "Três."
        case 4: return "Quatro."
        case 5: return "Cinco."
        case 6: return "Seis."
        case 7: return "Sete."
        case 8: return "Oito."
        case 9: return "Nove."
        default: return "Erro #001 - Número fora do intervalo."

    }

}

// Testes
console.log(extenso(1))
console.log(extenso("2"))
console.log(extenso())
console.log(extenso(10))
console.log(extenso(8))
console.log(extenso(4, 2))
