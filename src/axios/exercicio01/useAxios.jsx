// ✅ Nível 1 – Básico (GET)
// Exercício 1: Listar usuários

// Crie um componente que faz uma requisição GET para https://jsonplaceholder.typicode.com/users

// Mostre os nomes dos usuários em uma lista <ul>



import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

const useAxios = () => {
  const [dados, setDados] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const buscarDados = useCallback(async () => {
    try {
      setLoading(true)
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setDados(response.data)
    } catch (error) {
      setError('Não foi possivel buscar os dados!')
    } finally {
      setLoading(false)
    }
  }, [])


  useEffect(() => {
    buscarDados()
  }, [buscarDados])

  return { dados, loading, error }
}

export default useAxios
