
import { useState } from 'react'

const useToggle = () => {
  const [ativo, setAtivo] = useState(false)

  function alternar() {
    setAtivo(prev => !prev)
  }
  return [ativo, alternar]
}

export default useToggle
