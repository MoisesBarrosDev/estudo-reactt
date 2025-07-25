
import { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const { dados } = useContext(GlobalContext)
  console.log(dados)
  if (dados === null) return null

  return (
    <div>
      produtos: <ul>
        {dados.map((produto, index) => (
          <li key={index}>{produto.nome}</li>
        ))}
      </ul>


    </div>
  )
}

export default Produto
