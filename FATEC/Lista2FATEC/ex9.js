// 09)
// José Carlos Rodrigues Antonio
// 0040961923011

let drinks = [
    { name: "Vodka",         price: 12.99 },
    { name: "Tequila",       price: 39.49 },
    { name: "Corote",        price: 3.00  },
    { name: "Skol",          price: 1.99  },
    { name: "Jack Daniel's", price: 29.99 },
]

let ascendingByPrice = (arrayProducts) => arrayProducts.sort(sort = (a, b) => a.price - b.price)

// Tests
console.log(ascendingByPrice(drinks))
