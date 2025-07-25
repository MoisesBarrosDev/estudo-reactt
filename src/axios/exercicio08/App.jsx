// 🔧 8. Exercício – PATCH

// Objetivo: Atualizar apenas o título do post.


// Crie um botão "Atualizar Título"
// Ao clicar, envie um PATCH para https://jsonplaceholder.typicode.com/posts/1
// Envie apenas:
// { title: 'Título parcial atualizado' }
// Mostre a resposta no console


import axios from 'axios'


const App = () => {
  const atualizarTitulo = async () => {
    try {
      const response = await axios.patch('https://jsonplaceholder.typicode.com/posts/1',{title: 'Título parcial atualizado'})
      console.log(response.data)
    } catch (error) {
      console.log('Erro ao atualizar o Titulo:', error.message)
    }
  }
  function atualizarTitle() {
    atualizarTitulo()
  }
  return (
    <div>
      <button onClick={atualizarTitle}>Atualizar Title</button>
    </div>
  )
}

export default App
