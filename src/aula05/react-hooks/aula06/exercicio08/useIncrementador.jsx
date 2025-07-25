

import React, { useMemo, useState } from 'react'

const useIncrementador = (value = 10) => {
  const [valor, setValor] = useState(5)

  function incrementar() {
    setValor(c => c + value)
  }

  return [valor, incrementar]
}

export default useIncrementador
