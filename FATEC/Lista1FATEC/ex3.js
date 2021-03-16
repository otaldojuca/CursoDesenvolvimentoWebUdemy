// 03)
// José Carlos Rodrigues Antonio
// 0040961923011

function equacaoQuadratica (a, b, c) {

    if (a != 0) {

        let delta = b * b - 4 * a * c

        if (delta < 0) {
            return "O delta é negativo, logo não existe um x para y = 0."
        } else {
            let x1 = (- b + delta) / (2 * a)
            let x2 = (- b - delta) / (2 * a)
            return [x1, x2]
        }
    } else {
        return "Não é possível realizar uma equação quadrática com"
    }
}

// Tests
console.log(equacaoQuadratica(1, -2, 1))
console.log(equacaoQuadratica(2, 4, 1))
console.log(equacaoQuadratica(3, 4, 5))
console.log(equacaoQuadratica(0, 0, 0))
