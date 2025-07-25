// Importa os hooks do React para lidar com estado (useState) e efeitos colaterais (useEffect)
import { useEffect, useState } from 'react'

// Importa o componente de botão reutilizável
import Button from './Button'

// Importa o componente de parágrafo reutilizável
import Paragraph from './Paragraph'

// Importa o componente de título reutilizável
import Title from './Title'

// Importa a função desacoplada que busca um produto da API pelo nome
import { buscarProdutoPorNome } from './api'

// Componente funcional Produto
const Produto = () => {
  // Declara o estado local "produto", que começa como null. Usado para armazenar os dados do produto buscado
  const [produto, setProduto] = useState(null)

  // Função chamada ao clicar em um botão. Busca um produto com base no atributo data-produto do botão
  const handleClick = async (event) => {
    // Pega o nome do produto do botão clicado (via atributo data-produto)
    const nomeDoProduto = event.currentTarget.dataset.produto

    // Chama a função para buscar os dados do produto na API
    const produtoBuscado = await buscarProdutoPorNome(nomeDoProduto)

    // Se a resposta for válida, atualiza o estado e salva no localStorage
    if (produtoBuscado) {
      setProduto(produtoBuscado) // Atualiza o estado com os dados do produto
      localStorage.setItem('produto', nomeDoProduto) // Salva o nome do produto no localStorage para persistência
    }
  }

  // useEffect roda apenas uma vez (na montagem do componente), porque o array de dependências está vazio []
  useEffect(() => {
    // Lê o nome do produto salvo anteriormente no localStorage (se houver)
    const produtoSalvo = localStorage.getItem('produto')

    // Se existe um nome salvo, busca os dados completos do produto
    if (produtoSalvo) {
      // Cria uma função assíncrona imediatamente invocada para usar await dentro do useEffect
      (async () => {
        try {
          const produtoBuscado = await buscarProdutoPorNome(produtoSalvo) // Busca o produto salvo
          if (produtoBuscado){
            setProduto(produtoBuscado) // Atualiza o estado com o produto recuperado
          } 
        } catch (error) {
          console.error('Erro ao buscar produto salvo:', error) // Exibe erro no console, se falhar
        }
      })()
    }
  }, []) // Array vazio: executa só uma vez, na montagem

  // JSX que será renderizado na tela
  return (
    <>
      {/* Exibe o título com o nome do produto atual, ou uma mensagem padrão se nenhum estiver selecionado */}
      <Title>Preferencia : {produto ? produto.nome : 'Nenhuma Selecionada'}</Title>

      {/* Container com os botões de produtos. Possui espaçamento entre os itens */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        {/* Botões com data-produto definidos. Ao clicar, chamam handleClick */}
        <Button data-produto='notebook' onClick={handleClick}>Notebook</Button>
        <Button data-produto='smartphone' onClick={handleClick}>Smartphone</Button>
      </div>

      {/* Se houver produto carregado, exibe o nome e o preço */}
      {produto && (
        <div>
          <Paragraph>{produto.nome}</Paragraph> {/* Exibe o nome do produto */}
          <Paragraph>{produto.preco}</Paragraph> {/* Exibe o preço do produto */}
        </div>
      )}
    </>
  )
}

// Exporta o componente para uso em outros arquivos
export default Produto
