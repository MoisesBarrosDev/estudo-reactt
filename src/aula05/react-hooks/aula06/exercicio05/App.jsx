// ✅ Exercício 5 – Hook de formulário (useFormInput)
// 🎯 Objetivo:
// Criar um hook useFormInput que facilite o controle de inputs de formulário.

// ✅ Requisitos:
// O hook deve receber um valor inicial (ex: string vazia).

// Deve retornar:

// O valor atual do campo.

// Uma função onChange que atualiza esse valor com event.target.value.

import useFormInput from './aula05/react-hooks/aula06/exercicio05/useFormInput'

const App = () => {
  const [valor, handleOnChange] = useFormInput()
  console.log(valor)
  return (
    <div>
     <input type="text" onChange={handleOnChange} value={valor} />
    </div>
  )
}

export default App
