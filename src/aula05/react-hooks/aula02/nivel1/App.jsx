// 📘 Etapa 1 – Introdução ao useEffect
// 🧪 Exercício 1: Executar algo ao carregar a página
// Objetivo: Usar useEffect para exibir uma mensagem no console quando o componente for montado.

// jsx
// Copiar
// Editar
// // Exiba "Componente montado" no console quando o componente for carregado.
// Instruções:

// Crie um componente com useEffect.

// No useEffect, use console.log("Componente montado").

// Adicione um botão só para ter algo na tela.


import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
  console.log('Componente montado')
  },[])
  return (
    <div>
      <button>Clicar</button>
    </div>
  )
}

export default App
