// 🧪 Exercício 2: Limpar campos após envio
// Crie um formulário com nome e email.
// Quando clicar em "Enviar", mostre os dados no console e limpe os campos.


import React, { useState } from 'react'

const App = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')


  function handleSubmit(event) {
    event.preventDefault()
    console.log('nome:', nome)
    console.log('email:', email)
    setNome('')
    setEmail('')

 }

  function handleNome(event) {
    setNome(event.target.value)

  }

  function handleEmail(event) {
    setEmail(event.target.value)

  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">nome</label>
      <input type="text" id='nome' value={nome} onChange={handleNome} />
      <label htmlFor="email">email</label>
      <input type="email" id='email' value={email} onChange={handleEmail} />
      <button>Submit</button>
    </form>
  )
}

export default App
