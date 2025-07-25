// 🧪 Exercício 3: Formulário com 3 campos usando um objeto
// Crie um formulário com:

// nome

// idade

// cidade

// Use um único estado com objeto.
// Mostre o objeto completo abaixo do formulário conforme o usuário digita.

import { useState } from 'react'

const App = () => {
  const [form, setForm] = useState({
    nome: '',
    idade: '',
    cidade: ''
  })

  function handleInput({ target }) {
    const { name, value } = target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  function handleForm(event) {
    event.preventDefault()
    setForm({
      nome: '',
      idade: '',
      cidade: ''
    })
  }
  return (
    <form onSubmit={handleForm}>
      <label htmlFor="nome">nome</label>
      <input type="text" id='nome' value={form.nome} name='nome' onChange={handleInput} />
      <label htmlFor="idade">idade</label>
      <input type="number" id='idade' value={form.idade} name='idade' onChange={handleInput} />
      <label htmlFor="cidade">cidade</label>
      <input type="text" id='cidade' value={form.cidade} name='cidade' onChange={handleInput} />
      <div>Seu nome é: {form.nome}</div>
      <div> tem {form.idade} anos.</div>
      <span>Mora na cidade: {form.cidade}</span>

      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default App
