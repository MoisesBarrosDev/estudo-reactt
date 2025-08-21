// 📌 Exercício – Dia 2
// Objetivo:
// Criar um formulário de cadastro simples com vários campos, todos controlados por um único estado (objeto).

// Campos obrigatórios:

// Nome

// Email

// Senha

// Regras:

// Usar um único useState para armazenar todos os valores (objeto com { nome, email, senha }).

// Atualizar o estado dinamicamente no onChange.

// Mostrar os valores digitados em tempo real abaixo do form.

// Ao enviar (onSubmit), previna o refresh e mostre no console o objeto completo.

import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const App = () => {
  // Um único estado para todo o formulário (objeto)
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: ''
  })

   // Atualiza só a chave do objeto que mudou
   function handleChange({ target }) {
    // Pega o nome e o valor de cada input que está dento do target
     const { name, value } = target
     // ...form → copia o estado antigo
     // [name]: value → sobrescreve apenas o campo digitado
    setForm({ ...form, [name]: value })
  }

  // Previne o refresh e limpa os campos assim que o formulario é enviado
  function handleSubmit(event) {
    event.preventDefault()
    console.log('formulario enviado!', form)
    setForm({ nome: '', email: '', senha: '' })
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input type='text' label='nome' id='nome' name='nome' onChange={handleChange} value={form.nome} />
      <Input type='email' label='email' id='email' name='email' onChange={handleChange} value={form.email} required />
      <Input type='password' label='senha' id='senha' name='senha' onChange={handleChange} value={form.senha} required />
      {form.nome ? <div>Nome do cliente: {form.nome}</div> : <div>Nenhum nome digitado!</div>}
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default App
