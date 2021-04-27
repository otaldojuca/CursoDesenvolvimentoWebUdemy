// Instância única x Nova instância

const contadorA = require("./instanciaUnica")
const contadorB = require("./instanciaUnica")

// retornam a função factory
const contadorC = require("./instanciaNova")() 
const contadorD = require("./instanciaNova")()

// o valor de contadorB terá mudado mesmo sem usar contadorB.inc()
// por conta da questão do cache das instâncias únicas
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) 

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
