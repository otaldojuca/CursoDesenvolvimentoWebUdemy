// Tratamento de erro (try/catch/throw)

function tratarErroELancar(erro) {
    //throw new Error("Erro!")
    throw "Deu erro amigão!"
}

function imprimirNomeGritando(obj) {
    try{
        console.log(obj.name.toUpperCase() + "!")
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("Mensagem.")
    }
    
}

const obj = { nome: "Roberto" }

imprimirNomeGritando(obj)