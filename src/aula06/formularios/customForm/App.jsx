

import Input from './Input'
import useForm from './aula06/formularios/customForm/useForm'
import Button from './Button'

const App = () => {
  const { values, setValues, mensagem, setMensagem, handleChange } = useForm()

  function handleSubmit(e) {
    e.preventDefault()
    setValues({})
    setMensagem({})
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input type='text' label='nome' id='nome' name='nome' value={values.nome || ''}  // valor do campo
      onChange={handleChange} />
      {mensagem.nome && (
        <p style={{ color: mensagem.nome === 'Usuário válido!' ? 'green' : 'red' }}>{mensagem.nome}</p>
      )
      }
      <Button type='submit'>Enviar</Button>
    </form>
  )
}

export default App
