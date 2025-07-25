// 🧠 Nível 5 – useEffect com dependências
// Objetivo geral: Compreender como usar o useEffect com dependências para reagir a mudanças de estado.

// 🚀 Primeiro exercício 5.1 – Atualizar o título da página
// 🎯 Objetivo:
// Aprender a usar o useEffect com dependências para executar efeitos colaterais sempre que o estado mudar.

// 📋 Instruções:

// Crie um estado contar, começando em 0.

// Mostre o valor de contar na tela.

// Adicione um botão que, ao ser clicado, incremente contar em 1.

// Use o useEffect para atualizar o título da aba (com document.title) com o valor atual de contar.

// Exemplo:

// Se contar for 2, o título da aba será Total: 2.


import React, { useEffect, useState } from 'react'

const App = () => {
  const [contar, setContar] = useState(0)

  useEffect(() => {
    document.title = `Incrementou ${contar}`
  }, [contar])

  const handleClick = () => {
    setContar(count => count + 1)
  }

  return (
    <div>
      <p>Incremetou: {contar}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  )
}

export default App
