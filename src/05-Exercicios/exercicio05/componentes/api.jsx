// api.js
export const buscarProdutoPorNome = async (nomeDoProduto) => {
  try {
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${nomeDoProduto}`)
    const json = await response.json()
    return json
  } catch (error) {
    console.error('Erro ao buscar produto:', error)
    return null
  }
}
