// 🔰 Nível 1 – Inputs controlados com estados separados
// 🧪 Exercício 1: Nome completo
// Crie um formulário com dois campos:

// Primeiro Nome

// Sobrenome

// Mostre em tempo real o nome completo abaixo dos inputs.
// (Ex: digitando "Ana" e "Silva", mostre "Nome completo: Ana Silva")


import React, { useState } from 'react'

const App = () => {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobreNome] = useState('')


  function handleNome(event) {
    setNome(event.target.value)
  }

  function handleSobreNome(event) {
    setSobreNome(event.target.value)
  }
  return (
    <form>
      <label htmlFor="nome">nome</label>
      <input type="text" id='nome' name='nome' value={nome} onChange={handleNome} />
      <label htmlFor="sobrenome">sobrenome</label>
      <input type="text" id='sobrenome' value={sobrenome} onChange={handleSobreNome} />
      <span>Nome completo: {nome} {sobrenome}</span>
    </form>
  )
}

export default App
