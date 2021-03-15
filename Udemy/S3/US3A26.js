// Null & undefined

// Atribuição por referência

const a = {name: "Teste"} // "a" recebe apenas o endereço
console.log(a)

const b = a // "a" e "b" têm agora o mesmo endereço

b.name = "Testando"
console.log(a)
// tanto "a" quanto "b" percebem a mudança no objeto,
// pois armazenam o endereço dele


// Atribuição por valor

let c = 1
let d = c // "c" recebe o valor de d
d++ // o valor de "d" é incrementado, porém o de "c" se mantém
console.log("c: " + c)
console.log("d: " + d)

let algo // não inicializada
console.log(algo)

algo = null // ausência de valor
console.log(algo)
// console.log(algo.toString()) // Erro!

const produto = {}
console.log(produto)
console.log(produto.preco)
// console.log(produto.preco.a) // Erro! Isso funciona apenas se o termo anterior ("preco") é definido

produto.preco = 2.49
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

// Atribuição por valor gera uma cópia do valor, 
// e cada variável/constantes terá seu valor independente

// Atribuição por referência gera uma cópia do endereço de memória
// faz com que ambas as variáveis/constantes apontem para o mesmo lugar
