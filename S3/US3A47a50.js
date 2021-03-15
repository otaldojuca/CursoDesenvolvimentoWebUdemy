// Operadores relacionais

console.log("1" == 1) // os valores são iguais? Verdadeiro
console.log("1" === 1) // as variáves são ESTRITAMENTE iguais? Falso

// Operadores lógicos

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // or
    const comprarTV50P = trabalho1 && trabalho2 // and
    const comprarTV32P = trabalho1 != trabalho2 // XOR
    const ficarSaudavel = !comprarSorvete
    return { comprarSorvete, comprarTV50P, comprarTV32P, ficarSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

// Operadores ternários

const resultado = nota => nota >= 7 ? "Aprovado!" : "Reprovado." // se nota >= 7, true, então aprovado

console.log(resultado(7.2))
console.log(resultado(2.7))
