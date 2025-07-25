
import React from 'react'
import useAxios from './useAxios'

const App = () => {
  const { cancelar, carregando, dados } = useAxios()
  if (carregando) return (
    <div>
      <p>Carregando..📡</p>
      <button onClick={cancelar}>Cancelar Requisição</button>
    </div>
  )
  return (
    <div>

      {dados && (
        <ul>
          {dados.map((nome) => (
            <li key={nome.id}>{nome.username}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
