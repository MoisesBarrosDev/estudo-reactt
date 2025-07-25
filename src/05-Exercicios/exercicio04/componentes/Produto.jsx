import Button from './Button'       // Importa o componente Button personalizado
import Title from './Tittle'        // Importa o componente Title personalizado
import Paragraph from './Paragraph' // Importa o componente Paragraph personalizado

import { useEffect, useState } from "react"  // Importa hooks do React para estado e efeitos colaterais

const Produto = () => {
  // Estado que guarda os dados do produto atual (inicialmente nulo)
  const [produto, setProduto] = useState(null)

  // Função que busca o produto ao clicar no botão
  const buscarPordutos = async (event) => {
    // Pega o valor do atributo data-produto do botão clicado
    const nomeDoProduto = event.currentTarget.dataset.produto

    try {
      // Faz a requisição para a API buscando o produto pelo nome
      const responseProdutos = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${nomeDoProduto}`)
      // Transforma a resposta em JSON
      const responseJson = await responseProdutos.json()
      // Atualiza o estado com os dados do produto
      setProduto(responseJson)

    } catch (error) {
      // Caso dê erro na requisição, exibe no console
      console.error('Erro ao buscar produto:', error)
    }
  }



  // useEffect que roda toda vez que o estado produto mudar
  useEffect(() => {
    // ✅ Se existir produto (ou seja, se o usuário tiver escolhido um),
    // ele será salvo no localStorage (que é como se fosse um armário permanente).
    // ⚠️ Mas como o localStorage só aceita texto, usamos JSON.stringify para
    // transformar o objeto em string antes de guardar.
    // ✅ Esse useEffect vai rodar sempre que o produto mudar, mantendo o localStorage atualizado.
    if (produto) {
      // Salva o produto atual no localStorage como string JSON
      localStorage.setItem('product', JSON.stringify(produto))
    }
  }, [produto]) // Executa sempre que produto for alterado


  // useEffect que roda apenas uma vez na montagem do componente
  useEffect(() => {
    // ✅ Esse useEffect roda apenas uma vez, quando o componente é montado (quando a página carrega).
    // Ele serve para buscar o que estava guardado no localStorage da última vez.
    // ✅ Aqui pegamos o valor salvo no localStorage, que está como string (porque foi salvo com JSON.stringify).
    // Pega o produto salvo no localStorage (se existir)
    const produtoSave = localStorage.getItem('product')
    if (produtoSave) {
      // Se tiver produto salvo, transforma de volta de string para objeto e atualiza o estado
      // ✅ Se existir um valor salvo, usamos JSON.parse para transformar
      // a string de volta em objeto (porque queremos usar como estado em React).
      // E colocamos esse valor no estado com setProduto — ou seja, mostramos o produto salvo na vitrine.
      setProduto(JSON.parse(produtoSave))
    }
  }, []) // Array vazio garante execução só na montagem


  // Renderiza o componente
  return (
    <>
      <Title>Produtos</Title> {/* Título da página */}

      <div style={{ display: 'flex', gap: '.5rem' }}>
        {/* Botões que ao clicar chamam buscarPordutos passando o data-produto */}
        <Button data-produto="notebook" onClick={buscarPordutos}>Notebook</Button>
        <Button data-produto="smartphone" onClick={buscarPordutos}>Smartphone</Button>
      </div>

      {/* Se produto existe, mostra nome e preço, senão mostra "Carregando.." */}
      {produto ? (
        <div>
          <Paragraph>{produto.nome}</Paragraph>
          <Paragraph>{produto.preco}</Paragraph>
        </div>
      ) :
        <span>Carregando..</span>
      }
    </>
  )
}

export default Produto
