import { useState } from "react"

// A variavel types é um objeto.
//  name contem : regex e a mensagem de error.
const types = {
  nome: {
    regex: /^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)+$/,
    mensagem: 'Preencha um nome válido!'
  }
}

// Custom hook
const useForm = () => {
  // Estado para valores, inicializa como objeto vazio.
  const [values, setValues] = useState({})
  // Estado para errors, inicializa como objeto vazio.
  const [error, setError] = useState({})

  // Função validateCampo, é uma função com validações que recebe 2 propiedades por parametro .
  const validateCampo = (name, value) => {
    // Esse if verifica, se o valor que está vindo no campo é igual a uma string vazia caso seja,
    // retornamos a função setError, pegando o prev=> que sginifca o estado antigo dele que é {}, espalhamos 
    // dentro da função atualizadora de erros,e chamamos o [name] do parametro da função e colocamos uma mensagem la dentro 
    // que na real fica assim error={nome:'Preencha um valor!'}.
    if (value === '') return setError(prev => ({ ...prev, [name]: 'Preencha um valor!' }))

    // Nesse if verifica , se o tipo for nome... .
    if (types[name]) {
      // Aqui em baixo é :
      // se o tipo vindo do parametro que é o nome, pegue a regex dentro do type e faça o test no valor recebido por parametro da função
      // validateCampo.         
      // se ler assim: se o tipo nome, não passar no test da regex, retorne a mensagem que está dentro do objeto types.
      if (!types[name].regex.test(value)) {
        setError(prev => ({ ...prev, [name]: types[name].mensagem }))
        // ATENÇÃO: É NESCESSÁRIO COLOCAR ESSE RETURN FALSE DEPOIS DESSA VERIFICAÇÃO.
        // PORQUE? Por que se não colocar ele, ele ignora a verificação de cima, e assim que o usuário clica qualquer tecla mesmo que
        // não seja compativel com a regex apareçe  uma mensagem com o :'Nome válido!'.
        return false
      }
      // Caso passe da verficação acima aparece a mensagem com 'Nome válido!' .
      setError(prev => ({ ...prev, [name]: 'Nome válido!' }))

    }


  }


  // Essa é a função que estamos dessestruturando o target
  function handleChange({ target }) {
    const { name, value } = target
    // Pegamos os valores antigos do objeto espalhamos e colocamos o name para receber o value.
    // Esse name contém o nome que está sendo recebido no value, e o value o valor que está sendo digitado,
    // ficando assim {nome:'valor digitado'}
    setValues({ ...values, [name]: value })
    // essa função está esperando receber 2 parametros, pegamos o name e o value .
    validateCampo(name, value)
  }

  // Função para limpar os campos assim que o Usuario de o submit
  const limparCampos = () => {
    setValues({})
    setError({})
  }
  // Retornamos um objeto contendo tudo desse Custom hook
  return {
    values,
    setValues,
    error,
    setError,
    handleChange,
    limparCampos
  }
}

export default useForm
