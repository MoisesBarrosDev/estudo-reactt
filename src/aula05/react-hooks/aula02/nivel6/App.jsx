// Ótimo! Vamos pro 🧠 Nível 6 – Limpeza no useEffect, que é fundamental para evitar bugs e vazamentos de memória quando 
// usamos efeitos como setTimeout, setInterval ou escutamos eventos (ex: addEventListener).

// 🚀 Exercício 6.1 – setTimeout com limpeza no useEffect
// 🎯 Objetivo:
// Aprender a usar o useEffect com setTimeout e limpar corretamente o efeito quando o componente for desmontado.

// 📋 Instruções:
// Crie um estado chamado ativo (booleano), começando como true.
// Crie outro componente chamado <Mensagem />.
// O componente <Mensagem />:

// Quando for montado, deve exibir um <p>Essa mensagem vai sumir em 3 segundos</p>.
// Use setTimeout dentro do useEffect para exibir um console.log("Mensagem removida") depois de 3 segundos.
// Importante: faça a limpeza correta do timeout com clearTimeout.
// No componente <App />, mostre o componente <Mensagem /> apenas se ativo for true.

// Adicione um botão para alternar o estado ativo (mostrar/ocultar a <Mensagem />).

// ✅ O que deve acontecer:
// Ao carregar a página, <Mensagem /> aparece e dispara o setTimeout.

// Se você esconder o componente antes dos 3 segundos, o timeout é limpo corretamente (sem console.log).

// Se você esperar os 3 segundos, o log aparece e mostra que você entendeu a limpeza.

import { useState } from 'react'
import Message from './Message'

const App = () => {
  const [mostrarMensagem, setMostrarMensagem] = useState(true)

  return (
    <div>
      {mostrarMensagem && (
        <Message onClose={() => setMostrarMensagem(false)}>
          Essa mensagem vai sumir em 3 segundos...
        </Message>
      )}
    </div>
  )
}

export default App

