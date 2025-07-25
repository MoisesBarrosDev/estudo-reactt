import { useState } from "react"


const ComponenteB = () => {
  const [count, setCount] = useState(0)

  function sum() {
    setCount(c => c + 1)
  }

  if (count === 10) {
    throw new Error('Erro forçado!')
  }
  return (
    <div>
      <p>Esse é o componente B. Contador: {count}</p>
      <button onClick={sum}>Contar até dar erro</button>
    </div>
  )
}

export default ComponenteB
