import { useContext } from "react"
import { GlobalContext } from "./GlobalContext"

// useContext
// O useContext é o hook que deve ser utilizado para consumirmos o contexto e termos assim acesso aos dados de value.
//  Devemos passar o contexto criado como seu agumento.
const Produto = () => {
  const { count, setCount } = useContext(GlobalContext)

  const handleClick = () => {
    setCount(c => c + 1)
  }

  return (
    <div style={{ display: 'flex', gap: '.5rem' }}>
      Produto: {count}
      <button onClick={handleClick}>Incremente</button>
    </div>
  )
}

export default Produto
