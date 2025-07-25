import { useState } from 'react'
import App from './App'

const Root = () => {
  const [mostrar, setMostrar] = useState(true)

  return (
    <div>
      <button onClick={() => setMostrar(false)}>Desmontar App</button>
      {mostrar && <App />}
    </div>
  )
}

export default Root
