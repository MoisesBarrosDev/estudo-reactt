import { useState } from "react"

const validateUser = /^[A-Za-z][A-Za-z0-9._]{3,11}$/

const useForm = () => {
  const [values, setValues] = useState({})
  const [mensagem, setMensagem] = useState({})

  function handleChange({ target }) {
    const { name, value } = target // name = 'nome', value = o que o usuário digitou
    setValues({ ...values,[name] : value }) // atualiza o campo 'nome' no estado com o valor digitado
  
    if (value === '') return setMensagem({ ...mensagem, [name]: '' }) // limpa a mensagem pra esse campo
    if (!validateUser.test(value)) return setMensagem({ ...mensagem, [name]: 'Usuário inválido!' }) // seta mensagem de erro
    return setMensagem({ ...mensagem, [name]: 'Usuário válido!' }) // seta mensagem de sucesso
  }


  return { values, mensagem, handleChange, setValues,setMensagem }
}

export default useForm
