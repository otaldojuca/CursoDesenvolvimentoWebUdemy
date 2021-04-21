// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro 
// fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo, 
// se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno 
// será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. 
// Se o parâmetro de entrada não for de nenhum dos tipo acima, retorne "booleano
// ou número esperados, mas o parâmetro é do tipo ...".

let reverse = (input) => {

    if (typeof input === "boolean") return !input
    else if (typeof input === "number") return -input
    else return `Digitar booleano ou número. O parâmetro é do tipo ${typeof input}.`
}

// Tests
console.log(reverse(true))
console.log(reverse(-27))
console.log(reverse("calopsita"))
