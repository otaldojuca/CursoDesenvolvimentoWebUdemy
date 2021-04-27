// Objeto global

console.log(global)

global.meuAtributo = Object.freeze({ // não fazer isso
    saudacao() {
        return "Estou aqui."
    },
    nome: "Sistema"
})
