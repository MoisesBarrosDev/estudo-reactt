

const ButtonItem = ({ assistida, id, onClick }) => {
  return (
    <>
      {!assistida && (
        <button style={{ margin: '.5rem' }} onClick={() => onClick(id)}>Marcar como assistida</button>
      )}
    </>
  )
}

export default ButtonItem
