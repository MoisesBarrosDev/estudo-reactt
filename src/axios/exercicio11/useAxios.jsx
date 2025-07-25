// ✅ Exercício 11 – Cancelar requisição com botão manual
// 🎯 Objetivo:
// Fazer uma requisição com Axios + AbortController

// Exibir os dados normalmente

// Ter um botão "Cancelar Requisição" que o usuário pode clicar antes da resposta chegar

// Quando cancelado:

// A requisição deve ser interrompida

// O console deve mostrar ❌ Requisição cancelada.

// O estado não pode ser atualizado com dados

import axios from 'axios'
import React, { useCallback, useEffect, useRef, useState } from 'react'

const useAxios = () => {
  const [dados, setDados] = useState(null)
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState(undefined)

  const timeOutRef = useRef()
  const abortRef = useRef()



  const buscarDados = useCallback(() => {
  setErro(null)
  setCarregando(true)

  timeOutRef.current = setTimeout(async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
        signal: abortRef.current.signal,
      })
      setDados(response.data)
    } catch (error) {
      if (error.code === 'ERR_CANCELED') {
        console.log('Requisição cancelada!')
        return
      }
      console.log('Erro:', error)
    } finally {
      setCarregando(false)
    }
  }, 3000)
}, [])


  useEffect(() => {
    const controller = new AbortController()
    abortRef.current = controller
    
    buscarDados()
    return () => {
      clearTimeout(timeOutRef.current)
      if (abortRef.current) abortRef.current.abort()
    }
  }, [buscarDados])

  function cancelar() {
    abortRef.current.abort()
  }
  return { dados, carregando,cancelar }
}

export default useAxios
