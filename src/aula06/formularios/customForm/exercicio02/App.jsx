// Exercício 2 – Nome obrigatório
// Criar um formulário com apenas um campo nome.

// Usar o useForm para controlar o valor e validar se o campo não está vazio.

// Mostrar uma mensagem de erro abaixo do input se o usuário tentar enviar vazio.

// Ao corrigir, o erro deve desaparecer automaticamente.


import useForm from './useForm'
import Input from './Input'
import Button from './Button'

const App = () => {
  const { mensagem, setMensagem, values, setValues, handleChange } = useForm()

  function handleSubmit(e) {
    e.preventDefault()
    // !values.nome => se o valor do campo for vazio(''), null, 0, false ou indefinido (undefined)
    if (!values.nome) return alert('Preencha um valor!!')
    setMensagem({})
    setValues({})
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        id='nome'
        label='Nome'
        name='nome'
        value={values.nome || ''}
        onChange={handleChange}
        type='text'
      />
      {mensagem.nome && (
        <p style={{ color: mensagem.nome === 'Usuário valido!' ? 'green' : 'red' }}>{mensagem.nome}</p>
      )}

      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default App
