// Instância única x Nova instância
// node faz cache dos módulos

module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}
