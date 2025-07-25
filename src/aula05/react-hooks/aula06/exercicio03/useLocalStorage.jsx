import { useEffect, useState } from "react"



const useLocalStorage = (key, inicial) => {
  const [valor, setValor] = useState(() => {
    // pegue a chave key, essa chave vem com coisas dentro dela, 
    // que é no caso uma string '10', ai eu pego,a chave é diferente de nenhuma?,se for converta essa chave para o estado normal dela,
    // se não retorne o inicial que é o número 10 .
    const local = window.localStorage.getItem(key)
    return local !== null ? JSON.parse(local) : inicial
  })

  useEffect(() => {
    // assim que o componente fazer o render, pegue dentro do localStorage a key, e converta para string o valor que há dentro dela.
    window.localStorage.setItem(key, JSON.stringify(valor))
  }, [key, valor])

  return [valor, setValor]
}

export default useLocalStorage
