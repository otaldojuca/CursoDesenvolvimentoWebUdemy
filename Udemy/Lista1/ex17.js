// 17)

function aumento (plano, salario) {

    salario = Math.abs(salario)

    switch (plano) {

        case "a": case "A": return (salario * 1.10).toFixed(2)
        case "b": case "B": return (salario * 1.15).toFixed(2)
        case "c": case "C": return (salario * 1.20).toFixed(2)
        default: return "Erro #001 - Esse plano não existe, ou o salário é inválido."

    }

}

// Testes
console.log(aumento("c", 2512.60))
console.log(aumento("B", 1124.36))
console.log(aumento("x", 10000))
console.log(aumento("A", 1460.00))
console.log(aumento(1460.00))
console.log(aumento("B"))
