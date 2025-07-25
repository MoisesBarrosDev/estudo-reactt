import { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const LimparLista = () => {
  const {limparLista} = useContext(GlobalContext)
  return (
    <>
      <button onClick={limparLista}>Limpar</button>
    </>
  )
}

export default LimparLista
