// Claro! Aqui vai o próximo exercício baseado no nível 4, para fixar fetch, estado, carregamento, e atualização com eventos:


// 🧪 Exercício 4.1C – Escolher o produto por botão
// 🎯 Objetivo:
// Fixar o uso de múltiplos fetchs com base em interações do usuário (cliques em botões).

// 📋 Instruções:
// Importe useState e useEffect.
// Crie um estado produto (inicial: null).
// Crie um estado carregando (inicial: false).


// Mostre 3 botões com os nomes:
// Notebook
// Smartphone
// Tablet

// Ao clicar em um botão, o app deve:
// Definir carregando como true
// Fazer o fetch do produto correspondente, com esta URL:


// https://ranekapi.origamid.dev/json/api/produto/[nome]
// Exemplo: .../produto/notebook

// Quando a resposta chegar:
// Atualize o estado produto com os dados recebidos
// Coloque carregando como false
// Renderize:
// Se carregando for true, mostre "Carregando..."
// Se produto existir, mostre seu nome e preco

// ✅ O que deve acontecer:
// Nenhum dado aparece no início.
// Ao clicar em um botão, mostra "Carregando...".
// Depois de 2 segundos, exibe os dados do produto clicado.


import { useState } from "react"


const App = () => {
  const [produto, setProduto] = useState(null)
  const [carregando, setCarregando] = useState(false)

  const buscarProdutos = async (event) => {
    const nomeProduto = event.target.dataset.produto
    try {
      setCarregando(true)
      const responseProdutos = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${nomeProduto}`)
      const responseJson = await responseProdutos.json()

      setTimeout(() => {
        setProduto(responseJson)
        setCarregando(false)
      }, 2000)
    } catch (error) {
      console.log('error!', error)
      setCarregando(false)
    }
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button data-produto="notebook" onClick={buscarProdutos}>Notebook</button>
        <button data-produto="smartphone" onClick={buscarProdutos}>Smartphone</button>
        <button data-produto="tablet" onClick={buscarProdutos}>Tablet</button>
      </div>

      {carregando && <p>Carregando...</p>}

      {produto && !carregando && (
        <>
          <h1>{produto.nome}</h1>
          <p> preço: {produto.preco}</p>
        </>
      )}
    </div>
  )
}

export default App
