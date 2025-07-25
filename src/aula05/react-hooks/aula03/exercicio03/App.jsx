// 🧪 Exercício 3: Cancelar um setTimeout
// Objetivo: Criar uma notificação que desaparece depois de 3 segundos, mas se clicar de novo, reinicia o timer.

// O que fazer:
// Um botão: “Mostrar mensagem”.

// Ao clicar, aparece a mensagem: “Olá!”.

// Após 3 segundos, ela some.

// Se clicar de novo antes dos 3 segundos, reinicia o tempo.

// Dica:
// Use useRef para guardar o ID do timeout.

// Use clearTimeout(timeoutRef.current) antes de criar um novo.


import React, { useRef, useState } from 'react'

const App = () => {
  const timeoutRef = useRef()
  const [menssagem, setMensagem] = useState('')

  const handleClick = () => {
    setMensagem('Olá')

    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setMensagem('')
    }, 3000)
  }
  return (
    <div>
      <p>{menssagem}</p>
      <button onClick={handleClick}>Mostrar Menssagem</button>
    </div>
  )
}

export default App
