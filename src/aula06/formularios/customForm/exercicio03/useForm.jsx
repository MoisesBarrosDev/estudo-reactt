import { useState } from 'react'

const validateEmail = /^\S+@\S+\.\S+$/
const useForm = () => {
  const [values, setValues] = useState({})
  const [mensagem, setMensagem] = useState({})

  function handleChange({ target }) {
    const { name, value } = target
    setValues({ ...values, [name]: value })

    if (value === '') return setMensagem({ ...mensagem, [name]: 'Preencha um valor!' })

    if (name === 'email') {
      if (!validateEmail.test(value)) {
        setMensagem({ ...mensagem, [name]: 'Preencha um Email válido!' })
        return
      }
    }

    return setMensagem({ ...mensagem, [name]: 'Usuário valido!' })

  }

  return { values, setValues, mensagem, setMensagem, handleChange }
}

export default useForm
