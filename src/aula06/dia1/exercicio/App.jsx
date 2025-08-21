
// 📌 Exercício – Dia 1
// Objetivo:
// Criar um formulário simples com nome e email, onde os valores digitados aparecem em tempo real na tela.

// Passos:

// Crie um componente Form com:

// Um input para nome

// Um input para email

// Use useState para controlar os valores.

// Mostre na tela em tempo real o que está sendo digitado.

// Ao enviar (onSubmit), previna o refresh da página e mostre os dados no console.
import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const App = () => {
  //  Aqui criamos dois estados para guardar os valores digitados no form:
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  // useState('') -> o valor inicial é vazio, porque o input começa sem nada digitado.

  function handleSubmit(event) {
    //  Previne o comportamento padrão do form (recarregar a página).
    event.preventDefault()

    //  Mostra no console os valores que estavam no estado quando o usuário clicou em enviar.
    console.log(`Formulario enviado! nome cliente: ${nome}, email cliente: ${email}.`)

     //  Limpa os campos depois de enviar o formulário
    setNome('')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label='nome' type='text' name='nome' setValue={setNome} value={nome} />
      <Input label='email' type='email' name='email' setValue={setEmail} value={email} required />
      {nome && <div>Nome do cliente: {nome}</div>}
      {email && <div>Email digitado: {email}</div>}
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default App
