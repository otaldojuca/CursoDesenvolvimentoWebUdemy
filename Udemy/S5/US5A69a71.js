// "this"

function f1() { console.log(this === window) } // funciona no console do navegador
function f2() { console.log(this === global) } // funciona no VSCode

// f1()
f2()

// "this" varia de acordo com quem chamou a função (no console do navegador isso é mais claro)
// em funções arrow o "this" não varia de acordo com o contexto, sendo definido somente quando a função é definida ("this" léxico)


// Função "bind"
// deixa o "this" fixado em uma função comum (função não-arrow)

const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao)
    }
}

// não funciona, devido a um conflito entre paradigmas de
// programação funcional e programação orientada a objetos
pessoa.falar()
const falar = pessoa.falar
falar()

// funciona!
// Estratégia 1
const falarDePessoa = pessoa.falar.bind(pessoa) // o "bind" "amarra" aquele "this"
falarDePessoa()


// Função "bind" - parte II

// Estratégia 2
function individuo() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}
new individuo
