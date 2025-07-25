// Nessa aula vamos aprender sobre o React Hooks. Em específico o React.useState

import { useState } from "react"

// Estado
// O estado de uma aplicação representa as características dela naquele momento.
// Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc.

// perceba que nesse codigo abaixo não vai renderizar o botão novamente , mesmo que você esteja modificando  a variavel, 
// pra isso que existe os hooks veja no outro  topíco.
const App = () => {
  let ativo = true

  function handleClick() {
    ativo = !ativo
    console.log(ativo)
  }
  return (
    <>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </>
  )
}

// export default App

// Hooks
// Os Hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais.
// Isso antes só era possível com classes.
// useState
// O useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de
// dado como strings, arrays, números, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para 
// modificarmos o estado do primeiro valor.
// Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, 
// serão renderizados novamente e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React.
const App1 = () => {
  // O primeiro valor que estamos desestruturando, é o valor inicial do hook useState, que é o false, 
  // o setAtivo é uma função.
  const [ativo, setAtivo] = useState(false)

  function handleClick() {
    // Aqui estamos chamando a função setAtivo, e colocando dentro dela o valor inicial que é 'false', oque esse "!" faz?
    // ele pega o valor inicial , e muda , o valor inicial é 'false', quando a função handleClick, for chamada dentro do evento 
    // onclick vai mudar o estado inicial do componente, e ao inves de receber 'false', vai receber true, e oque acontece?
    // dentro da tag button esta  recebendo uma condição {ativo ? 'Ativo' : 'Inativo'}, ele vai olhar pro estado atual do handleClick,
    // e vai chamar o ativo, se for 'true', vai renderizar o componente automaticamente pra 'Ativo', se for 'false', vai retornar 'Inativo'
    setAtivo(!ativo)

  }
  return (
    <>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </>
  )
}

// export default App1


// Múltiplos Estados
// Não existem limites para o uso do useState, podemos definir diversos no mesmo componente.
const App2 = () => {
  // Dica: use o mesmo estado apenas quando os dados forem sempre modificados juntos.
  // Caso contrário, se mudam separadamente (como "ativo" e "dados" aqui), mantenha estados separados.
  const [ativo, setAtivo] = useState(false)
  const [dados, setDados] = useState({ nome: 'Andre', idade: 30 })

  function handleClick() {
    setAtivo(!ativo)
    setDados({ ...dados, faculdade: 'Possui Faculdade' })
  }
  return (
    <>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>

      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </>
  )
}
// export default App2

// Props
// Podemos passar o estado e a função de modificação como propriedades para outros elementos.
import ButtonModal from "./ButtonModal"
import Modal from "./Modal"
const App3 = () => {
  const [modal, setModal] = useState(false)
  // Reatividade
  // Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela que garante a reatividade 
  // dos componentes.
  const [items, setItems] = useState('1º-Item')
  function handleClick() {
    setItems('2º-Item')
  }
  return (
    <>
      <p>{items}</p>
      <button onClick={handleClick}>clicar</button>
      <ButtonModal setModal={setModal} />
      <Modal modal={modal} setModal={setModal} />
    </>
  )
}
// export default App3


// Callback
// Podemos passar uma função de callback para atualizar o estado. A função de callback recebe um parâmetro que representa o valor
//  anterior e irá modificar o estado para o valor que for retonado na função.
const App4 = () => {
  const [modal, setModal] = useState(false)
  // Reatividade
  // Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela que garante a reatividade 
  // dos componentes.
  const [items, setItems] = useState('1º-Item')
  function handleClick() {
    setItems('2º-Item')
  }
  return (
    <>
      <p>{items}</p>
      <button onClick={handleClick}>clicar</button>
      <ButtonModal setModal={setModal} />
      <Modal modal={modal} setModal={setModal} />
    </>
  )
}
export default App4

// Callback Valor Inicial
// A definição do estado inicial também pode ser feita com um callback.

// React.StrictMode
// O modo estrito invoca duas vezes a renderização do componente, quando o estado é atualizado. Assim é possível identificarmos 
// funções com efeitos coláterais (side effects) e eliminarmos as mesmas.

// Funções com efeitos coláterais são aquelas que modificam estados que estão fora das mesmas.

