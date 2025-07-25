import Title from './Title'
import Product from './Product';

const Products = () => {
  const products = [
    { id: 1, nome: "Camisa", preco: "R$ 49,90", imagem: "https://via.placeholder.com/150" },
    { id: 2, nome: "Calça", preco: "R$ 89,90", imagem: "https://via.placeholder.com/150" },
    { id: 3, nome: "Tênis", preco: "R$ 129,90", imagem: "https://via.placeholder.com/150" }
  ];

  return (
    <section>
      <Title titulo='Produtos' />

      {products.map(({ nome, id, preco, imagem }) => (
        <Product key={id} nome={nome} preco={preco} imagem={imagem} />
      ))}
    </section>
  )
}

export default Products
