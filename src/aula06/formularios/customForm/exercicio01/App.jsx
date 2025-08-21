// Exercício: Validação em tempo real - Campo "Telefone"
// Objetivo:

// Criar um formulário com um campo de telefone.

// O telefone deve ser digitado no formato brasileiro: (99) 99999-9999

// Validar em tempo real conforme o usuário digita, mostrando mensagem:

// "Telefone válido ✅" em verde quando o formato estiver correto.

// "Telefone inválido ❌" em vermelho quando estiver errado.

// Sem mensagem se o campo estiver vazio.

// Ao enviar o formulário, limpar o campo e a mensagem, mas só permitir o envio se o telefone for válido.

import useForm from './useForm'
import Input from './Input'
import Button from './Button'

const App = () => {
  const { values, setValues, mensagem, setMensagem, handleChange } = useForm()

  function handleSubmit(e) {
    e.preventDefault()
    if (mensagem.cell === 'Telefone inválido ❌') return alert('Tente novamente!')
    setValues({})
    setMensagem({})

  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='tel'
        placeholder='(99) 99999-9999'
        name='cell'
        id='telefone'
        label='Telefone'
        value={values.cell || ''}  // a chave para criar o objeto, vai ser {cell:} ou {'':}
        onChange={handleChange}
      />
      {mensagem.cell && (
        <p style={{ color: mensagem.cell === 'Telefone inválido ❌' ? 'red' : 'green' }}>{mensagem.cell}</p>
      )}
      <Button type='submit'>Enviar</Button>
    </form>
  )
}

export default App

