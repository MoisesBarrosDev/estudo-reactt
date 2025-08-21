// 📝 Exercício – Validação de Username com onBlur
// Objetivo:
// Criar um input para Username que:

// Mostre uma mensagem de erro apenas quando o usuário sair do campo.

// O Username deve ter pelo menos 4 caracteres para ser válido.

// No onSubmit, se estiver tudo certo, mostrar um alert("Form enviado!").


import React, { useState } from 'react'

const App = () => {
  const [nome, setNome] = useState('')
  const [erroMenssage, setErroMenssage] = useState('')

  function validateUsername({ target }) {
    if (target.value.length < 4) {
      setErroMenssage('Digite um Username válido!')
    } else {
      setErroMenssage('')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!erroMenssage && nome !== '') {
      alert('Formulario enviado!')
    } else {
      alert('Corrija os dados antes de enviar!')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Username</label>
      <input type="text" name="nome" id="nome" value={nome} onChange={({ target }) => setNome(target.value)} onBlur={validateUsername} />
      {erroMenssage &&
        <p style={{ color: 'red' }}>{erroMenssage}</p>
      }
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App
