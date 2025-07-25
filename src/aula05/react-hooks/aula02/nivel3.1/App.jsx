// 🧪 Exercício 3.2 – Detectar o tamanho da janela (window resize)
// 🎯 Objetivo:
// Usar useEffect e useState para acompanhar o tamanho da janela (largura) e exibir na tela. Quando o usuário redimensionar a janela, a largura deve ser atualizada automaticamente.

// 📋 Instruções (em comentários para te guiar):
// jsx
// Copiar
// Editar
// 1. Importe useState e useEffect do React
// 2. Crie um estado chamado 'largura' e inicie com window.innerWidth
// 3. Dentro do useEffect, crie uma função handleResize que atualiza o estado com window.innerWidth
// 4. Adicione essa função como listener do evento 'resize' no window
// 5. Lembre de limpar o event listener no return do useEffect (boa prática!)
// 6. Mostre na tela o valor atual da largura da janela

// ✅ O que deve acontecer:
// A largura da janela aparece na tela

// Se você redimensionar a janela, o número se atualiza automaticamente

import { useEffect, useState } from 'react'

const App = () => {
  const [largura, setLargura] = useState(null)

  useEffect(() => {
    const handleSize = () => {
      setLargura(window.innerWidth)
    }
    window.addEventListener('resize', handleSize)

    handleSize()
    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [])
  return (
    <div>
      <p>Largura: {largura}</p>
    </div>
  )
}

export default App
