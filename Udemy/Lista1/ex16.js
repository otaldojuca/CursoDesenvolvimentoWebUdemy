// 16)

function calculadoraBasica (num1, operacao, num2) {

    switch (operacao) {

        case "+": return num1 + num2
        case "-": return num1 - num2
        case "*": return num1 * num2
        case "/": return num1 / num2
        default: return "Erro #001 - Operação inválida."
        
    }

}

// Testes
console.log(calculadoraBasica(2, "+", 3))
console.log(calculadoraBasica(10, "-", 5))
console.log(calculadoraBasica(2, "*", 8))
console.log(calculadoraBasica(7, "/", 7))
console.log(calculadoraBasica(18, "x", 2))
