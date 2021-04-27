let a = 2 // visível apenas dentro deste módulo

module.exports = {
    bomDia: `Bom dia.`,
    boaNoite() {
        return `Boa noite!`
    }
}
