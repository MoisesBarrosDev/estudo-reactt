import { useState } from 'react'

const useForm = () => {
  const [values, setValues] = useState({})
  const [mensagem, setMensagem] = useState({})

  function handleChange({ target }) {
    const { name, value } = target
    setValues({ ...values, [name]: value })

    if (value === '') return setMensagem({ ...mensagem, [name]: 'Preencha um valor!' })
    if (value !== '') return setMensagem({ ...mensagem, [name]: '' })
  }

  return { values, setValues, mensagem, setMensagem, handleChange, name }
}

export default useForm
