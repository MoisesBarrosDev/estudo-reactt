// ✅ Exercício 2 – GET com Loading e Erro na Tela
// 📝 Enunciado:
// Use seu hook useAxios do Exercício 1 (ou refatore se quiser)

// Na tela, mostre:

// Carregando... enquanto a requisição está acontecendo

// Erro: [mensagem] se der erro na requisição

// A lista de nomes dos usuários apenas se não estiver carregando e não tiver erro

// 🎯 Objetivo:
// Garantir que o usuário entenda o que está acontecendo no app, melhorando a UX.




import axios from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'

const useAxios = () => {
  const [dados, setDados] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const timeoutref = useRef()
  const buscarDados = useCallback(async () => {
    try {
      setLoading(true)

      const response = await axios.get('https://jsonplaceholder.typicode.com/users')

      timeoutref.current = setTimeout(() => {
        setDados(response.data)
        setLoading(false)
      }, 2000);

    } catch (error) {
      setError('Não foi possivel buscar os dados!')
    }
  }, [])


  useEffect(() => {
    buscarDados()
    return () => clearTimeout(timeoutref.current)
  }, [buscarDados])

  return { dados, loading, error }
}

export default useAxios
