// Closure
// é o escopo criado quando uma função é declarada, permitindo a
// ela acessar e manipular variáveis externas à si

const x = "Global"

function fora() {
    const x = "Local"
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
