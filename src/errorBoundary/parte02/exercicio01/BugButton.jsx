import { useState } from "react"

const BugButton = () => {
    const [deveFalhar, setDeveFalhar] = useState(false)
  
    if (deveFalhar) {
      throw new Error('Erro simulado!')
    }
  
    const handleClick = () => {
      setDeveFalhar(true)
    }
  return (
    <button onClick={handleClick}>Disparar Error</button>
  )
}

export default BugButton
