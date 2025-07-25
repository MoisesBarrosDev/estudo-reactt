import { useState } from 'react'

const useFormInput = () => {
  const [valor, setNome] = useState('')

  function handleOnChange(event) {
    setNome(event.target.value)
  }
  return [valor, handleOnChange]
}

export default useFormInput
