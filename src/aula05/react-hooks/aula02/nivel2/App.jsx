// 🧪 Exercício 2.3: Atualizar o título da aba do navegador com base em um contador
// 🎯 Objetivo:
// Usar useState para criar um contador.


// Usar useEffect para atualizar o título da aba do navegador (document.title) com o valor atual do contador sempre que ele mudar.

// 📋 Instruções com comentários:
// jsx
// Copiar
// Editar

// 1. Importe useState e useEffect do React
// 2. Crie um estado chamado 'contador' iniciando em 0
// 3. Crie uma função 'incrementar' que aumenta o contador em 1
// 4. No useEffect, atualize document.title com o valor do contador
// 5. Adicione [contador] como dependência para o efeito rodar sempre que o contador mudar
// 6. Mostre o valor do contador na tela e um botão para incrementá-lo
// ✅ O que deve acontecer:
// Ao clicar no botão, o número na tela aumenta.

import { useEffect, useState } from "react"


const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Clicou: ${count}`
  }, [count])

  function incrementar() {
    setCount(() => count + 1)
  }
  return (
    <div>
      <button onClick={incrementar}>Clicou: {count}</button>
    </div>
  )
}

export default App


