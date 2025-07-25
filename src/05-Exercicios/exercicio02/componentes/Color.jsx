// Importa os hooks useEffect e useState do React
import { useEffect, useState } from "react"
// Importa o componente Button (botão customizado)
import Button from "./Button"

const Color = () => {
  // Cria um estado chamado 'cor' com valor inicial 'white'
  const [cor, setCor] = useState('white')

  // useEffect que roda **apenas uma vez** ao montar o componente
  // Ele verifica se já existe uma cor salva no localStorage
  useEffect(() => {
    const corSalva = localStorage.getItem('color') // pega a cor salva
    if (corSalva) {
      setCor(corSalva) // se houver, atualiza o estado com ela
    }
  }, [])

  // useEffect que roda toda vez que a cor mudar
  // Ele aplica a cor no fundo da página inteira
  useEffect(() => {
    document.body.style.backgroundColor = cor // altera a cor do fundo do body
  }, [cor]) // roda sempre que o estado 'cor' mudar

  // Função que muda a cor para preto e salva no localStorage
  const colorBlack = () => {
    setCor('black')
    localStorage.setItem('color', 'black')
  }

  // Função que muda a cor para branco e salva no localStorage
  const colorWhite = () => {
    setCor('white')
    localStorage.setItem('color', 'white')
  }

  return (
    // Uma div com dois botões (Claro e Escuro)
    <div style={{ display: "flex", gap: '1rem' }} >
      {/* Cada botão chama uma função que muda a cor */}
      <Button onClick={colorWhite}>Claro</Button>
      <Button onClick={colorBlack}>Escuro</Button>
    </div>
  )
}

// Exporta o componente para ser usado em outros arquivos
export default Color

