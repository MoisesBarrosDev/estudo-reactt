import Paragraph from "./Paragraph"

const SpanItem = ({ nome, preco }) => {
  return (
    <span>
      <Paragraph>Nome: {nome} / Preço: {preco}</Paragraph>
    </span>
  )
}

export default SpanItem
