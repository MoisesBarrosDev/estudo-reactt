
// ✅ Exercício 3 – Recarregar dados com botão
// 📝 Enunciado:
// Ainda usando o useAxios, adicione um botão "Recarregar" no componente App.

// Ao clicar no botão, a requisição deve ser feita novamente.

// O loading, error e dados devem se comportar como na primeira vez.


import axios from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'

const useAxios = () => {
  const [dados, setDados] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const timeoutref = useRef()
  const buscarDados = useCallback(async () => {
    setError(null)
    try {
      setLoading(true)

      const response = await axios.get('https://jsonplaceholder.typicode.com/users')

      timeoutref.current = setTimeout(() => {
        setDados(response.data)
        setLoading(false)
      }, 2000);
    } catch (error) {
      setError('Não foi possivel buscar os dados!')
        setLoading(false)

    }
  }, [])

  function recarregar() {
    buscarDados()
  }

  useEffect(() => {
    buscarDados()
    return () => clearTimeout(timeoutref.current)
  }, [buscarDados])

  return { dados, loading, error, recarregar }
}

export default useAxios
