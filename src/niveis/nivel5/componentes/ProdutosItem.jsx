import SpanItem from "./SpanItem";
import ButtonItem from "./ButtonItem";

const ProdutosItem = ({ nome, preco, id, comprado, deleteProduct }) => {
  return (
    <li style={{ listStyle: 'none' }}>
      <SpanItem nome={nome} preco={preco} />
      <ButtonItem id={id} comprado={comprado} deleteProduct={deleteProduct} />
    </li>
  )
}

export default ProdutosItem
