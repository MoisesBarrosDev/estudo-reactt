// ✅ Exercício 3 – useLocalStorage
// 🎯 Objetivo:
// Criar um hook useLocalStorage reutilizável.

// ✅ Requisitos:
// Deve usar useState e useEffect internamente.

// Buscar o valor inicial do localStorage na primeira renderização (usar a key para isso).

// Salvar o valor no localStorage sempre que o estado mudar.

// Deve retornar um array com [valor, setValor], igual ao padrão do useState.

import useLocalStorage from './useLocalStorage'

const App = () => {
  const [valor, setValor] = useLocalStorage('valor', 10)
  return (
    <div>
     <p>O valor atual é {valor}R$</p>
    </div>
  )
}

export default App

