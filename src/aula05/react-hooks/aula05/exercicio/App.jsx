import React from 'react'
import { GlobalStorage } from './aula05/react-hooks/aula05/exercicio/GlobalContext'
import Produto from './aula05/react-hooks/aula05/exercicio/Produto'
import LimparLista from './aula05/react-hooks/aula05/exercicio/LimparLista'
const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <LimparLista />
    </GlobalStorage>
  )
}

export default App
