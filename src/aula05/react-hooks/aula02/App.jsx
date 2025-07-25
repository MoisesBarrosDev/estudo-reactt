// React Hooks
// useEffect


// useEffect
// Todo componente possui um ciclo de vida. Os principais momentos acontecem quando o componente é renderizado, atualizado ou destruído. 
// Com o React.useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.


import { useEffect, useState } from "react"
import Produto from "./Produto"

const App = () => {

  const [contar, setContar] = useState(0)

  // Array de Dependências
  // No useEffect podemos definir dois argumentos, o primeiro é a função de callback que será executada, o segundo é uma array com uma 
  // lista de dependências. A lista de dependências serve para informarmos quando o efeito deve ocorrer.
  useEffect(() => {
    console.log('Executou')
    // Uma Array vazia indica que o efeito não possui nenhum dependência,
    // assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado)
    // O efeito ocorre logo após a renderização do mesmo
  }, [])

  // Antes de renderizar e toda vez que atualizar o componente
  console.log('Sempre ocorre, mas antes do useEffect');

  // Agora a dependência está no estado contar,
  // assim sempre que contar for atualizar este efeito será ativado
  useEffect(() => {
    console.log('Toda vez que atualiza o contar');
  }, [contar]);


  //  Dependências Obrigatórias
  //  Se utilizarmos o valor de um hook ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo
  //  como uma dependência na array.
  const titulo = 'Clicou '
  useEffect(() => {
    document.title = titulo + contar;
    // O ESLint irá indicar que você possui uma dependência não declarada (contar)
  }, []);



  // Componente Montou
  // O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados
  // no servidor por exemplo.
  // Múltiplos Efeitos
  // Podemos ter diversos useEffect no nosso código. O ideal é separarmos efeitos diferentes em useEffect diferentes.
  const [dados, setDados] = useState(null)

  useEffect(() => {
    // se o fetch estivesse fora do useEffect, toda vez que o componente
    // fosse atualizado, o mesmo seria executado
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then(reponse => reponse.json())
      .then(json => setDados(json))

  }, [])

  const [ativo, setAtivo] = useState(false)

  return (
    <div>
      {/* Antes de pegarmos os dados e colocar direto na tela precisamos fazer uma verificação, pois se não ele vai pegar os dados atuais.*/}
      {dados &&
        <div>
          <h1>{dados.nome}</h1>
          <p> R$ {dados.preco * contar}</p>
        </div>
      }
      <button onClick={() => setContar(contar + 1)}> Quantidade: {contar}</button>

      <div>
        {ativo && <Produto />}
        <button style={{ margin: '.5rem' }} onClick={() => setAtivo(!ativo)}>Ativar</button>
      </div>
    </div>
  )
}

export default App
