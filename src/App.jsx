// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

import React, { useState } from 'react'

const App = () => {
  const [cores, setCores] = useState([])
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

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
      <h2>Qual cor você prefere?</h2>
      {coresArray.map((cor, id) => (
        <label key={id}>
          <input type="checkbox" value={cor} checked={handleColor(cor)} onChange={handleChange} />
          {cor}
        </label>
      ))}
      <span>Cores adicionadas na lista :</span>
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  )
}

export default App
