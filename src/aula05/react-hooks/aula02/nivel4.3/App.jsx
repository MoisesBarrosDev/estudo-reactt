// 🎯 Objetivo:
// Fixar o uso de estado, renderização condicional, fetch dinâmico e atualização de arrays no estado.

// 📋 Instruções:
// Importe useState e useEffect.

// Crie um estado produto, começando como null.
// Crie um estado carregando, começando como false.
// Crie um estado historico, que começa como um array vazio[].

//   Mostre 3 botões:
// Notebook
// Smartphone
// Tablet

// Quando um botão for clicado:
// Coloque carregando como true.
// Faça o fetch do produto com base no botão(como antes).
//   URL: https://ranekapi.origamid.dev/json/api/produto/[nome]

// Após o fetch:
// Atualize produto com o que veio do servidor.
// Adicione o nome do produto ao final do array historico.
// Coloque carregando como false.

// ✅ O que deve acontecer:
// Ao iniciar: nada aparece.

// Ao clicar num botão: aparece "Carregando...", depois os dados do produto.

// Abaixo, aparece uma lista com os nomes de todos os produtos já buscados(histórico).

// Exemplo: Notebook, Smartphone, Notebook

// 🔁 Pode usar setTimeout se quiser simular demora.


import { useState } from 'react'

const App = () => {
  const [produto, setProduto] = useState(null)
  const [carregando, setCarregando] = useState(false)
  const [historico, setHistorico] = useState([])

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

      setHistorico([...historico, nomeProduto])

    } catch (error) {
      console.log('ERROR', error)
      setCarregando(false)
    }
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button data-produto='notebook' onClick={buscarProdutos}>Notebook</button>
        <button data-produto='smartphone' onClick={buscarProdutos}>Smartphone</button>
        <button data-produto='tablet' onClick={buscarProdutos}>Tablet</button>
      </div>

      {carregando && <p>Carregando..</p>}

      {produto && !carregando && (
        <>
          <h1>{produto.nome}</h1>
          <p> preço: {produto.preco}</p>
          <p> Historico: {historico.join(', ')}</p>
        </>
      )}
    </div>
  )
}

export default App
