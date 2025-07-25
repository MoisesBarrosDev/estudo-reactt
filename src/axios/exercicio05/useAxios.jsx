// ✅ Exercício 5 – Estados separados: data, loading, error
// 📝 Enunciado:
// Você já está usando o hook useAxios que retorna:

// dados

// loading

// error


import axios from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'

const useAxios = () => {
  const [dados, setDados] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [forcarErro, setForcarError] = useState(false)

  const timeoutref = useRef()
  const buscarDados = useCallback(async () => {
    setError(null)
    setLoading(true)
    try {
      if (forcarErro) throw new Error('Erro simulado!')

      const response = await axios.get('https://jsonplaceholder.typicode.com/users')

      timeoutref.current = setTimeout(() => {
        setDados(response.data)
        setLoading(false)
      }, 2000);

    } catch (error) {
      setError(error.message || 'Não foi possivel buscar os dados!')
      setLoading(false)
    }
  }, [forcarErro])

  function recarregar() {
    buscarDados()
  }

  function simule() {
    setForcarError(true)
  }

  useEffect(() => {
    buscarDados()
    return () => clearTimeout(timeoutref.current)
  }, [buscarDados])

  return { dados, loading, error, recarregar, simule, forcarErro }
}

export default useAxios
