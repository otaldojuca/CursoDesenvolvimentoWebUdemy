// Operador rest/spread


// usando spread em objetos
const funcionario = { nome: "Maria", salario: 1234.56}
const clone = { ativo: true, ...funcionario }

console.log(funcionario)
console.log(clone)


// usando spread em arrays
const grupoA = ["Ana", "Bia", "Carol"]
const grupoFinal = ["Daiana", ...grupoA, "Eliana"]

console.log(grupoA)
console.log(grupoFinal)
