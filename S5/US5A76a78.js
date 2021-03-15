// Funções Callback
// apresentação

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})
fabricantes.forEach(fabric => console.log(fabric))


// Funções Callback - pt. II
// diferenças entre usar e não usar Callback

const notas = [5.6, 2.7, 10.0, 6.7, 8.7, 2.9, 7.1]

// Sem Callback:
let notasMenoresQueSete = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasMenoresQueSete.push(notas[i])
    }
}
console.log(notasMenoresQueSete)

// Com Callback:
const notasMenoresQueSete2 = notas.filter(function(nota) {
    return nota < 7
})
console.log(notasMenoresQueSete2)

// Com Callback e arrow function
const notasMenoresQueSete3 = notas.filter(nota => nota < 7)
console.log(notasMenoresQueSete3)


// Funções Callback - pt. III
// callback no browser

document.getElementsByTagName('body')[0].onclick = function (evento) {
    console.log("O evento ocorreu!");
}
