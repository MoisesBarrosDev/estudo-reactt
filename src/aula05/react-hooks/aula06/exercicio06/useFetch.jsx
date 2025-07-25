
import  { useCallback, useEffect, useState } from 'react'

const useFetch = (buscarPosts) => {
  const [loading, setLoading] = useState(false)
  const [dados, setDados] = useState(null)
  const [error, setError] = useState(undefined)

  const buscarP = async () => {
    try {
      setLoading(true)
      const response = await fetch(buscarPosts)
      const reponseJson = await response.json()
      setDados(reponseJson)
      setLoading(false)
    } catch (error) {
      setError('Não foi possível buscar os dados!')
    }

  }

  const url = useCallback(async () => {
    buscarP()
  }, [buscarPosts])

  useEffect(() => {
    url()

  }, [url])

  return { loading, dados, error }
}

export default useFetch
