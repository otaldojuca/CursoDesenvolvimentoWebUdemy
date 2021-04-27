const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = { }

const salvarProduto = produto => {

    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

getProduto = id => produtos[id] || {}

getProdutos = () => Object.values(produtos)

excluirProduto = id => {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {
    salvarProduto, 
    getProduto, 
    getProdutos,
    excluirProduto
}
