// 🚀 Exercício 1 – Evitar recálculo com useMemo

import { useMemo, useState } from "react"
function App() {
  const [contar, setContar] = useState(0)

  const soma = () => {
    console.log("Função lenta executando...")
    let total = 0
    for (let i = 0; i < 100000000; i++) {
      total += i
    }
    return total
  }

  const resultado = useMemo(() => soma(), [])

  return (
    <div>
      <p>Resultado: {resultado}</p>
      <button onClick={() => setContar(c => c + 1)}>Contar: {contar}</button>
    </div>
  )
}

// ❓Pergunta:
// Como evitar que soma() seja executada de novo toda vez que clicar no botão, mesmo que o valor da soma não precise mudar?
// Resposta: colocar o useMemo chamando a função pra dentro dele, logo ele vai guarda o resultado na memoria e não vai mudar, mesmo 
// que a pagina renderize , o valor vai continuar salvo na memoria.
export default App