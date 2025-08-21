// 🧠 Exercício – Validação de campo de senha
// Objetivo:
// Criar um formulário com um campo de senha, que:

// Só mostra erro quando o usuário sair do input (onBlur).

// A senha deve conter pelo menos 8 caracteres.

// O formulário só é enviado se a senha for válida.

// Mostra o erro em vermelho, abaixo do campo.


import React, { useState } from 'react'

const App = () => {
  const [senha, setSenha] = useState('')
  const [errorSenha, setErrorSenha] = useState('')
  function handleChange({ target }) {
    setSenha(target.value)
  }

  function validateSenha({ target }) {
    if (target.value.length < 8) {
      setErrorSenha('Digite uma senha válida!')
    } else {
      setErrorSenha('')
    }
  }


  function handleSubmit(event) {
    event.preventDefault()
    if (!errorSenha && senha !== '') {
      alert('Senha enviado com sucesso!')
      setSenha('')
    }else{
      alert('Error valor minimo de 8 caracteres!')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="senha">Senha</label>
      <input type="password" name="senha" id="senha" value={senha} onChange={handleChange} onBlur={validateSenha} />
      {errorSenha&& <p style={{color:'red'}}>{errorSenha}</p>}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App
