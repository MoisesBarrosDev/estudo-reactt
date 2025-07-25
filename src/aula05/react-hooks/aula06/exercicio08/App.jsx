// ✅ Exercício 8 – useIncrementador
// 🎯 Objetivo:
// Criar um hook que permite incrementar um número com um valor específico.

// Requisitos:

// O hook deve receber dois parâmetros:

// O valor inicial do contador.

// O quanto deve ser incrementado a cada clique.

// Retornar o valor atual e a função de incremento.


import React from 'react'
import useIncrementador from './aula05/react-hooks/aula06/exercicio08/useIncrementador'

const App = () => {
  const [valor, incrementar] = useIncrementador()
  return (
    <div>
     <p>Valor: {valor}</p>
     <button onClick={incrementar}>Incremente</button>
    </div>
  )
}

export default App
