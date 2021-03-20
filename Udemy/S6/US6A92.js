// Estratégias de criação de objetos

// usando a notação literal
const obj1 = {}
console.log(obj1)

// a partir do Object
const obj2 = new Object
console.log(obj2)

// a partir de funções construtoras
function Produto (nome, preco, desc) {
    this.nome = nome // torna a variável pública, não-encapsulada
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto ("Caneta", 2.49, 0.10)
const p2 = new Produto ("Lápis", 1.00, 0.20)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
function criarFuncionario (nome, salarioBase, qntFaltas) {
    return {
        nome,
        salarioBase,
        qntFaltas,
        getSalario() {
            return (salarioBase / 30) * (30 - qntFaltas)
        }
    }
}

const f1 = criarFuncionario("Ana", 12250, 7)
const f2 = criarFuncionario("Mariana", 7850, 3)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = "Amanda"
console.log(filha)

// usando JSON
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
