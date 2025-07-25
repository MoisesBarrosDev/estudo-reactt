// 🧪 Exercício 3.1: Detectar tecla pressionada no teclado e limpar depois
// 🎯 Objetivo:
// Usar useEffect para adicionar um eventListener no window


// Registrar a última tecla pressionada pelo usuário

// Mostrar essa tecla na tela

// Remover o event listener corretamente com o return (cleanup)

// 📋 Instruções com comentários no código:
// jsx
// Copiar
// Editar
// 1. Importe useState e useEffect
// 2. Crie um estado 'tecla' que começa como string vazia ''
// 3. Dentro do useEffect:
//    a. Crie uma função handleKeyDown que recebe o evento de teclado
//    b. Atualize o estado com a tecla pressionada (e.key)
//    c. Adicione a função como ouvinte de 'keydown' no window
//    d. No return do useEffect, remova o ouvinte com removeEventListener
// 4. Adicione [] como dependência (efeito roda só uma vez)
// 5. Mostre na tela: "Última tecla: X"

// ✅ O que deve acontecer:
// Sempre que o usuário apertar uma tecla do teclado, o nome da tecla aparece na tela.

// Quando o componente for desmontado, o ouvinte é removido (sem erro, sem vazamento).

import { useEffect, useState } from "react"


const App = () => {
  const [key, setKey] = useState(null)

  useEffect(() => {
    function handleKeyDown(event) {
      setKey(event.key)
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])


  return (
    <div>
     <p>Ultima tecla: {key}</p>
    </div>
  )
}

export default App


