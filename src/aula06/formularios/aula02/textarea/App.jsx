// Formulários
// Textarea

import { useState } from "react"

// Textarea
// No React o textarea é utilizado como um input, uma tag única sem abertura/fechamento e com o value para definir o seu valor interno.



const App = () => {
  const [mensagem, setMensagem] = useState('')
  function handleChange(event) {
    setMensagem(event.target.value)
  }
  return (
    <form>
      <label htmlFor="mensagem">Digite sua mensagem</label>
      <textarea
        id="mensagem"
        value={mensagem}
        onChange={handleChange}
        rows='5' 
        placeholder="Digite aqui"
        />
        <p>Texto digitado: {mensagem}</p>
    </form>
  )
}

export default App
