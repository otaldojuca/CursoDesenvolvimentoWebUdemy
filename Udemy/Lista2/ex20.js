// Faça uma função que recebe a base e a altura de um triângulo e 
// retorne a área desse triângulo. A precisão deverá ser de duas 
// casas decimais, arredondando se necessário.

const areaTriangle = (base, height) => (base * height / 2).toFixed(2)

// Tests
console.log(areaTriangle(12, 5))
console.log(areaTriangle(1, 1))
