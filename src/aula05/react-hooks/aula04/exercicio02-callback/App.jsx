// 🚀 Exercício 2 – Recriação desnecessária de função (sem useCallback)

import React, { useCallback, useState } from "react"


// Use useCallback para memorizar funções e evitar que mudem a cada render.

// Use React.memo para evitar re-renderizações de componentes filhos.

// Use new Set() apenas se quiser fazer testes de curiosidade técnica, para ver se suas funções estão sendo recriadas.

const Filho = React.memo(function Filho({ aoClicar }) {

  console.log('Renderizou Filho')
  return <button onClick={aoClicar}>Clique</button>
})

function App() {
  const [contar, setContar] = useState(0)

  const handleClick = useCallback(() => {
    console.log("Clicou")
  }, [])



  return (
    <>
      <Filho aoClicar={handleClick} />
      <button onClick={() => setContar(c => c + 1)}>Contar: {contar}</button>
    </>
  )
}

// ❓Pergunta:
// Por que o componente Filho renderiza toda vez que o botão "Contar" é clicado, e como você pode evitar isso com o hook certo?
// O componente Filho renderiza toda vez que Contar é clicado porque o componente App é re - renderizado, e o Filho também,
// mesmo que a prop aoClicar não mude. Para evitar isso, usamos useCallback para garantir que a função não mude,
//e também envolvemos Filho com React.memo para evitar que ele re - renderize se suas props não mudarem.

export default App