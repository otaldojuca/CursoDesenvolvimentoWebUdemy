// 14)

function fruta (fruta) {

    switch (fruta) {
        
        case "maçã": return "Não vendemos esta fruta aqui!"
        case "kiwi": return "Estamos com escassez de kiwi!"
        case "melancia": return "Aqui está, são 3 reais por quilo."
        default: return "Erro #001 - fruta não existente no catálogo"

    }

}

// Testes
console.log(fruta("maçã"))
console.log(fruta("kiwi"))
console.log(fruta("melancia"))
console.log(fruta("Melancia"))
