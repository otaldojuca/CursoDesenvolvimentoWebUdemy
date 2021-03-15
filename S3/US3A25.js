// Object

const prod1 = {}
prod1.nome = "Smartphone Maquet 72i"
prod1.preco = 949.99
prod1["Desconto dos domingos"] = 0.5 // evitar atributos com espaços
console.log(prod1)

const prod2 = {
    nome: "Geladeira frost-free",
    preco: 3499.99,
    caracteristicas: {
        cor: "branca",
        pros: "frostfree",
        altura: 1.9
    }
}
console.log(prod2)
