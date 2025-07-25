// 🥚 Nível 1 – Apenas useState
// Exercício 1: Botão que troca entre “Ligado” e “Desligado”
// Crie um botão que muda seu texto entre Ligado e Desligado a cada clique.

import { useState } from "react"

const App = () => {
  const [ligado, setLigado] = useState(false)
  function handleClick() {
    setLigado(!ligado)
  }
  return (
    <div>
      {/* Vai cair no 'Desligado', pois o estado inicial dele é false. */}
      <button onClick={handleClick}>{ligado ? 'Ligado' : 'Desligado'}</button>
    </div>
  )
}

export default App
