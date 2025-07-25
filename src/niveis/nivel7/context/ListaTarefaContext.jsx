// Aqui importamos do react 1 hook. Criamos 1 contexto e pegamos o estado useState
import { createContext, useState } from "react";

const tarefasInicias = [
  { id: 1, texto: 'correr', feito: false },
  { id: 2, texto: 'fazer comida', feito: false },
  { id: 3, texto: 'tomar banho', feito: false },
  { id: 4, texto: 'escovar os dentes', feito: false },
  { id: 5, texto: 'arrumar a casa', feito: false },
  { id: 6, texto: 'estudar', feito: false },
  { id: 7, texto: 'ler um livro', feito: false },
  { id: 8, texto: 'limpar a geladeira', feito: false },

]

// Criamos uma variavel e exportamos ela, o nome da varivael pode conter oque ela vai receber mais com o Context no final dela 
// para uma melhor leitura. Colocamos ela Pra receber a criação de contexto que importamos lá no inicio.
export const listaTarefaContext = createContext()




const ListaProvider = ({ children }) => {
  const [tarefas, setTarefas] = useState(tarefasInicias)

  const removeTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
  }

  return (
    <listaTarefaContext.Provider value={{ tarefas, removeTarefa }}>
      {children}
    </listaTarefaContext.Provider>
  )
}

export default ListaProvider

