// React Hooks - useRef e useState
// useRef retorna um objeto mutável com a propriedade .current
// É útil para guardar valores entre renderizações, sem causar re-render
// Também é muito usado para acessar elementos do DOM (como um input)

import { useRef, useState } from "react"

// Primeiro componente - Exemplo com foco no input
const App = () => {
  // Estado para armazenar os comentários inseridos
  const [comentarios, setComentarios] = useState([])

  // Estado para armazenar o valor atual digitado no input
  const [input, setInput] = useState('')

  // Cria uma referência para o input do formulário
  // Assim podemos acessar o elemento diretamente (inputElement.current)
  const inputElement = useRef()

  // Função chamada ao clicar no botão "Enviar"
  const handleClick = () => {
    // Adiciona o valor digitado ao array de comentários
    setComentarios([...comentarios, input])

    // Limpa o input após adicionar
    setInput('')

    // Dá foco novamente no input
    inputElement.current.focus()
  }

  return (
    <div>
      <h2>Comentários</h2>
      <ul>
        {/* Renderiza cada comentário como um <li> */}
        {comentarios.map((comentario, index) => (
          <li key={index}>
            {comentario}
          </li>
        ))}
      </ul>

      {/* Campo de input controlado */}
      <input
        type="text"
        ref={inputElement} // Referência direta ao elemento do DOM
        value={input} // Valor controlado via estado
        onChange={(event) => setInput(event.target.value)} // Atualiza o estado ao digitar
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  )
}

// Segundo componente - Exemplo com clearTimeout e useRef
const App2 = () => {
  // Estado que armazena a quantidade de itens no carrinho
  const [carrinho, setCarrinho] = useState(0)

  // Estado que exibe uma notificação temporária na tela
  const [notificacao, setNotificacao] = useState(null)

  // Referência para armazenar o ID do setTimeout
  // Isso permite cancelar o timeout anterior, se necessário
  const timeoutRef = useRef()

  // Calcula o próximo valor do carrinho
  const value = carrinho + 1

  // Função chamada ao clicar no botão "Adicionar Carrinho"
  const handleClick = () => {
    // Atualiza o valor do carrinho
    setCarrinho(value)

    // Exibe a notificação na tela
    setNotificacao(`Item adicionado no carrinho ${value}`)

    // Cancela qualquer timeout anterior que ainda esteja rodando
    clearTimeout(timeoutRef.current)

    // Define um novo timeout para remover a notificação após 2 segundos
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null)
    }, 2000)
  }

  return (
    <div>
      <h2>Carrinho</h2>
      {/* Exibe a notificação, se houver */}
      <p>{notificacao}</p>
      <button onClick={handleClick}>
        Adicionar Carrinho {carrinho}
      </button>
    </div>
  )
}

// Você pode escolher qual componente exportar (App ou App2)
export default App2
