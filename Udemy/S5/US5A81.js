// Contexto léxico

const valor = "Global"

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = "local"
    minhaFuncao()
}

minhaFuncao()
exec() // por conta do contexto léxico, retorna "Global"
