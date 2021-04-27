const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

/* A partir deste código:

axios.get(url).then(response => {
    const funcionarios = response.data
}) // obtém informação do servidor
*/
// Desafio: descobrir qual MULHER da CHINA possui MENOR SALÁRIO

axios.get(url).then(response => {

    const funcionarios = response.data
    const pessoa = funcionarios
        .filter(e => e.pais = "China")
        .filter(e => e.genero = "F")
        .reduce((fAcum, fAtual) => fAcum.salario > fAtual.salario ? fAcum : fAtual) // resolvida com ajuda da aula nessa linha

    console.log(pessoa)
})
