// Parâmetros e retornos são opcionais


function areaRetang(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m²!`)
    } else {
        return area
    }
}

console.log(areaRetang(2, 7)) // 14
console.log(areaRetang(2)) // NaN
console.log(areaRetang()) // NaN
console.log(areaRetang(2, 3, 5, 7)) // ignora os 2 parâmetros em excesso
console.log(areaRetang(5, 5)) // retorna "undefined" ao fim da mensagem
