// 🔁 7. Exercício – PUT

// Objetivo: Atualizar completamente um post existente.


// Crie um botão "Atualizar Post Completo"
// Ao clicar, envie um PUT para https://jsonplaceholder.typicode.com/posts/1
// Envie os dados completos:
// { id: 1, title: 'Título atualizado', body: 'Novo conteúdo', userId: 1 }
// Mostre a resposta no console


import axios from 'axios'


const App = () => {
  const atualizar = async () => {
    try {
      const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'Título atualizado',
        body: 'Novo conteúdo',
        userId: 1
      }
      )
      console.log(response.data)
    } catch (error) {
      console.log('Erro ao atualizar post:', error.message)
    }
  }
  function atualizarPost() {
    atualizar()
  }
  return (
    <div>
      <button onClick={atualizarPost}>Atualizar Post Completo</button>
    </div>
  )
}

export default App
