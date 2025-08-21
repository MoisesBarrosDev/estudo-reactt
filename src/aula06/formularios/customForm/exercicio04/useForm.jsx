import { useState } from 'react'

const types = {
  email: {
    regex: /^\S+@\S+\.\S+$/,
    mensagem: 'Preencha um email válido!',
  }
}
const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues)
  const [error, setError] = useState({})

  const validateCampo = (name, value) => {
    if (value === '') {
      setError(prev => ({ ...prev, [name]: 'Preencha um valor!' }))
      return false
    }

    if (types[name]) {
      if (!types[name].regex.test(value)) {
        setError(prev => ({ ...prev, [name]: types[name].mensagem }))
        return false
      }
      setError(prev => ({ ...prev, [name]: 'Email válido!' }))
      return true
    }
    setError(prev => ({ ...prev, [name]: 'Campo preenchido corretamente!' }))

  }

  function handleChange({ target }) {
    const { name, value } = target
    setValues({ ...values, [name]: value })
    validateCampo(name, value)
  }

  const resetForm = () => {
    setValues(initialValues);
    setError({});
  };

  return {
    values,
    error,
    handleChange,
    resetForm,
    setValues, // caso precise alterar valores manualmente
    setError, // caso precise alterar erros manualmente
  };
}

export default useForm
