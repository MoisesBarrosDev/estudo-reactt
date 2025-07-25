import { useEffect, useState } from "react"
import Button from "./Button"
import Paragraph from "./Paragraph"

const Input = () => {
  // 1️⃣ Criamos o estado 'name' para guardar o que o usuário digita
  const [name, setName] = useState('')

  // 2️⃣ useEffect roda assim que o componente carrega (monta na tela)
  useEffect(() => {
    const nomeSalvo = localStorage.getItem('name') // pega o nome salvo no localStorage
    if (nomeSalvo) {
      setName(nomeSalvo) // se existir, coloca no estado e mostra na tela
    }
  }, [])

  // 3️⃣ Essa função roda quando o formulário for enviado (submit)
  const handleSubmit = (e) => {
    e.preventDefault() // impede que a página recarregue
    localStorage.setItem('name', name) // salva o nome atual no localStorage
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* 
          4️⃣ input controlado: 
          - value={name} mantém o input sempre igual ao estado.
          - onChange atualiza o estado toda vez que o usuário digita algo.
        */}
        <input 
          type="text" 
          placeholder="Digite seu nome" 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
        />

        {/* 5️⃣ Botão que dispara o onSubmit do formulário */}
        <Button>Submit</Button>
      </form>

      {/* 6️⃣ Mostra uma mensagem se o nome estiver preenchido */}
      <span>
        {name && <Paragraph>Olá {name}!</Paragraph>}
      </span>
    </>
  )
}

export default Input

