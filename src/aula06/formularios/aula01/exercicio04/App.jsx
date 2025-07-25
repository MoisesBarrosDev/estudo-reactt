// 🧪 Exercício 4: Validar antes de enviar
// Adicione ao exercício anterior:

// Verifique se todos os campos estão preenchidos.

// Se algum estiver vazio, mostre um alerta e não envie.

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
    if (form.nome === '' || form.idade === '' || form.cidade === ''){
     return alert('Erro! Complete os dados!')
    }
      setForm({
        nome: '',
        idade: '',
        cidade: ''
      })
  }
  return (
    <form onSubmit={handleForm}>
      <label htmlFor="nome">nome</label>
      <input type="text" id='nome' value={form.nome} name='nome'  onChange={handleInput} />
      <label htmlFor="idade">idade</label>
      <input type="number" id='idade' value={form.idade} name='idade'  onChange={handleInput} />
      <label htmlFor="cidade">cidade</label>
      <input type="text" id='cidade' value={form.cidade} name='cidade'  onChange={handleInput} />
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
