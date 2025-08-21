import React, { useState } from 'react'

// 1º - criamos uma regex, essa regex é o padrão do numero de celular brasileiro.
// 2º - criamos um componente useForm
// 3º - criamos um estado para o valores do input que é o :(value), e uma função que atualiza esse estado value que se chama:(setValue).
// 4º - criamos um estado para as mensagens que vão ser exibidas, que é o :(mensagem), e função que atualiza esse estado mensagem que se chama:(setMensagem).
// 5º - criamos a função handleChange que está desestruturando o target.
// 6º - pegamos o target e extraimos oque tem dentro dele, que é o name e o value.
// 7º - chamamos a função atualizadora do estado values, que é a setValues.
// 8º - dentro do setValues, espalhamos (spread) oque tem dentro de values, pegamos a variavel name, e colocamos ela pra receber um novo valor.
// ATENÇÃO: o name que extraimos do target, para colocar ele como chave e adicionar um novo valor no objeto é preciso das [] no name. assim: [name]; 
// assim o [name]: vai ser o valor da propiedade recebida. exemplo:  setValues({ ...values, [cell]: valor digitado }) 
// [name] = nome da propriedade baseado no atributo name do input
// Exemplo: name="cell" -> [name] vira "cell"
// 9º - criamos uma condição, que se o value do target for === a string vazia,botamos pra retornar uma função atualizadora de mensagem que é setMensagem,
// dentro dele pegamos o objeto mensagem espalhamos (spread) dentro do objeto, e colocamos uma string vazia, pois nada foi digitado. 
// exemplo: setMensagem({ ...mensagem, ['']: '' }) dentro do value no componente pai, ou ele vai pegar o cell ou a string vazia.
// 10º - criamos uma condição que se o valor digitado não for compativel com a regex, pegamos o objeto mensagem, espalhamos (spread),e atualizamos o estado. 
// exemplo: setMensagem({ ...mensagem, [cell]: 'Telefone inválido ❌' })

const validatePhone = /^\(\d{2}\) \d{5}-\d{4}$/

const useForm = () => {
  const [values, setValues] = useState({})
  const [mensagem, setMensagem] = useState({})

  function handleChange({ target }) {
    const { name, value } = target
    setValues({ ...values, [name]: value })

    if (value === '') return setMensagem({ ...mensagem, [name]: '' })
    if (!validatePhone.test(value)) return setMensagem({ ...mensagem, [name]: 'Telefone inválido ❌' })
      return setMensagem({ ...mensagem, [name]: 'Telefone válido ✅' })
  }
  return { values, setValues, mensagem, setMensagem, handleChange }
}

export default useForm
