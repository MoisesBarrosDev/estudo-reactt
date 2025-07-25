

const CampoDeTextoBugado = ({ texto, setTexto }) => {
  if (texto.toLowerCase() === 'erro') {
    throw new Error('Palavra proibida detectada!')
  }

  function error(event ) {
    setTexto(event.target.value)
  }
  console.log(texto)
  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={error}
      />
    </div>
  )
}

export default CampoDeTextoBugado

