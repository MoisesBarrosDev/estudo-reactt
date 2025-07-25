import { createContext, useState } from "react";

const livrosInicias = [
  { id: 1, titulo: "Dom Casmurro" },
  { id: 2, titulo: "O Pequeno Príncipe" },
  { id: 3, titulo: "1984" },
  { id: 4, titulo: "A Revolução dos Bichos" },
  { id: 5, titulo: "Senhor dos Anéis" }
]

export const LivrosContext = createContext()

export function LivrosProvider({ children }) {
  const [livros, setLivros] = useState(livrosInicias)

  function removerLivro(id) {
    setLivros(livros.filter(livro => livro.id !== id))
  }

  return (
    <LivrosContext.Provider value={{ livros, removerLivro }}>
      {children}
    </LivrosContext.Provider>
  )
}
