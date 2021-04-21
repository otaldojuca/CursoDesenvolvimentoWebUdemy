// Você está trabalhando numa aplicação pessoal de controle de despesas.
// Na tela principal dessa aplicação, é possível adicionar produtos ou 
// serviços, informando nome, categoria e preço. Uma funcionalidade que
// você está desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das 
// despesas.

const products = [
    { name: "Netflix",       category: "Streaming", price: 24.99  },
    { name: "Prime Video",   category: "Streaming", price: 9.99   },
    { name: "Spotify",       category: "Streaming", price: 15.99  },
    { name: "Headphone",     category: "Audio",     price: 350.00 },
    { name: "Power charger", category: "Gadgets",   price: 99.49  },
]

const totalCosts = (array) => {

    if (Array.isArray(array) == false) return "Error #001 - no array given as a parameter."
    if (array.length == 0)             return "Error #002 - the array is empty."
    
    let sum = array.map(e => e.price).reduce((accum, curr) => accum + curr)

    return `Total: R$ ${sum.toFixed(2)}.`
} 


// Tests
console.log(totalCosts(products))
