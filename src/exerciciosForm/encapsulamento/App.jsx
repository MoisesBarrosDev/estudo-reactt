// O mini-bônus de form que preparei pra você vai ter 3 campos diferentes. Apenas a regex pra você se organizar:


// Nome completo – deve conter nome e sobrenome:
// /^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)+$/


// Email – validação simples de email:
// /^\S+@\S+\.\S+$/


// Senha – mínimo 6 caracteres, pelo menos 1 letra e 1 número:
// /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

import Button from "./Button"
import Input from "./Input"
import useForm from "./useForm"

const App = () => {
  const nome = useForm("nome")
  const email = useForm("email")
  const senha = useForm("senha")

  function handleSubmit(e) {
    e.preventDefault()

    const camposValidos =
      nome.mensagem === "Nome válido!" &&
      email.mensagem === "Email válido!" &&
      senha.mensagem === "Senha válida!"

    if (!camposValidos) return alert("Dados incompletos ou inválidos!")

    console.log({
      nome: nome.value,
      email: email.value,
      senha: senha.value
    })

    nome.limpar()
    email.limpar()
    senha.limpar()
  }

  return (
    <form onSubmit={handleSubmit}>

      <Input
        id="nome"
        label="Nome"
        type="text"
        placeholder="Ex: Lucas Silva"
        {...nome}
      />
   
      <div style={{ marginTop: "1rem" }}>
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="ex: email@gmail.com"
          {...email}
        />

      </div>

      <div style={{ marginTop: "1rem" }}>
        <Input
          id="senha"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          {...senha}
        />
   
      </div>

      <Button type="submit">Submit</Button>
    </form>
  )
}

export default App
