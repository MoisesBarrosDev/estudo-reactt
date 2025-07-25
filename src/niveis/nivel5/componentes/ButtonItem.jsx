

const ButtonItem = ({ id, comprado, deleteProduct }) => {
  function handleClick() {
    deleteProduct(id)
  }
  return (
    <>
      {!comprado && (
        <button style={{ margin: '.5rem' }} onClick={handleClick}>Deletar Produto</button>
      )}
    </>
  )
}

export default ButtonItem
