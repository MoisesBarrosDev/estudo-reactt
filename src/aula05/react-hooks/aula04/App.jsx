// React Hooks
// useMemo e useCallback
// Hook	Objetivo declarado
// useMemo	Memorizar um valor
// useCallback	Memorizar uma função


// Qual a diferença entre useMemo(() => funcao, deps) e useCallback(funcao, deps)?
// ✔️ useMemo:
// Usado para memorizar valores retornados de uma função (ex: resultado de um cálculo ou filtro).
// É útil quando o retorno de uma operação pesada precisa ser salvo e não refeito a cada render.

// ✔️ useCallback:
// Usado para memorizar a própria função, ou seja, o callback em si.
// Evita que a função seja recriada a cada render — isso é útil especialmente ao passar funções para componentes filhos, 
// pois evita renderizações desnecessárias.


// useMemo
// Memoriza um valor, evitando a recriação do mesmo todas as vezes em que um componente for atualizado. 
// Recebe um callback e uma array de dependências.

// o useMemo só executa uma única vez a função, que é na criação e o valor dele vai ficar salvo na memoria, ele serve para uma 
// operação lenta de JS exemplo: pra algo matematico, fazer uma soma de um array com milhões de itens, ou pra dados geralmente
// imutaveis, e para a memorização desses dados. 

import React, { useCallback, useMemo, useState } from 'react'

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10
  }
  return c
}

const App1 = () => {
  const [contar, setContar] = useState(0)

  // const valor = useMemo(() => {
  //   const localStorage = window.localStorage.getItem('produto')
  //   console.log('Aconteceu o memo')
  //   return localStorage
  // }, [])
  const t1 = performance.now()
  const valor = useMemo(() => operacaoLenta(), [])


  console.log(performance.now() - t1)



  const handleClick = () => {
    setContar((c) => c + 1)
  }
  return (
    <button onClick={handleClick}>{contar}</button>
  )
}

// export default App1



// useCallback
// Permite definirmos um callback e uma lista de dependências do callback.Esse callback só será recriado se essa lista de dependências
// for modificada, caso contrário ele não irá recriar o callback.

// esse new Set(), é uma caixa que so aceita um item dentro dela. nada mais que isso.
const set1 = new Set()
const set2 = new Set()

// Aqui abaixo estamos criando um componente Produto para mostrar a diferença de performace, uma função normal, e outra com useCallback 
// o Hook useCallback serve para memorizar funções entre as renderizações de um componente, ele é útil para otimizar performace, evitando
// que funções sejam recriadas desnecessariamente quando o componente renderizar.
const Produto = () => {

  const func1 = () => {
    console.log('Test')
  }

  const func2 = useCallback(() => {
    console.log('Test')
  }, [])

  // Aqui estamos adicionando dentro da caixa 2 funções, uma que quando renderiza que no caso é a func1, ela recria a função assim que 
  // o componente renderizar, logo se houver diversas renderizações, ela recria as funções o tempo inteiro.  
  set1.add(func1)
  // Já aqui estamos adicionando a função func2 dentro da caixinha, logo se o componente renderizar diversas vezes , ela não vai renderizar
  // a função outra vez, pois está com o useCallback, que ele serve para que as funções não sejam recriadas.
  set2.add(func2)

  console.log('set1:', set1)
  console.log('set2:', set2)

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  )
}

const App = () => {
  const [contar, setContar] = useState(0)

  return (
    <div>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  )
}

export default App
