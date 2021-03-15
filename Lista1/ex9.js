// 09)

function sistemaNotas (nota) {

    if (nota >= 0 && nota <= 100) {

        let proximoMultiploDe5 = ((nota / 5).toFixed(0)) * 5

        if (nota > proximoMultiploDe5) proximoMultiploDe5 = nota
        
        if (proximoMultiploDe5 < 40 && proximoMultiploDe5 >= 0) {
            return `Reprovado. Nota: ${nota}.`
        } else {
            if (nota != proximoMultiploDe5) {
                return `Aprovado. Nota: ${nota}, virou ${proximoMultiploDe5}.`
            } else {
                return `Aprovado. Nota: ${nota}.`
            }
        } 
    
    } else {
        return "Erro #001: a nota do aluno é maior que 100 ou menor que 0!"
    }

}

// Testes 
console.log(sistemaNotas(-42))
console.log(sistemaNotas(1001))
console.log(sistemaNotas(101))
console.log(sistemaNotas(60))
console.log(sistemaNotas(40))
console.log(sistemaNotas(39))
console.log(sistemaNotas(38))
console.log(sistemaNotas(37))
console.log(sistemaNotas(36))
console.log(sistemaNotas(35))
