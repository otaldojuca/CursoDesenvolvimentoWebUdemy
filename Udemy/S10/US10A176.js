// Async/Await - I


// Sem async/await
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// await esperarPor(3000) // dá problema
/*
esperarPor(2000)
    .then(() => console.log('Executando 1!'))
    .then(esperarPor)
    .then(() => console.log('Executando 2!'))
    .then(esperarPor)
    .then(() => console.log('Executando 3!'))
*/


// Com async/await (simula sincronia (código síncrono))
function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(1), 5000)
    })
}

function retornarValorRapido() {
    return 100
}

async function executar() {
    
    let valor = await retornarValorRapido()

    await esperarPor(1000)
    console.log(`Async/await ${valor}.`)

    await esperarPor(1000)
    console.log(`Async/await ${valor + 1}.`)

    await esperarPor(1000)
    console.log(`Async/await ${valor + 2}.`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

/*
executar()
    .then(console.log)
*/

executarDeVerdade()
