// 20)

function cedulas (valor) {

    let cedulasDe100
    let cedulasDe50
    let cedulasDe10
    let cedulasDe5
    let cedulasDe1

    let string100 = ""
    let string50 = ""
    let string10 = ""
    let string5 = ""
    let string1 = ""

    valor = Math.ceil(valor)
    valor = Math.abs(valor)

    if ((valor / 100) >= 1) {
        cedulasDe100 = (Math.floor(valor / 100)).toFixed(0)
        valor -= cedulasDe100 * 100
        string100 = `${cedulasDe100} cédulas de R$ 100.00;`
    }

    if ((valor / 50) >= 1) {
        cedulasDe50 = (Math.floor(valor / 50)).toFixed(0)
        valor -= cedulasDe50 * 50
        string50 = `${cedulasDe50} cédulas de R$ 50.00;`
    }

    if ((valor / 10) >= 1) {
        cedulasDe10 = (Math.floor(valor / 10)).toFixed(0)
        valor -= cedulasDe10 * 10
        string10 = `${cedulasDe10} cédulas de R$ 10.00;`
    }

    if ((valor / 5) >= 1) {
        cedulasDe5 = (Math.floor(valor / 5)).toFixed(0)
        valor -= cedulasDe5 * 5
        string5 = `${cedulasDe5} cédulas de R$ 5.00;`
    }

    if (valor >= 1) {
        cedulasDe1 = (Math.floor(valor)).toFixed(0)
        valor -= cedulasDe1
        string1 = `${cedulasDe1} cédulas de R$ 1.00.`
    }

    let stringRetorno = 
    `Cédulas a retornar:
    ${string100}
    ${string50}
    ${string10}
    ${string5}
    ${string1}
    `

    return stringRetorno
}

// Testes
console.log(cedulas(120))
console.log(cedulas(120.33))
console.log(cedulas(120.95))
console.log(cedulas(0))
console.log(cedulas(9))
console.log(cedulas(238))
console.log(cedulas(-120))
