// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

import React, { useState } from 'react'

const App = () => {
  const [cores, setCores] = useState([])
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  function handleChange({ target }) {
    // Se o checkbox foi marcado...
    if (target.checked) {
      // ...adiciona a nova cor ao array, mantendo as anteriores
      setCores([...cores, target.value])
      // se o valor não foi marcado
    } else {
      // ...adiciona a nova cor ao array, mantendo as anteriores
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }

  // Retorna true se a cor estiver selecionada (ativa no array cores)
  function selectColor(cor) {
    return cores.includes(cor)
  }

  return (
    <form>
      <h2>Qual cor você prefere?</h2>
      {coresArray.map((cor, id) => (
        <label key={id}>
          <input type="checkbox" value={cor} checked={selectColor(cor)} onChange={handleChange} />
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
