// 🧪 Exercício 4.1 – Carregar dados de uma API com useEffect
// 🎯 Objetivo:
// Praticar o uso de useEffect para buscar dados externos com fetch e armazenar no estado.


// 📋 Instruções com comentários:
// jsx
// Copiar
// Editar
// 1. Importe useState e useEffect
// 2. Crie um estado chamado 'produto' que começa como null
// 3. Dentro do useEffect, faça um fetch para:
//    👉 'https://ranekapi.origamid.dev/json/api/produto/notebook'
// 4. Converta a resposta com .json() e salve no estado
// 5. Mostre na tela: o nome do produto e o preço (produto.nome e produto.preco)
// 6. Adicione um loading condicional enquanto o fetch estiver carregando

// ✅ O que deve acontecer:
// Ao carregar o site, os dados do notebook são buscados automaticamente.

// O nome e o preço aparecem na tela.

// Enquanto carrega, exibe a mensagem: Carregando...

// 📎 Dica (não código!):
// Use um segundo estado como loading (true/false) para controlar a mensagem de carregamento.
// Esse é o primeiro passo para trabalhar com dados externos em React.


import { useEffect, useState } from "react"

const App = () => {
  const [produto, setProduto] = useState(null)

  useEffect(() => {
    // 1. O que é o AbortController?
    // O AbortController é uma API nativa do JavaScript (não é do React). Ele serve para cancelar requisições feitas com fetch.
    const controller = new AbortController()
    
    // controller.signal → sinal de comunicação com o fetch    
    const signal = controller.signal

    async function buscarPordutos() {
      try {
        const responseProdutos = await fetch('https://ranekapi.origamid.dev/json/api/produto/notebook', { signal })
        const jsonProdutos = await responseProdutos.json()

        setTimeout(() => {
          setProduto(jsonProdutos)
        }, 2000)
        
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Requisição cancelada")
        } else {
          console.log("Erro:", error)
        }
      }
    }
    buscarPordutos()

    return () => {
      // controller.abort() → função que cancela a requisição
      controller.abort()
    }
  }, [])
  return (
    <div>
      <h1>Produtos</h1>


      {produto ? (
        <>
          <p> {produto.nome}</p>
          <p> {produto.preco}</p>
        </>
      ) : (
        <p>Carregando..</p>
      )}

    </div >
  )
}

export default App
