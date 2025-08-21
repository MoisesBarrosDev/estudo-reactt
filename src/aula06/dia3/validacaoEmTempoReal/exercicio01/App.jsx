// 📝 Exercício – Validação de CEP em tempo real
// Objetivo:
// Criar um campo de entrada para o usuário digitar um CEP no formato 12345-678 e validar enquanto ele digita,
//  exibindo uma mensagem de "Válido" ou "Inválido" abaixo do input.

// Regras:

// O CEP obrigatoriamente deve ter:

// 5 dígitos

// Um hífen (-)

// 3 dígitos

// A validação deve ser em tempo real, ou seja, sempre que o usuário digitar algo, a checagem deve rodar.

// Se for válido → a mensagem aparece em verde.

// Se for inválido → a mensagem aparece em vermelho.

import React, { useState } from 'react'

const App = () => {
  const [cep, setCep] = useState('')
  const [mensagem, setMensagem] = useState(null)
  const [corMensagem, setCorMensagem] = useState('red')
  function handleChange({ target }) {
    const value = target.value
    setCep(value)
    if (value.length === 0) {
      setMensagem('Preencha um valor!')
      setCorMensagem('red')
    } else if (!/^\d{5}-\d{3}$/.test(value)) {
      setMensagem('Digite um cep válido!')
      setCorMensagem('red')
    } else {
      setMensagem('Cep valido!')
      setCorMensagem('green')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    alert(`CEP enviado ${cep}`)
    setCep(' ')
    setMensagem('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cep">Cep</label>
      <input type="text" name="cep" id="cep" placeholder='Digite seu Cep (Ex: 12345-678)' value={cep} onChange={handleChange} />
      {mensagem && <p style={{ color: corMensagem }}>{mensagem}</p>}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App
