// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas
// trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. 
// O retorno da função deve ser a string "Salário igual a R$X", em que X é o 
// quanto o funcionário ganhou no mês.

let wage = (hoursWorked, moneyPerHour) => `Wage to receive: R$ ${hoursWorked * moneyPerHour}.`

// Tests
console.log(wage(40, 5))
console.log(wage(45, 7))
console.log(wage(28, 12))
