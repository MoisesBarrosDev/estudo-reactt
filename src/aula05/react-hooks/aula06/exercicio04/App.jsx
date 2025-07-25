// ✅ Exercício 4 – Hook de alternância (useToggle)
// 🎯 Objetivo:
// Criar um custom hook chamado useToggle que alterna um valor booleano entre true e false.


// ✅ Requisitos:
// O estado inicial deve ser passado como argumento (true ou false).

// O hook deve retornar:

// o valor booleano atual,

// e uma função que inverte esse valor (true → false, false → true).


import useToggle from "./aula05/react-hooks/aula06/exercicio04/useToggle"


const App = () => {
  const  [ativo, alternar ] = useToggle()
  return (
    <div>
      <button onClick={alternar}>{ativo ? 'Ligado' : 'Desligado'}</button>
    </div>
  )
}

export default App
