// Promise - IV


function geradorNumerosEntre(min, max, tempo) {

    if (min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(function() {
            const fator = (max - min + 1)
            const num = parseInt(Math.random() * fator) + min
            resolve(num)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        geradorNumerosEntre(1, 60, 1000),
        geradorNumerosEntre(1, 50, 500),
        geradorNumerosEntre(1, 40, 2000),
        geradorNumerosEntre(1, 30, 500),
        geradorNumerosEntre(1, 20, 5000),
        geradorNumerosEntre(1, 10, 100)
    ])
}

console.time('promise')
gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() => {
        console.timeEnd('promise')
    })
