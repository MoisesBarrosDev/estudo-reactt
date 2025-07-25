
// Carregando.jsx

// Recebe loading como prop

// Se loading for true, exibe "Carregando..."

// Senão, não mostra nada


const Carregando = ({ loading }) => {
  if (loading) return <p>Carregando...</p>
  return null
}

export default Carregando
