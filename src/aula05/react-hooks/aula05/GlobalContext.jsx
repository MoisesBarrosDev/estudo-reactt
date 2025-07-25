import { createContext, useState } from "react";

// createContext
// O contexto irá permitir passarmos dados/estado a todos os componentes, sem a necessidade de utilizar propriedades.
// Serve principalmente para dodos/estados globais como por exemplo dados do usuário logado.

export const GlobalContext = createContext()


// Provider
// O método Provider deve ser utilizado para envolver todos os elementos que terão acesso aos dados do Context. 
// Provider recebe uma propriedade chamada value, dentro dela que devemos informar os dados do contexto.

// GlobalStorage
// Exemplo de uso real do context. Podemos passar qualquer coisa no value do context, até estados e funções atualizadoras do useState.



export const GlobalStorage = ({ children }) => {
  const [count, setCount] = useState(0)
  return (

    <GlobalContext.Provider value={{ count, setCount }}>
      {children}
    </GlobalContext.Provider>
  )
}

