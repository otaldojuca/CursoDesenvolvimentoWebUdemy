// Async/Await - II


function geradorNumerosEntre(min, max, numerosProibidos) {

    if (min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        const fator = (max - min + 1)
        const num = parseInt(Math.random() * fator) + min

        if (numerosProibidos.includes(num)) reject(`Número repetido.`)
        else resolve(num)
    })
}

async function gerarMegaSena(qntNumeros, tentativas = 1) {

    try {
        const numeros = []
        for (let _ of Array(qntNumeros).fill()) {
            numeros.push(await geradorNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        if (tentativas > 10) throw `Erro.`
        else return gerarMegaSena(qntNumeros, tentativas + 1)
    }

}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)
