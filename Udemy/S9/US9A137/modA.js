// Passando parâmetros entre módulos

module.exports = function(...nomes) {
    return nomes.map(nome => `Tenha uma boa semana ${nome}!`)
}
