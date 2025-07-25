// 🐣 Nível 2 – useState + múltiplos estados
// Exercício 2: Contador com reset
// Um botão que aumenta um número (+1) ao ser clicado.


// Outro botão que reseta o contador para zero.

import { useState } from "react"

const App = () => {
  const [contador, setContador] = useState(0)

  function countSum() {
    setContador(prev => prev + 1)
  }
  function resetSum() {
    setContador(0)
  }

  return (
    <div>
      <p>{contador}</p>
      <button style={{ margin: '.5rem' }} onClick={countSum}>Adicionar número</button>
      <button onClick={resetSum}>Resetar valor</button>
    </div>
  )
}

export default App
