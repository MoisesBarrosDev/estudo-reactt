import { useContext } from "react";
import { LivrosContext } from "./LivrosContext";



const ListaLivro = () => {
  const {livros, removerLivro} = useContext(LivrosContext)
  return (
    <ul>
      {livros.map((livro) => (
        <li key={livro.id}>
        {livro.titulo}
        <button onClick={() => removerLivro(livro.id)}>Remover</button>
        </li>
      ))}
    </ul>
  )
}

export default ListaLivro

