// ✅ Exercício 2 – Hook com valor inicial
// Objetivo: Permitir que useContador receba um valor inicial.

// Requisitos:

// O valor inicial deve vir como parâmetro:

import useContador from "./useContador"


const App = () => {
  const [contador, incrementar] = useContador(10)
  return (
    <div>
      <p>Você cliclou: {contador}</p>
      <button onClick={incrementar}>Incremente</button>
    </div>
  )
}

export default App
