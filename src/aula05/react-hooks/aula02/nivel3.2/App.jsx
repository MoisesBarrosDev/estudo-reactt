// 🧪 Exercício 3.3 – Detectar a rolagem da página (scroll)
// 🎯 Objetivo:
// Treinar o uso de useEffect com eventos globais (scroll) e atualizar o estado dinamicamente com base no comportamento do usuário.


// 📋 Instruções (com comentários):
// jsx
// Copiar
// Editar
// 1. Importe useState e useEffect
// 2. Crie um estado chamado 'posicaoScroll' que começa em 0
// 3. Crie uma função que será executada sempre que o usuário rolar a página
//    - Essa função deve atualizar o estado com window.scrollY
// 4. Use useEffect para:
//    - Adicionar o event listener 'scroll' que chama sua função
//    - Fazer a limpeza do evento no return do useEffect
// 5. Exiba a posição atual do scroll na tela
// ✅ O que deve acontecer:
// Quando você rolar a página para baixo, o número na tela deve mudar mostrando quantos pixels foram rolados.


import { useEffect, useState } from "react"
const App = () => {
  const [posicaoScroll, setScroll] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div style={{height:'200vh'}}>
      <p>Posição scroll: {posicaoScroll}</p>
    </div>
  )
}

export default App
