// 🧪 Exercício 5: Campo de senha com regra
// Crie um campo de senha com a seguinte regra:


// Se a senha tiver menos de 8 caracteres, mostre uma mensagem: "Senha fraca"

// Se tiver 8 ou mais, mostre "Senha ok!"

import { useState } from "react"



const App = () => {
  const [password, setPassword] = useState('')


  function handleonChange({ target }) {
    setPassword(target.value)
  }

  return (
    <form>
      <label htmlFor="senha">senha</label>
      <input
        type="password"
        placeholder="digite sua senha"
        id="senha"
        required
        maxLength={10}
        value={password}
        onChange={handleonChange}
      />
      <button type="submit">submit</button>

      {password && (
        password.length <= 7 ? (
          <div>
            <p>Senha fraca!</p>
          </div>
        ) : (
          <div>
            <p>Senha ok!</p>
          </div>
        )
      )}
    </form>
  )
}

export default App
