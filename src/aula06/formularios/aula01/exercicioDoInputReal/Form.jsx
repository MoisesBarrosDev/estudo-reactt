import { useEffect, useState } from "react"
import axios from "axios"
import Button from "./Button"

const Form = () => {
  const [mensagem, setMensagem] = useState(null)
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: ''
  })

  const createPost = async () => {
    try {
      await axios.post('https://ranekapi.origamid.dev/json/api/usuario', form)
      setMensagem('Formulario cadastrado na Api!')
    } catch (error) {
      // console.log('Ocorreu um erro ao adicionar dados na API!', error)
      setMensagem('Erro ao enviar o Formulário!')
    }
  }


  function handleSubmit(event) {
    event.preventDefault()
    if (form.nome === '' || form.email === ''
      || form.senha === '' || form.cep === ''
      || form.rua === '' || form.numero === ''
      || form.bairro === '' || form.cidade === ''
      || form.cidade === '') {
      return alert('Complete os dados!')
    }
    createPost()
    setForm({
      nome: '',
      email: '',
      senha: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: ''
    })
  }

  function handleonChange({ target }) {
    const { name, value } = target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  useEffect(() => {
    if (mensagem) {
      const timeout = setTimeout(() => {
        setMensagem(null)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [mensagem])

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label htmlFor="nome">nome</label>
      <input type="text" name="nome" id="nome" value={form.nome} onChange={handleonChange} />
      <label htmlFor="email">email</label>
      <input type="email" name="email" id="email" value={form.email} onChange={handleonChange} />
      <label htmlFor="senha">senha</label>
      <input type="password" name="senha" id="senha" value={form.senha} onChange={handleonChange} />
      <label htmlFor="cep">cep</label>
      <input type="text" name="cep" id="cep" value={form.cep} onChange={handleonChange} />
      <label htmlFor="rua">rua</label>
      <input type="text" name="rua" id="rua" value={form.rua} onChange={handleonChange} />
      <label htmlFor="numero">numero</label>
      <input type="number" name="numero" id="numero" value={form.numero} onChange={handleonChange} />
      <label htmlFor="bairro">bairro</label>
      <input type="text" name="bairro" id="bairro" value={form.bairro} onChange={handleonChange} />
      <label htmlFor="cidade">cidade</label>
      <input type="text" name="cidade" id="cidade" value={form.cidade} onChange={handleonChange} />
      <label htmlFor="estado">estado</label>
      <input type="text" name="estado" id="estado" value={form.estado} onChange={handleonChange} />
      {mensagem && <span>{mensagem}</span>}
      <div>
        <Button type='submit'>Enviar Formulario</Button>
      </div>
    </form>
  )
}

export default Form
