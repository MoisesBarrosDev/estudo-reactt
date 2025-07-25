// React Hooks
// Custom Hooks

// useLocalStorage
// Podemos criar nossos próprios hooks, assim evitamos a repetição de código. Todo custom hook deve começar com a palavra use.
//  Exemplo: useNomeDoHook. Podemos retornar o que quisermos do hook, seja um valor único, uma array ou um objeto.


import useLocalStorage from './aula05/react-hooks/aula06/useLocalStorage'

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '')

  function handleClick({target}) {
   setProduto(target.innerText)
  }
  return (
    <div>
      <p>Produto preferido: {produto}</p>
    <button onClick={handleClick}>notebook</button>
    <button onClick={handleClick}>smartphone</button>
    </div>
  )
}

export default App
