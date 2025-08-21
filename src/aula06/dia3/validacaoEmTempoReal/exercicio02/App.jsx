// 📝 Exercício: Validação de Usuário em Tempo Real
// Crie um formulário simples com um campo "Nome de usuário".
// A validação deve acontecer enquanto o usuário digita (onChange), usando .test() com uma expressão regular que siga as regras:

// Regras do nome de usuário:

// Deve começar com uma letra (maiúscula ou minúscula).

// Pode conter letras, números, pontos (.) ou underscores (_).

// Deve ter entre 4 e 12 caracteres.

// Comportamento esperado:

// Se o valor estiver válido → borda verde + mensagem "Usuário válido ✅".

// Se o valor estiver inválido → borda vermelha + mensagem "Usuário inválido ❌".

// Campo vazio → sem mensagem e sem cor.

import React, { useState } from 'react'

const App = () => {
  const [nome, setNome] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [colorBorder, setColorBorder] = useState('red')

  // a regex fora para evitar que seja recriada toda vez que o usuario digitar. Evitando um gasto de memoria  desnecessario.
  const validateUser = /^[A-Za-z][A-Za-z0-9._]{3,11}$/

  function handleChange({ target }) {
    const value = target.value
    setNome(value)
    if (value === '') {
      setMensagem('')
      setColorBorder('')
    } else if (validateUser.test(target.value)) {
      setMensagem("Usuário inválido ❌")
      setColorBorder('red')
    } else {
      setMensagem("Usuário válido ✅")
      setColorBorder('green')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    alert(`Usuário enviado com sucesso!`)
    setMensagem('')
    setColorBorder('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Usuario</label>
      <input type="text" name="name" id="name" value={nome} onChange={handleChange} />
      {mensagem && <p style={{ color: colorBorder }}>{mensagem}</p>}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App
