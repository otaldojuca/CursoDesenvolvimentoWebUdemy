// Funções anônimas
// funções sem nome

const soma = function (x, y) {

    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {

    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x* y) // toda função arrow é anônima


const pessoa = {

    falar: function () { 
        console.log("Olá!")
    } ,
    gritar() {
        console.log("OLÁÁÁ!!!")
    }
}
// As duas sintaxes acima representam a mesma coisa
pessoa.falar()
pessoa.gritar()
