import { useState } from 'react'

const useContador = (inicial = 0) => {
  const [contador, setContador] = useState(inicial)

  function incrementar() {
    setContador(c => c + 1)
  }
  return [contador, incrementar]
}

export default useContador
