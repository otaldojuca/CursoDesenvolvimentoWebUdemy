// Promise - III


function geradorNumerosEntre(min, max) {

    if (min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        const fator = (max - min + 1)
        const num = parseInt(Math.random() * fator) + min
        resolve(num)
    })

}

geradorNumerosEntre(1, 60)
    .then(numEscrito => `O número gerado foi ${numEscrito}.`)
    .then(console.log)
