// Exercício 1 – Validação de Nome Completo

// Campos: nomeCompleto

// Regras: Deve conter nome e sobrenome (mínimo 2 palavras).

// Regex:

// /^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)+$/


// Objetivo:
// Criar um custom hook useForm com validação em tempo real. O botão só pode habilitar quando válido.

import Button from './Button'
import Input from './Input'
import useForm from './useForm'

const App = () => {
  // dessestruturamos o custom hook useForm
  const { values, setValues, error, setError, handleChange, limparCampos } = useForm()

  // Criamos uma função handleSubmit contendo por parametro o e que significa event.
  function handleSubmit(e) {
    // usamos esse e para evitar que a pagina assim que o usuario der o submit recarregue.
    e.preventDefault()
    // colocamos uma condição por preocaução, caso o valor do formulario for string vazia para retornar um alerta.
    if (values === '') return alert('Preencha valores válidos!')
    // Aqui vai aparecer no console os dados que foram enviados, como objeto!
    console.log(values)
    // chamamos a função para limpar os campos.
    limparCampos()
  }

  // criamos uma variavel que contém uma validação.
  // verifica se o value existe e se o error.nome contém a mensagem 'Nome válido!'
  const validateCampo =
    values.nome &&
    error.nome === 'Nome válido!'

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        name='nome'
        id='nome'
        label='Nome'
        // esse value, ou vai começar com string vazias, ou com oque o usuario digitar.
        value={values.nome || ''}
        onChange={handleChange}
      />
      {/* error.nome existe? caso exista crie uma tag span */}
      {error.nome && (
        // o estilo da cor da span verifica se a mensagem de error é igual 'Nome válido' caso seja é grenn
        <span style={{ color: error.nome === 'Nome válido!' ? 'green' : 'red' }}>{error.nome}</span>
      )}
      <div>
        <Button
          type='submit'
          // se o campo não estiver válido desabilita o botão
          disabled={!validateCampo}
        >
          Submit
        </Button>

      </div>
    </form>
  )
}

export default App
