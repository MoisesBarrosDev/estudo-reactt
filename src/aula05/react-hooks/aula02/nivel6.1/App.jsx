// 🧪 Exercício 6.3 – Temporizador com Reset
// 🎯 Objetivo:
// Fixar useEffect com dependências, setInterval, clearInterval e uso de reset.

// 📋 Instruções:
// Importe useState e useEffect.
// Crie um estado tempo, que começa em 0.
// Crie um estado ativo, que começa como false.

// ⚙️ Funcionalidade esperada:
// Mostre o tempo atual (em segundos) na tela.
// Mostre 3 botões:

// Iniciar → Ativa o temporizador e começa a contar.
// Parar → Pausa o temporizador.
// Resetar → Zera o tempo e para o temporizador (tempo volta para 0, ativo fica false).

// 🔁 Lógica esperada:
// Se ativo for true, o useEffect inicia um setInterval para contar 1 segundo por vez.
// Quando ativo muda ou o componente desmonta, o clearInterval deve limpar o timer.
// O botão "Resetar" deve:

// Zerar o tempo.

// Parar o temporizador (ativo vira false).

// ✅ O que deve acontecer:
// Ao clicar em "Iniciar", o tempo começa a subir.

// Ao clicar em "Parar", o tempo congela.

// Ao clicar em "Resetar", o tempo zera e para.


import Tempo from "./aula05/react-hooks/aula02/nivel6.1/componentes/Tempo"

const App = () => {
 
  return (
    <>
     <Tempo/>
    </>
  )
}

export default App
