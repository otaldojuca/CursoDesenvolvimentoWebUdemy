// Classes - I

class Lancamento {
    constructor(nome = "Genérico", valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {

    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(element => this.lancamentos.push(element))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(element => {
            valorConsolidado += element.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento("Salário", 10050)
const contaDeLuz = new Lancamento("Conta de luz", -250)

const contas = new CicloFinanceiro(6, 2020)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())


// Classes - II

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // se fossem objetos, "Avo" seria o prototype de "Pai"
    constructor(sobrenome, profissao = "Professor") {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super("Silva")
    }
}

const filho = new Filho
console.log(filho)
