import Paragraph from "./Paragraph"

const SpanProducts = ({ nome, preco, descricao }) => {
  return (
    <span>
      <Paragraph> Produto: {nome}</Paragraph>
      <Paragraph> Preço: {preco}</Paragraph>
      <Paragraph> Descrição: {descricao}</Paragraph>
    </span>
  )
}

export default SpanProducts
