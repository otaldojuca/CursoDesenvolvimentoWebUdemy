// A fim de manter o calendário anual ajustado com o movimento
// de translação da Terra, criou-se os anos bissextos, que têm 
// 366 dias em vez dos 365 presentes nos anos normais. Para determinar 
// se um ano é bissexto, é necessário saber se ele é multiplo de 4.
// Não pode ser múltiplo de 100, exceto se for também múltiplo de 400.
// Com isso em mente, desenvolva uma função que recebe um número
// correspondente a um ano e retorna se ele é bissexto ou não.

let isLeap = (year) => {

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) return true
            else                 return false
        } else {
            return true
        }
    } else {
        return false
    }

}

// Tests
console.log(isLeap(1992))
console.log(isLeap(2000))
console.log(isLeap(2001))
console.log(isLeap(2008))
