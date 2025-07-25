import  { useState } from 'react'

const useContador = () => {
  const [contador, setContador] = useState(0)

  function incrementar() {
    setContador(c => c + 1)
  }
  return [contador, incrementar]
}

export default useContador
