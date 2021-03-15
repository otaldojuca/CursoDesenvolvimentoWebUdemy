// 11)

function anoBissexto (ano) {

    if (ano % 4 == 0) {
        if (ano % 100 == 0) {
            if (ano % 400 == 0) return `O ano ${ano} é bissexto.`
            else                return `O ano ${ano} não é bissexto.`
        } else {
            return `O ano ${ano} é bissexto.`
        }
    } else {
        return `O ano ${ano} não é bissexto.`
    }

}

// Testes
console.log(anoBissexto(1992))
console.log(anoBissexto(2000))
console.log(anoBissexto(2001))
console.log(anoBissexto(2008))
