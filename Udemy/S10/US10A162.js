// Era pra ser a aula 159, mas foram adicionadas 3 aulas no início do curso
// tornando esta aula a de número 162.


// Promises

function falarDepoisDe (segundos, frase) {

    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            resolve (frase)
        }, segundos * 1000)

    })

}

falarDepoisDe(3, "Funcionou! ")
    .then(frase => frase.concat("Que legal!"))
    .then(outraFrase => console.log(outraFrase))
    .catch(error => console.log("Erro #001")) // caso fosse "reject" ao invés
                                              // de "resolve" na linha 12
