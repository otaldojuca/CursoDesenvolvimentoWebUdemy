// 04)
// José Carlos Rodrigues Antonio
// 0040961923011

let boardGame = (p1, p2) => (p2 - p1 <= 6 && p2 - p1 >= 0) ? true : false

// Tests
console.log(boardGame(3, 7))
console.log(boardGame(1, 9))
console.log(boardGame(5, 3))
console.log(boardGame(4, 11))
