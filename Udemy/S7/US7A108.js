// Como o curso foi atualizado em março de 2021, o número das aulas deixou de estar 100% correto.
// Então, a partir das aulas dessa seção (7) eu listarei conforme estiver na Udemy. Desse modo,
// a aula 107 se tornou a 108, mas as aulas 105 a 106 não foram reescritas como "106 a 107".


// Array - visão geral

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array("Ana", "Bia", "Carla", "Débora", "Eliana")
console.log(aprovados)

aprovados = ["Ana", "Bia", "Carla", "Débora"]
console.log(aprovados)
console.log(aprovados[0])

aprovados[4] = "Josué"
console.log(aprovados)

aprovados.push("Alonso")
console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = "Rafael"
console.log(aprovados)
console.log(aprovados.length)

console.log(aprovados[8] === null)
console.log(aprovados[8] === undefined)

aprovados.sort()
console.log(aprovados)

delete aprovados[0] // substitui "aprovados[0]" por "undefined"
console.log(aprovados)


let novosAprovados = ["Armando", "Bianca", "Charlize"]
novosAprovados.splice(1, 2, "nome1", "nome2") // .splice([a partir desse elemento], 
                                              // [exclua essa quantidade], [insira esse elemento])
                                              // [insira esse elemento])
console.log(novosAprovados)
