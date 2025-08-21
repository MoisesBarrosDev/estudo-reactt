// O mini-bônus de form que preparei pra você vai ter 3 campos diferentes. Apenas a regex pra você se organizar:


// Nome completo – deve conter nome e sobrenome:
// /^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)+$/


// Email – validação simples de email:
// /^\S+@\S+\.\S+$/


// Senha – mínimo 6 caracteres, pelo menos 1 letra e 1 número:
// /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

import Button from "./Button"
import Input from "./Input"
import useForm from "./useForm"



const App = () => {
  const { values, setValues, mensagem, setMensagem, handleChange, limparCampos } = useForm()

  function handleSubmit(e) {
    e.preventDefault()
    if (values === '') return alert('Dados Incompletos!')
    console.log(values)
    limparCampos()
  }


  const camposValidos =
    mensagem.nome === 'Nome válido!' &&
    mensagem.email === 'Email válido!' &&
    mensagem.senha === 'Senha válida!'

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id='nome'
        label='Nome'
        name='nome'
        type='text'
        placeholder="Ex: lucas silva"
        value={values.nome || ''}
        onChange={handleChange}
      />
      {mensagem.nome && (
        <span style={{ color: mensagem.nome === 'Nome válido!' ? 'green' : 'red' }}>{mensagem.nome}</span>
      )}

      <div style={{ marginTop: '1rem' }}>
        <Input
          id='email'
          label='Email'
          name='email'
          type='email'
          placeholder="EX: HHHH@gmail.com"
          value={values.email || ''}
          onChange={handleChange}
        />
        {mensagem.email && (
          <span style={{ color: mensagem.email === 'Email válido!' ? 'green' : 'red' }}>{mensagem.email}</span>
        )}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <Input
          id='senha'
          label='Senha'
          name='senha'
          type='password'
          placeholder="Digite sua senha"
          value={values.senha || ''}
          onChange={handleChange}
        />
        {mensagem.senha && (
          <span style={{ color: mensagem.senha === 'Senha válida!' ? 'green' : 'red' }}>{mensagem.senha}</span>
        )}
      </div>

      <Button type='submit' disabled={!camposValidos}>Submit</Button>
    </form>
  )
}

export default App
