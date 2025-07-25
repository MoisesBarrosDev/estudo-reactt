// ✅ Exercício 10 – AbortController + Timeout (com Axios)
// 🧠 Objetivo:
// Fazer uma requisição com Axios

// Usar setTimeout para atrasar a resposta (simulando demora)

// Usar AbortController para cancelar a requisição automaticamente se o componente for desmontado

import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {
  useEffect(() => {
    const controller = new AbortController()

    axios.get('https://jsonplaceholder.typicode.com/users', {
      signal: controller.signal
    })
      .then(res => console.log('✅ Dados:', res.data))
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log('❌ Requisição cancelada.')
        } else {
          console.log('Erro:', err.message)
        }
      })

    return () => {
      controller.abort()
    }
  }, [])

  return <p>📡 Fazendo requisição...</p>
}

export default App
