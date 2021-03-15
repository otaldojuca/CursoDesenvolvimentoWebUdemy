// 19)

function lanchonete (codigo, quantidade) {

    switch (codigo) {

        case 100: return `Valor a pagar: R$ ${(quantidade * 3).toFixed(2)}.`
        case 200: return `Valor a pagar: R$ ${(quantidade * 4).toFixed(2)}.`
        case 300: return `Valor a pagar: R$ ${(quantidade * 5.5).toFixed(2)}.`
        case 400: return `Valor a pagar: R$ ${(quantidade * 7.5).toFixed(2)}.`
        case 500: return `Valor a pagar: R$ ${(quantidade * 3.5).toFixed(2)}.`
        case 600: return `Valor a pagar: R$ ${(quantidade * 2.8).toFixed(2)}.`
        default:  return "Erro #001 - Código ou quantidade inválida."

    }

}

// Testes
console.log(lanchonete(100, 7))
console.log(lanchonete(250, 4))
console.log(lanchonete(600, 2))
console.log(lanchonete(100))
console.log(lanchonete("100", 7))
