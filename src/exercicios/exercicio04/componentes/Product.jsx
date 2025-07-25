const Product = ({ nome, preco, imagem }) => {
  return (
    <div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
      <img src={imagem} alt={nome} />
      <h1>{nome}</h1>
      <p>{preco}</p>

    </div>
  )
}

export default Product
