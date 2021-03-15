// Parâmetro padrão


// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(2), soma1(1, 2, 3), soma1(0, 0, 0)) // "0" não funciona

// Estratégia 2 a), b) e c)
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // forma mais segura
    return a + b + c
}
console.log(soma2(), soma2(2), soma2(1, 2, 3), soma2(0, 0, 0))

// Estratégia 3
// Forma mais adequada e elegante
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(2), soma3(1, 2, 3), soma3(0, 0, 0))
