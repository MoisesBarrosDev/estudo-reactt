// 🗑️ 9. Exercício – DELETE

// Objetivo: Deletar um post.

// Crie um botão "Deletar Post"
// Ao clicar, envie um DELETE para https://jsonplaceholder.typicode.com/posts/1
// Mostre no console que foi deletado (a API retorna objeto vazio: {})



import axios from 'axios'


const App = () => {
  const deletarPost = async () => {
    try {
      const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1',{})
      console.log(response.data)
    } catch (error) {
      console.log('Erro ao deletar Post:', error.message)
    }
  }
  function deletar() {
    deletarPost()
  }
  return (
    <div>
      <button onClick={deletar}>Deletar Post</button>
    </div>
  )
}

export default App
