// Validação

// onBlur
// O onBlur é ativado sempre que o campo fica fora de foco, momento perfeito para validarmos o dado do campo.
// A validação pode ser feita com JavaScript utilizando REGEX.

import Input from './form/Input'
import { useState } from 'react'
const App = () => {
  // Estado para armazenar o valor do input
  const [cep, setCep] = useState('')

  // Estado para armazenar mensagens de erro, null significa "sem erro"
  const [error, setError] = useState(null)

  // -------------------- FUNÇÃO DE VALIDAÇÃO --------------------
  function validateCep(value) {
    // 1. Se estiver vazio, retorna erro
    if (value.length === 0) {
      setError('Preencha um valor')
      return false

    // 2. Se não passar na REGEX, retorna erro
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      // REGEX: 
      // ^ = início da string
      // \d{5} = 5 dígitos
      // -? = hífen opcional
      // \d{3} = 3 dígitos
      // $ = fim da string
      setError('Preencha um CEP válido')
      return false

    // 3. Caso contrário, remove erro e retorna true
    } else {
      setError(null)
      return true
    }
  }

  // -------------------- EVENTO onBlur --------------------
  function onBlur({ target }) {
    // onBlur = acontece quando o input perde o foco (o usuário clica fora do campo)
    // É o momento ideal para validar, para não ficar mostrando erro enquanto o usuário digita
    validateCep(target.value)
  }

  // -------------------- EVENTO onChange --------------------
  function handleChange({ target }) {
    // Se já existe erro, valida novamente enquanto digita
    if (error) validateCep(target.value)

    // Atualiza o estado do CEP a cada digitação
    setCep(target.value)
  }

  // -------------------- EVENTO onSubmit --------------------
  function handleSubmit(event) {
    // Evita recarregar a página
    event.preventDefault()

    // Valida o CEP antes de enviar
    if (validateCep(cep)) {
      console.log('enviou')
    } else {
      console.log('não enviar')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        label='CEP'
        id='cep'
        onChange={handleChange}  // Atualiza estado a cada digitação
        value={cep}              // Input controlado
        onBlur={onBlur}          // Valida quando sai do campo
        placeholder='00000-000'
      />

      {/* Exibe a mensagem de erro, se existir */}
      {error && <p>{error}</p>}

      <button>Enviar</button>
    </form>
  )
}

export default App