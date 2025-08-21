// Custom hook useForm


import { useState } from "react"

// variavel que contém os tipos de cada input, e dentro de cada tipo tem sua regex,mensagem de error e mensagem de sucesso. 
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

const useForm = () => {
  // Estado para pegar e armazenar os valores que foram obtido de cada input.
  const [values, setValues] = useState({})
  // Estado para mensagem , armazena e atualiza o estado de cada mensagem.
  const [mensagem, setMensagem] = useState({})

  // função para validação de cada campo.
  function validateCampo(name, value) {
    if (value === '') return setMensagem(prev => ({ ...prev, [name]: 'Preencha um valor!' }))

    if (types[name]) {
      if (!types[name].regex.test(value)) {
        setMensagem(prev => ({ ...prev, [name]: types[name].mensagemError }))
        return false
      }
      setMensagem(prev => ({ ...prev, [name]: types[name].mensagemSucesso }))
    }

  }

  // Função que pega oque tem dentro do evento onChange, e atualiza os dados do objeto setValues, 
  // e coloca os parametros da função validateCampo
  const handleChange = ({ target }) => {
    const { name, value } = target
    setValues({ ...values, [name]: value })
    validateCampo(name, value)
  }

  // Função para limpar os campos
  const limparCampos = () => {
    setValues({})
    setMensagem({})
  }
  return { values, setValues, mensagem, setMensagem, handleChange, limparCampos }
}

export default useForm
