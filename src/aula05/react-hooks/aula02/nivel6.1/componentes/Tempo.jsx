import { useEffect, useState } from "react"
import Button from "./Button"

const Tempo = () => {
  const [tempo, setTempo] = useState(0)
  const [ativo, setAtivo] = useState(false)

  useEffect(() => {
    let intervalo;

    if (ativo) {
      intervalo = setInterval(() => {
        setTempo((t) => t + 1)
      }, 1000)
    } else if (ativo === false) {
      clearInterval(intervalo)
    }
    return () => {
      clearInterval(intervalo)
    }
  }, [ativo])


  function iniciarTemporizador() {
    setAtivo(true)
  }

  function pararTemporizador() {
    setAtivo(false)
  }

  function reiniciarTemporizador() {
    setAtivo(false)
    setTempo(0)
  }
  
  return (
    <>
      <h1>Tempo : {tempo} segundos</h1>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button onClick={iniciarTemporizador}>Iniciar temporizador</Button>
        <Button onClick={pararTemporizador}>Parar temporizador</Button>
        <Button onClick={reiniciarTemporizador}>Reiniciar temporizador</Button>
      </div>
    </>

  )
}

export default Tempo
