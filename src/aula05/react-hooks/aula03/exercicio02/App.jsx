// 🧪 Exercício 2: Contar quantos renders o componente teve
// Objetivo: Usar useRef para contar quantas vezes o componente renderizou.

// O que fazer:
// Use useRef(0) para guardar o número de renders.

// Em cada render, aumente renderCount.current += 1.

// Mostre na tela o número de renders.


import { useRef } from 'react'

const App = () => {
  const renderCount = useRef(0)
  renderCount.current += 1

  const render = renderCount.current
  const vez = render === 1 ? 'vez' : 'vezes'
  
  return (
    <div>
      <p>Renderizou {render} {vez}.</p>
    </div>
  )
}

export default App
