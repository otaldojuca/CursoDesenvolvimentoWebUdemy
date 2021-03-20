// Objetos constantes

// pessoa aponta para o endereço de memória 123 (exemplo) que contém 
// o objeto criado {...}

const pessoa = { nome: "João" } // o tipo constante sempre aponta 
                                // para o mesmo endereço de memória
console.log(pessoa)

// então o objeto pessoa sempre vai apontar para o mesmo endereço, mas
// o objeto criado pode ser alterado
pessoa.nome = "Cláudio"
console.log(pessoa)

// pessoa = { nome: "Antonio" } // ERRO!

Object.freeze(pessoa) // a partir daqui, os atributos do object
                      // não poderão mais ser alterados

pessoa.nome = "José"
pessoa.endereco = "Rua Paulinho"
console.log(pessoa)
