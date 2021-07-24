// Promise - V


function funcionarOuNao(valor, chanceErro) {

    return new Promise((resolve, reject) => {

        try {
            con.log(`Tentativa de erro.`)

            if (Math.random() < chanceErro) reject('Ocorreu um erro.')
            else resolve(valor)
        } catch (e) {
            reject(e)
        }
        
    })  
}

funcionarOuNao('Testando!', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        //err => console.log(`Erro específico: ${err}`)
    )
    .then(() => console.log(`Quase no fim!`))
    .catch(error => console.log(`Erro geral: ${error}`))
    .then(() => console.log(`Fim!`))

funcionarOuNao('Testando!', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro específico: ${err}`)
    )
    .then(() => console.log(`Quase no fim!`))
    .catch(error => console.log(`Erro geral: ${error}`))
    .then(() => console.log(`Fim!`))
