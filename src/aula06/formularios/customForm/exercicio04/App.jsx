// Exercício 4 – Nome + E-mail + Senha
// Adicionar um campo senha.

// A senha deve ter no mínimo 6 caracteres.

// O botão "Enviar" só habilita quando todos os campos estiverem válidos.

// Ao enviar, mostrar os dados no console.





import useForm from './useForm'
import Input from './Input'
import Button from './Button'

const App = () => {
  const { error, setError, resetForm, values, setValues, handleChange } = useForm()

  function handleSubmit(e) {
    e.preventDefault()
    if (values === '') {
      return alert('Preencha todos os campos corretamente!');
    }
    console.log(values)
    resetForm()
  }
  
 const todosValidos = 
  values.nome && 
  values.email && 
  error.nome === 'Campo preenchido corretamente!' && 
  error.email === 'Email válido!';

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
      {error.nome && (
        <p style={{ color: error.nome === 'Campo preenchido corretamente!' ? 'green' : 'red' }}>{error.nome}</p>
      )}

      <Input
        id='email'
        label='Email'
        name='email'
        value={values.email || ''}
        onChange={handleChange}
        type="email"
      />
      {error.email && (
        <p style={{ color: error.email === 'Email válido!' ? 'green' : 'red' }}>{error.email}</p>
      )}

      <Button
        type='submit'
        // se não estiver tudo válido, desabilita o botão
        disabled={!todosValidos}>
        Submit
      </Button>
    </form>
  )
}

export default App
