// ✅ Exercício 9 – useHover
// 🎯 Objetivo:
// Criar um hook que detecta se um elemento está sendo "hovered" (mouse por cima).

// Requisitos:

// O hook deve retornar:

// Uma ref para ser usada no elemento HTML.

// Um valor booleano indicando se o mouse está sobre o elemento ou não.


import useHover from './aula05/react-hooks/aula06/exercicio09/useHover'

const App = () => {
  const [ref, hovering] = useHover()

  return (
    <div
      ref={ref}
      style={{
        width: '200px',
        height: '100px',
        background: hovering ? 'green' : 'gray',
        color: 'white',
        textAlign: 'center',
        lineHeight: '100px',
        transition: '0.3s',
      }}
    >
      {hovering ? '👀 Hover!' : 'Passe o mouse'}
    </div>
  )
}

export default App

