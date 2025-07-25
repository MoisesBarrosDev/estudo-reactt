// 🔹 Exercício 2 – Checkbox múltiplo com array
// "Quais cores você gosta?"

// Usar value + checked + target.checked

// Estado: array de strings

import React, { useState } from 'react'

const App = () => {
  const [cores, setCores] = useState([])

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value])
    } else {
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }

  function handleColor(cor) {
    return cores.includes(cor)
  }
  return (
    <form>
      <h2>Quais cores você gosta?</h2>
      <label>
        <input type="checkbox" value='vermelho' checked={handleColor('vermelho')} onChange={handleChange} />
        vermelho
      </label>
      <label>
        <input type="checkbox" value='rosa' checked={handleColor('rosa')} onChange={handleChange} />
        rosa
      </label>
      <label>
        <input type="checkbox" value='preto' checked={handleColor('preto')} onChange={handleChange} />
        preto
      </label>
      <label>
        <input type="checkbox" value='azul'  checked={handleColor('azul')}onChange={handleChange} />
        azul
      </label>
    </form>
  )
}

export default App
