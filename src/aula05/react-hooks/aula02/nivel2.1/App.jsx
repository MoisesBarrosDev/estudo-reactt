// 🧪 Exercício 2.4: Alterar a cor de fundo da página com base no valor do contador
// 🎯 Objetivo:
// Usar useState para contar cliques.


// Usar useEffect para mudar a cor de fundo do site dependendo do valor do contador.

// 📋 Instruções (em comentários para te guiar):
// jsx
// Copiar
// Editar
// 1. Importe useState e useEffect
// 2. Crie um estado 'contador' que começa em 0
// 3. Crie uma função para incrementar o contador
// 4. No useEffect:
//    - Se o contador for par, mude o fundo para 'lightblue'
//    - Se for ímpar, mude para 'lightcoral'
// 5. O useEffect deve rodar sempre que o contador mudar (dependência)
// 6. Mostre o valor do contador e um botão que incrementa
// ✅ O que deve acontecer:
// Toda vez que você clicar no botão, o número aumenta.

// O fundo do site muda de cor dependendo se o número é par ou ímpar.

import { useEffect, useState } from "react"



const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count % 2 === 0) {
      document.body.style.backgroundColor = 'lightblue'
    } else {
      document.body.style.backgroundColor = 'lightcoral'
    }
  }, [count])


  function incrementar() {
    setCount((prev) => prev + 1)
  }
  return (
    <div>
      <button onClick={incrementar}>Clicou: {count}</button>
    </div>
  )
}

export default App

