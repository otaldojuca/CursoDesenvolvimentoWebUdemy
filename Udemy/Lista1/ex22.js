// 22)

function anuidade (mes, valorAnuidade) {

    if (mes != 0 && mes <= 12) {

        mes = Math.abs(mes)
        mes = Math.ceil(mes)
        let mesesDeAtraso = Math.abs(1 - mes)

        valorAnuidade = Math.abs(valorAnuidade)
        let montante = valorAnuidade

        for (let count = 0; count < mesesDeAtraso; count++) {
            montante *= 1.05
        }

        return `Valor a ser pago: R$ ${montante.toFixed(2)}.`

    } else {
        return "Erro #001 - O mês inserido é inexistente."
    }
    
}

// Testes
console.log(anuidade(1, 100))
console.log(anuidade(-2, -200.55))
console.log(anuidade(2.7, -119.1))
console.log(anuidade(12, 100))
console.log(anuidade())
console.log(anuidade(100))
