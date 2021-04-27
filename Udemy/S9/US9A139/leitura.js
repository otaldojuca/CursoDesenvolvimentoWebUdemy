// Lendo arquivos

const fileSystem = require("fs") // módulo padrão do Node

// independente de qual módulo eu esteja, desse modo abaixo posso
// pegar o "caminho" até o arquivo usando apenas o nome dele
const caminho = __dirname + "/arquivo.json"

// Leitura síncrona (pior)
const conteudo = fileSystem.readFileSync(caminho, "utf-8")
console.log(conteudo)

// Leitura assíncrona (melhor)
fileSystem.readFile(caminho, "utf-8", (error, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})
// ou
const config = require("./arquivo.json")
console.log(config.db)

// Revela o conteúdo da pasta onde o arquivo está
fileSystem.readdir(__dirname, (error, arquivos) => {
    console.log("Conteúdo da pasta: ")
    console.log(arquivos)
})
