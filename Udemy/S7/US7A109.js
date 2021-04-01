// Métodos importantes de arrays

const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]
console.log(pilotos)

pilotos.pop() // retira o último elemento
console.log(pilotos)

pilotos.push("Verstappen") // adiciona ao final
console.log(pilotos)

pilotos.shift() // retira o primeiro elemento
console.log(pilotos)

pilotos.unshift("Hamilton") // adiciona no início
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // a partir do índice dado, gera um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 3) // gera um novo array composto pelos
                                           // elementos do índice 1 a 3 (não inclusivo)
console.log(algunsPilotos2)

// O .splice() pode adicionar e remover elementos

// Adicionando
pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)

// Removendo
pilotos.splice(3, 1) 
console.log(pilotos)
