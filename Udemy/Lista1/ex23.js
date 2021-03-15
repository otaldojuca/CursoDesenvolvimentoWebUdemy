// 23)

function nota (codigo, nota1, nota2, nota3) {

    let status
    let mediaPonderada
    nota1 = Math.abs(nota1)
    nota2 = Math.abs(nota2)
    nota3 = Math.abs(nota3)

    if (nota1 > nota2) {
        if (nota1 > nota3) mediaPonderada = nota1 * 0.4 + nota2 * 0.3 + nota3 * 0.3
        else               mediaPonderada = nota1 * 0.3 + nota2 * 0.3 + nota3 * 0.4
    } else {
        if (nota2 > nota3) mediaPonderada = nota1 * 0.3 + nota2 * 0.4 + nota3 * 0.3
        else               mediaPonderada = nota1 * 0.3 + nota2 * 0.3 + nota3 * 0.4
    }

    if (mediaPonderada >= 5) status = "APROVADO"
    else                     status = "REPROVADO"

    return `Código: ${codigo}
    Nota 1: ${nota1.toFixed(2)}
    Nota 2: ${nota2.toFixed(2)}
    Nota 3: ${nota3.toFixed(2)}
    Média: ${mediaPonderada.toFixed(2)}
    Status: ${status}.
    `
}

// Testes
console.log(nota(00001, 2, 3, 7))
console.log(nota(00002, 10, 4, 9))
console.log(nota(00003, 2, 8, 5))
console.log(nota(00004, 1, 1, 1))
console.log(nota(00005, 2, 2, 1))
console.log(nota(00006, 1, 2, 2))
console.log(nota(00007, 2, 1, 2))
