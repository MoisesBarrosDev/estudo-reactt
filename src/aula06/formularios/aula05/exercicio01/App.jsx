// 🔹 Exercício 1 – Checkbox simples (booleano)
// "Aceito os termos de uso"

// Usar checked + target.checked

// Estado: booleano

import React, { useState } from 'react'

const App = () => {
  const [termos, setTermos] = useState(false)

  function handleChange({ target }) {
    setTermos(target.checked)
    console.log(target.checked)
  }
  return (
    <form>
      <label>
        <input type="checkbox" checked={termos} onChange={handleChange}/>
        Aceito os termos de uso
      </label>
    </form>
  )
}

export default App
