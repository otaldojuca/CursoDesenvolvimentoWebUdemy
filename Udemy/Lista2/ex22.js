// Desenvolva uma função que receba como parâmetro um número de 1 a 10.
// Internamente, na função, será gerado um número aleatório de 1 a 10. 
// A função deverá retornar se o parâmetro de entrada foi igual ao número
// sorteado internamente. Se o valor fornecido foi o sorteado, retorne 
// "Parabéns! O número sorteado foi o X". Se não for igual, retorne 
// "Que pena! O número sorteado foi o X". X é o número que foi sorteado.

const random = (num) => {

    if (typeof num != "number") return "Error #001 - the parameter is not a number."
    if (num > 10 || num < 1)    return "Error #002 - the number must be between 1 and 10."

    const random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    if (num == random) return `You got it! The sorted number was ${num}!`
    else               return `What a shame! The sorted number was ${random}!`
}

// Tests
console.log(random("four"))
console.log(random(0))
console.log(random(8))
console.log(random(1))
console.log(random(10))
console.log(random(13))
