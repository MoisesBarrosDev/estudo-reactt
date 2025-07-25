// Formulários
// Select

// Select
// O value e onChange são definidos no select. Para definir um valor inicial, coloque o mesmo no useState.


import React, { useState } from 'react'

const App = () => {
  const [cor, setCor] = useState('selecione')
  function handleChange(event) {
    setCor(event.target.value)
  }
  return (
    <form>
      <select id="cores" value={cor} onChange={handleChange}>
         {/* Selecione 
        Defina o primeiro valor como disabled e com uma string pura, assim o usuário terá que selecionar um valor. */}
        <option value="selecione" disabled>Selecione</option>
        <option value="azul">Azul</option>
        <option value="vermelho">Vermelho</option>
        <option value="preto">Preto</option>

      </select>
      <p>Cor escolhida: {cor}</p>
    </form>
  )
}

export default App
