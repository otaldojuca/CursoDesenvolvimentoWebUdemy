// 21)

function planoDeSaude (idade) {

    idade = Math.abs(idade)
    idade = Math.ceil(idade)

    if (idade >= 0 && idade < 10) {
        valorIdade = 80
    } else if (idade >= 10 && idade < 30) {
        valorIdade = 50
    } else if (idade >= 30 && idade < 60) {
        valorIdade = 95
    } else if (idade >= 60) {
        valorIdade = 130
    } else {
        return `Erro #001 - Valor inválido`
    }

    return `Valor do convênio: ${100 + valorIdade}`
}

// Testes
console.log(planoDeSaude(2))
console.log(planoDeSaude(-17))
console.log(planoDeSaude(31.875))
console.log(planoDeSaude(47))
console.log(planoDeSaude("12"))
console.log(planoDeSaude())
