// 🧪 Exercício – Lista de livros favoritos com Context API
// 🎯 Objetivo:
// Criar um app com uma lista de livros favoritos.



// 🧩 Regras:
// Use useState para armazenar a lista de livros (cada livro tem id e titulo).

// Coloque o estado dos livros dentro de um Contexto (LivrosContext).

// Use filter para remover um livro da lista.

// Evite passar props entre componentes (use useContext).

// Mostre os livros em um componente separado (ListaLivros).

// Cada livro deve ter um botão "Remover".


import { LivrosProvider } from "./LivrosContext"
import ListaLivro from "./ListaLivro"

const App = () => {
  return (
    <LivrosProvider>
      <h1>Lista de livros</h1>
      <ListaLivro />
    </LivrosProvider>
  )
}

export default App
