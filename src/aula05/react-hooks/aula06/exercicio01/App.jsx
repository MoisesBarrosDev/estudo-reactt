
// ✅ Exercício 1 – Hook de contador
// Objetivo: Criar um custom hook chamado useContador.


// Requisitos:

// Ele deve retornar um valor numérico (contador) e uma função incrementar.

// O estado começa em 0.

import useContador from "./useContador"


const App = () => {
  const [contador, incrementar] = useContador()
  return (
    <div>
      <p>Você cliclou: {contador}</p>
      <button onClick={incrementar}>Incremente</button>
    </div>
  )
}

export default App
