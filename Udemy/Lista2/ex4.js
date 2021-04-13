// Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente
// como uma string. Por exemplo, se a entrada for 2, a função deverá retornar
// "fevereiro", pois este é o 2° mês.

let month = (monthNumber) => {
    switch (monthNumber) {
        case 1: return "January"
        case 2: return "February"
        case 3: return "March"
        case 4: return "April"
        case 5: return "May"
        case 6: return "June"
        case 7: return "July"
        case 8: return "August"
        case 9: return "September"
        case 10: return "October"
        case 11: return "November"
        case 12: return "December"
        default: return "ERROR #001 - Invalid input."
    }
}

console.log(month(1))
console.log(month(3))
console.log(month("bom dia"))
console.log(month(113))
