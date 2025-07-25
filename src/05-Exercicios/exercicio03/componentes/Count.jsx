import { useEffect, useState } from "react"
import Button from "./Button"
import Paragraph from './Paragraph'

const Count = () => {
  // Estado inicial do contador
  const [count, setCount] = useState(0)

  // Executa apenas uma vez na montagem do componente.
  useEffect(() => {
    // Busca o valor salvo no localStorage (se houver)
    const valueSave = localStorage.getItem('value')
    // Se houver valor salvo, converte de string para número e atualiza o estado
    if (valueSave) {
      setCount(Number(valueSave))
    }
  }, [])

  // Sempre que o 'count' mudar, salva o novo valor no localStorage
  useEffect(() => {
    localStorage.setItem('value', count)
  }, [count])

  // Funções que atualizam o contador com base no valor atual
  const incrementar = () => {
    setCount((c) => c + 1)
  }
  // Funções que atualizam o contador com base no valor atual
  const diminuir = () => {
    setCount((d) => d - 1)

  }
  return (
    <>
      <Paragraph> {count === 0 ? 'Click no botão' : count}</Paragraph>
      <div style={{ display: 'flex', gap: '.5rem' }}>
        <Button onClick={incrementar}>Incrementar</Button>
        <Button onClick={diminuir}>Diminuir</Button>
      </div>
    </>

  )
}

export default Count
