// 📮 6. Exercício – POST

// Objetivo: Criar um novo post ao clicar em um botão.
// Crie um botão "Criar Post"
// Ao clicar, envie um POST para https://jsonplaceholder.typicode.com/posts
// O corpo (body) deve ser:
// { title: 'Título de teste', body: 'Conteúdo de teste', userId: 1 }
// Mostre no console a resposta da API


import axios from 'axios'


const App = () => {
  const criaPost = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Titulo de teste',
        body: 'Conteúdo de teste',
        userId: 1
      }
      )
      console.log(response.data)
    } catch (error) {
      console.log('erro ao criar post' || error.message)
    }
  }
  function criar() {
    criaPost()
  }
  return (
    <div>
      <button onClick={criar}>Criar Post</button>
    </div>
  )
}

export default App
