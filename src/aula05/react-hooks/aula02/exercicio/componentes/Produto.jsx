import { useEffect, useState } from "react"
import Button from "./Button"
import Title from "./Title"


const Produto = () => {
  const [produto, setProduto] = useState(null)

  const buscarProdutos = async (produtoId) => {
    const responseProdutos = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produtoId}`)
    const responseJson = await responseProdutos.json()
    setProduto(responseJson)
    localStorage.setItem('produto', produtoId)
  }

  useEffect(() => {
    const produtoSalvo = localStorage.getItem('produto')
    if (produtoSalvo) {
      buscarProdutos(produtoSalvo)
    }
  }, [])
  return (
    <>
    <Title>Preferência: {produto ? produto.nome : "Nenhuma selecionada"}</Title>
    
    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      <Button onClick={() => buscarProdutos('notebook')}>Notebook</Button>
      <Button onClick={() => buscarProdutos('smartphone')}>Smartphone</Button>
    </div>

    {produto && (
      <div>
        <h2>{produto.nome}</h2>
        <p>{produto.preco}</p>
      </div>
    )}
  </>
)

}

export default Produto
