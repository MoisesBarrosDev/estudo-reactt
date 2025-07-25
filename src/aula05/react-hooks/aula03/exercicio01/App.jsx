// 🧪 Exercício 1: Dar foco no input após clicar no botão
// Objetivo: Usar useRef para focar automaticamente no input.


// O que fazer:
// Crie um input.

// Crie um botão.

// Ao clicar no botão, o input deve ganhar foco (.focus()).


import { useRef } from "react"


const App = () => {
  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.focus()
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Enviar</button>
    </div>
  )
}

export default App
