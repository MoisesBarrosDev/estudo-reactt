import { useState } from "react"

const types = {
  nome: {
    regex: /^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)+$/,
    mensagemError: 'Digite um nome válido!',
    mensagemSucesso: 'Nome válido!'
  },
  email: {
    regex: /^\S+@\S+\.\S+$/,
    mensagemError: 'Digite um email válido!',
    mensagemSucesso: 'Email válido!'
  },
  senha: {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
    mensagemError: 'Digite uma senha válida!',
    mensagemSucesso: 'Senha válida!'
  }
}

const useForm = (type) => {
  const [value, setValue] = useState("")
  const [mensagem, setMensagem] = useState("")

  function validate(value) {
    if (value === '') {
      setMensagem("Preencha um valor!")
      return false
    }
    if (types[type]) {
      if (!types[type].regex.test(value)) {
        setMensagem(types[type].mensagemError)
        return false
      } else {
        setMensagem(types[type].mensagemSucesso)
        return true
      }
    }
    return true
  }

  function onChange({ target }) {
    setValue(target.value)
    validate(target.value)
  }

  function limpar() {
    setValue("")
    setMensagem("")
  }

  return {
    value,
    onChange,
    mensagem,
    limpar
  }
}

export default useForm
