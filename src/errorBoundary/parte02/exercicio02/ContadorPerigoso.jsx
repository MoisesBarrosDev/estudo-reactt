import { useState } from "react"


const ContadorPerigoso = () => {
  const [count, setCount] = useState(0)

  function sum() {
    setCount(c => c + 1)
  }

  if (count === 5) {
    throw new Error('O contador bugou ao chegar em 5!')
  }
  return (
    <>
      <span>Valor adicionado: {count}</span>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={sum}>Contador</button>
      </div>
    </>
  )
}

export default ContadorPerigoso
