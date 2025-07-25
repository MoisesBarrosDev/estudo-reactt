// Radio

// Radio
// No radio comparamos o valor selecionado com o valor do input, dentro do atributo checked. O que retornar true irá marcar o botão.

import React, { useState } from 'react'

const App = () => {
  const [produto, setProduto] = useState('')
  const [cor, setCor] = useState('')
  function handleChange(event) {
    setProduto(event.target.value)
  }
  return (
    <form>
      <h2>Produtos</h2>
      <label>
        {/* O atributo `name` agrupa os radios. Sem ele, seria possível marcar mais de um. */}
        <input type="radio" onChange={handleChange} name='produto' value='smartphone' />
        Smartphone
      </label>
      <label>
        <input type="radio" onChange={handleChange} name='produto' value='notebook' />
        Notebook
      </label>
      <div>
        Produto selecionado:
        <span>{produto}</span>
      </div>

      <h2>Cores</h2>
      <label>
        {/* Este radio será marcado se o valor do estado `cor` for igual ao value do input. */}
        <input type="radio" onChange={({ target }) => setCor(target.value)} value='azul' checked={cor === 'azul'} />
        azul
      </label>
      <label>
        <input type="radio" onChange={({ target }) => setCor(target.value)} value='preta' checked={cor === 'preta'} />
        preta
      </label>
      <div>
        cor selecionada:
        <span>{cor}</span>
      </div>
    </form>
  )
}

export default App
