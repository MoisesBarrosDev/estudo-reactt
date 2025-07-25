import SpanProducts from "./SpanProducts"



const ProdutosItem = ({ nome, preco, descricao }) => {
  return (
    <li style={{ listStyle: 'none' }}>
      <SpanProducts nome={nome} preco={preco} descricao={descricao} />
    </li>
  )
}

export default ProdutosItem
