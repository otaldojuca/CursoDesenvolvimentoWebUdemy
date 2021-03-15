// 02) 

function existenciaTriangulo (a, b, c) {

    if (
        (Math.abs(a - b) < c && c < a + b) && 
        (Math.abs(b - c) < a && a < b + c) && 
        (Math.abs(c - a) < b && b < c + a)
        ) {

        if (a == b && b == c) {
            return "Equilátero."
        } else if (
            (a == b && b != c) ||
            (b == c && c != a) ||
            (c == a && a != b) 
            ) {
            return "Isósceles."
        } else {
            return "Escaleno."
        }

    } else {
        return "Não existe um triângulo com essas medidas."
    }

}

// Testes
console.log(existenciaTriangulo(2, 1, 5))
console.log(existenciaTriangulo(7, 3, 2))
console.log()
console.log(existenciaTriangulo(2, 2, 2))
console.log(existenciaTriangulo(Math.PI, Math.PI, Math.PI))
console.log()
console.log(existenciaTriangulo(5, 4, 3))
console.log(existenciaTriangulo(32, 27, 22))
console.log()
console.log(existenciaTriangulo(3, 3, 2))
console.log(existenciaTriangulo(7, 6, 7))
console.log(existenciaTriangulo(6, 4, 4))
console.log()
console.log(existenciaTriangulo(0, 0, 0))
console.log(existenciaTriangulo(2, 0, 0))
console.log(existenciaTriangulo(0, 2, 2))
