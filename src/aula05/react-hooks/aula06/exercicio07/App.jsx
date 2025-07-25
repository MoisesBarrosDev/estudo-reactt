// ✅ Exercício 7 – Hook para toggle com contador (useToggleCounter)
// 🎯 Objetivo:
// Criar um custom hook que combine dois comportamentos:

// Um booleano que alterna entre true e false (toggle).

// Um contador que incrementa toda vez que o toggle muda para true.

// ✅ Requisitos:
// Receber um estado inicial para o toggle (boolean).

// Retornar:

// O valor atual do toggle,

// O contador atual,

// E uma função para alternar o toggle (que incrementa o contador só se o toggle mudar para true).


import React from 'react'
import useToggleCounter from './useToggleCounter'

const App = () => {
  const [toggle, count, handleClick] = useToggleCounter()
  return (
    <div>
      <p>Ativo: {toggle ? 'sim' : 'não'}</p>
      <p>Contador: {count}</p>
      <button onClick={handleClick}>Alternar</button>
    </div>
  )
}

export default App

