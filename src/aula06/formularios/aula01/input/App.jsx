
// Formulários

// Input

// Reatividade
// Para criarmos campos de formulário reativos, devemos definir o estado para o value e a função atualizadora para o onChange.


import React, { useState } from 'react'

const App = () => {
  //   Múltiplos Campos
  // Podemos definir um estado para cada campo.
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
  }

  function handleChange(event) {
    setNome(event.target.value)
  }


  function handleEmail(event) {
    setEmail(event.target.value)
  }
  return (
    // Form

    // No form controlamos o que acontece ao enviar o mesmo, por isso definimos uma função para lidar com o onSubmit.
    //  O preventDefault() irá prevenir o comportamento padrão, que seria de atualizar a página,
    //     enviando uma requisição para o que estiver em action = "".
    < form onSubmit={handleSubmit} >
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        value={nome}
        onChange={handleChange}
        id='nome'
        name='nome'
      />

      <label htmlFor="email">Email</label>
      <input
        id='email'
        type="email"
        name='email'
        value={email}
        onChange={handleEmail}
      />
      {/* Não precisa colocar um evento no botão, pois já tem evento no formulario e ele ira enviar. */}
      <button>Enviar</button>
    </form >
  )
}

import { useState } from 'react'

const App2 = () => {
  // ✅ Criamos um estado único em formato de objeto
  // Cada propriedade representa um campo do formulário
  const [form, setForm] = useState({
    nome: '',
    email: ''
  })

  // ✅ Função que será chamada ao enviar o formulário
  function handleSubmitt(event) {
    // Previne o comportamento padrão de atualizar a página
    event.preventDefault()

    // Aqui você pode enviar os dados para uma API, por exemplo
    console.log(form) // Mostra o objeto com os valores dos campos
  }

  // ✅ Função genérica para lidar com mudanças em qualquer input
  function handleChangee({ target }) {
    // Desestruturamos "name" e "value" do input que foi alterado
    const { name, value } = target

    // Atualizamos o campo correspondente no objeto form
    // Usamos o formato "prev =>" para garantir que estamos usando a versão mais recente do estado
    setForm((prevForm) => ({
      ...prevForm,         // copiamos os campos anteriores
      [name]: value        // atualizamos apenas o campo que mudou
    }))
  }

  return (
    // ✅ Formulário controlado: o React controla os valores dos inputs
    <form onSubmit={handleSubmitt}>
      
      {/* Campo de nome */}
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        value={form.nome}           // Valor vem do estado form.nome
        onChange={handleChangee}    // Atualiza o estado quando digita
        id='nome'
        name='nome'                 // Esse "name" é essencial para identificar o campo no handleChange
      />

      {/* Campo de email */}
      <label htmlFor="email">Email</label>
      <input
        id='email'
        type="email"
        name='email'                // Também precisa estar igual à chave no estado
        value={form.email}          // Valor vem do estado form.email
        onChange={handleChangee}    // Atualiza o estado ao digitar
      />

      {/* Botão que envia o formulário */}
      <button>Enviar</button>
    </form>
  )
}


export { App, App2 }
