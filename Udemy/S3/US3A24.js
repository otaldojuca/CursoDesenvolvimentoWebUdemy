// Array

const array1 = [0, 2.4, 72.5, 1.0, 1,0]

console.log(array1)
console.log(array1[1], array1[4])
console.log(array1[999])

array1[24] = 12

console.log(array1)
console.log(array1.length)

array1.push(false, null, "ômega") // coloca esses elementos ao fim do array
console.log(array1)

console.log(array1.pop()) // retira e exibe o último elemento do array
console.log(array1)

delete array1[24]
console.log(array1)

console.log(typeof array1)
