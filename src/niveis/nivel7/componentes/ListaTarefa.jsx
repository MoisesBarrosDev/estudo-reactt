import { useContext } from "react"
import { listaTarefaContext } from "../context/ListaTarefaContext"
import UlItem from "./UlItem"
import SpanItem from './SpanItem'
import ButtonItem from "./ButtonItem"

const ListaTarefa = () => {
  const { tarefas } = useContext(listaTarefaContext)

  return (

    <UlItem>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} style={{ listStyle: 'none' }}>
          <SpanItem>
            {tarefa.texto}
          </SpanItem>
            <ButtonItem id={tarefa.id} feito={tarefa.feito}/>
        </li>
      ))}
    </UlItem>

  )
}

export default ListaTarefa
