// Checkbox
// O estado do checkbox está relacionado ao checked.


import React, { useState } from 'react'

const App = () => {
  //  Checkbox simples (Aceito os termos)
  // Aqui o estado é um valor booleano. Ou seja, ou está marcado (true), ou desmarcado (false).
  const [termos, setTermos] = useState(false)

// event.target.value: o texto/valor atribuído ao checkbox (value="azul" por exemplo).

// event.target.checked: um booleano, dizendo se está marcado (true) ou desmarcado (false).


  function handleChange({ target }) {
    // target.checked retorna true se estiver marcado, false se desmarcado
    setTermos(target.checked)
  }

  //  Checkbox múltiplo (seleção de cores)
  // Aqui o estado é um array. Podemos marcar várias opções ao mesmo tempo (ex: azul, vermelho, etc.)
  const [cores, setCores] = useState(['vermelho']) // vermelho começa marcado

  function handleChangee({ target }) {
    if (target.checked) {
      // Se o checkbox foi marcado, adicionamos o valor ao array
      setCores([...cores, target.value])
    } else {
      // Se foi desmarcado, removemos o valor do array
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }

  // Função que retorna true se a cor estiver dentro do array `cores`
  function checkedColor(cor) {
    return cores.includes(cor)
  }

  return (
    <form>
      {/* Checkbox simples (booleano) */}
      {/* Usamos checked={termos} porque só há dois estados possíveis: marcado ou não */}
      <label>
        <input
          type="checkbox"
          value="Termos" // valor não está sendo usado aqui
          checked={termos}
          onChange={handleChange}
        />
        Aceito os termos
      </label>

      {/*  Checkbox múltiplo (array de valores) */}
      {/* Aqui cada checkbox representa uma cor, e podemos marcar várias ao mesmo tempo */}

      <label>
        <input
          type="checkbox"
          value="azul"
          onChange={handleChangee}
        // Não precisa de checked porque azul começa desmarcado
        />
        azul
      </label>

      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={checkedColor('vermelho')} // vermelho começa marcado
          onChange={handleChangee}
        />
        vermelho
      </label>
    </form>
  )
}

export default App
