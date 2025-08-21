// Exercício 3 – Nome + E-mail
// Adicionar um campo e-mail.

// O e-mail deve ser validado por regex simples (ex.: ^\S+@\S+\.\S+$).

// Mostrar mensagens de erro separadas para cada campo.

// Botão "Enviar" só habilita se os dois campos estiverem válidos.




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

      <Input
        id='email'
        label='Email'
        name='email'
        value={values.email || ''}
        onChange={handleChange}
        type="email"
      />
      {mensagem.email&& (
       <p style={{color: mensagem.email==='Usuário valido!'?'green':'red'}}>{mensagem.email}</p>
      )}
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default App
