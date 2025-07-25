import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = useState(null)

  useEffect(() => {
    async function fetchProduto() {
      const responseProduto = await fetch('https://ranekapi.origamid.dev/json/api/produto/')
      const responseJson = await responseProduto.json()
      setDados(responseJson)
    }
    fetchProduto()
  }, [])

  function limparLista() {
    setDados(null)
  }
  return (
    <GlobalContext.Provider value={{ dados, limparLista }}>
      {children}
    </GlobalContext.Provider>
  )
}

