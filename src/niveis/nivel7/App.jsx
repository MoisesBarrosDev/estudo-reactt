// 📘 Etapa 1 – Exercício com listas (foco em useState, map, filter)
// 🎯 Objetivo: Criar uma lista de tarefas onde o usuário pode adicionar e remover itens.

// 🧪 Exercício – Lista de tarefas simples
// Regras:
// Use useState para armazenar uma lista de tarefas.

// Cada tarefa deve ter id e texto.

// Mostre as tarefas com .map().

// Adicione um botão “Remover” em cada item que use .filter() para excluir do estado.

// Separe em componentes (por exemplo: App, FormularioTarefa, ListaTarefas, TarefaItem).



import Title from './niveis/nivel7/componentes/Title'
import {ListaProvider} from './ListaTarefaContext'
import ListaTarefa from './ListaTarefa'
const App = () => {
  return (
    <>
      <Title>Lista de tarefa</Title>

      <ListaProvider>
        <ListaTarefa />
      </ListaProvider>
    </>
  )
}

export default App
