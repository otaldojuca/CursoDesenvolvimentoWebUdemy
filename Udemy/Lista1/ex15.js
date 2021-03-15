// 15)

function carro (carro) {

    switch (carro) {

        case "hatch":       return "Compra efetuada com sucesso!"
        case "sedan":       return "Tem certeza que não prefere esse modelo?"
        case "motocicleta": return "Tem certeza que não prefere esse modelo?"
        case "caminhonete": return "Tem certeza que não prefere esse modelo?"
        default:            return "Não trabalhamos com esse tipo de veículo aqui."

    }

}

// Testes
console.log(carro("hatch"))
console.log(carro("sedan"))
console.log(carro("esportivo"))
console.log(carro("moto"))
console.log(carro("motocicleta"))
console.log(carro("caminhonete"))
