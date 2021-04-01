// ForEach - I
// por padrão, os 3 atributos do forEach são: 
// 1- o elemento do array
// 2- o índice do array
// 3- o array em si

const aprovados = ["Ana", "Bernardo", "Camila", "Damiana"]

aprovados.forEach(function (nome, indice, array) {
    console.log(`${indice + 1}: ${nome} do array [${array}]`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


// ForEach - II
// criando a função .forEach()

Array.prototype.forEach2 = function(callback) {

    for (let count = 0; count < this.length; count++) {
        callback(this[count], count, this)
    }
}

const aprovados2 = ["Ágata", "Bianca", "Charlize", "Denise"]

aprovados2.forEach2(function (nome, indice, array) {
    console.log(`${indice + 1}: ${nome} do array [${array}]`)
})
