// 🧪 Exercício 4.1B – Fetch de outro produto com botão
// 🎯 Objetivo:
// Fixar o uso de fetch, useEffect, useState, controle de carregamento e atualização do estado com dados externos.

// 📋 Instruções:
// Importe useEffect e useState.

// Crie um estado produto, começando como null.

// Crie um estado carregando, começando como false.

// Adicione um botão com o texto "Buscar Smartphone".

// Quando o botão for clicado:

// Atualize carregando para true

// Faça o fetch para:
// https://ranekapi.origamid.dev/json/api/produto/smartphone

// Quando a resposta chegar:

// Converta para JSON

// Atualize o estado produto

// Coloque carregando como false

// Exiba:

// Se carregando for true, mostre "Carregando..."

// Se produto existir, mostre produto.nome e produto.preco

// ✅ O que deve acontecer:
// Nada aparece na tela até o botão ser clicado. Ao clicar, aparece "Carregando..." e depois os dados do smartphone.

import { useState } from 'react'

const App = () => {

  const [produto, setProduto] = useState(null)
  const [carregando, setCarregando] = useState(false)


  async function handleClick() {
    setCarregando(true)
    try {
      const responseProdutos = await fetch('https://ranekapi.origamid.dev/json/api/produto/smartphone')
      const responseJson = await responseProdutos.json()

      setTimeout(() => {
        setProduto(responseJson)
        setCarregando(false)
      }, 2000)

    } catch (error) {
      console.log('Falhou!', error)
      setCarregando(false)
    }

  }

  return (
    <div>
      {carregando && <p>Carregando...</p>}
      {produto && !carregando && (
        <>
          <h1>{produto.nome}</h1>
          <p>Preço: R$ {produto.preco}</p>
        </>
      )}
      <button onClick={handleClick}>Buscar Smartphone</button>
    </div>
  )
}

export default App


