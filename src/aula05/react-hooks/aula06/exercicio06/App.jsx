// ✅ Exercício 6 – Hook de fetch (useFetch)
// 🎯 Objetivo:
// Criar um hook chamado useFetch que busque dados de uma API.

// ✅ Requisitos:
// O hook deve receber uma URL como parâmetro.

// Internamente, usar useEffect para fazer a requisição com fetch assim que a URL for usada.

// Deve retornar:

// data → os dados da resposta (em JSON),

// loading → booleano indicando se ainda está carregando,

// error → algum erro ocorrido (ou null se não houver erro).


import React from 'react'
import useFetch from './useFetch'

const App = () => {
  const { loading, dados, error } = useFetch('https://jsonplaceholder.typicode.com/posts')
  return (
    <div>

      {dados && dados.map(post => (
        <p key={post.id}>{post.title}</p>
      ))}

      <p>{loading ? 'Carregando...' : (error || '')}</p>

    </div>
  )
}

export default App
