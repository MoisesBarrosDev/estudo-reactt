
import { useState } from 'react'

const useToggleCounter = () => {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)

  
  function handleClick() {
    const proximoValor = !toggle
    proximoValor && setCount(c => c + 1)
    setToggle(proximoValor)
  }
  return [toggle,count, handleClick]
}

export default useToggleCounter
