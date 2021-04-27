// Instância única x Nova instância
// retornar nova instância usando factory

module.exports = _ => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}
