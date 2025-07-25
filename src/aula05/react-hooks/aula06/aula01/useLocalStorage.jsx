// React Hooks
// Custom Hooks

// useLocalStorage
// Podemos criar nossos próprios hooks, assim evitamos a repetição de código. Todo custom hook deve começar com a palavra use.
//  Exemplo: useNomeDoHook. Podemos retornar o que quisermos do hook, seja um valor único, uma array ou um objeto.

import { useEffect, useState } from "react"

const useLocalStorage = ( key, inicial ) => {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key)
    return local ? local : inicial
  })

  useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state, key])

  return [state, setState]
}

export default useLocalStorage