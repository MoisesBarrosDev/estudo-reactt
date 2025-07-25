import { useContext } from "react"
import { listaTarefaContext } from "../context/ListaTarefaContext"
const ButtonItem = ({ id, feito, }) => {
  const { removeTarefa } = useContext(listaTarefaContext)
  function handleClick() {
    removeTarefa(id)
  }
  return (
    <>
      {!feito && (
        <button style={{ margin: '.5rem' }} onClick={handleClick}>Apagar Tarefa</button>
      )}
    </>
  )
}

export default ButtonItem
