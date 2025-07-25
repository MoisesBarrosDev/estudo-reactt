
// 🔧 Componentes esperados:
// ListaDeUsuarios.jsx


// Recebe dados como prop

// Mostra a <ul> com os nomes dos usuários (como você já fez antes)

// Se dados estiver vazio ou null, não renderiza nada

const ListaDeUsuarios = ({ dados }) => {
  if (!dados) return null

  return (
    <ul>
      {dados.map((usuario) => (
        <li key={usuario.id}>{usuario.username}</li>
      ))}
    </ul>
  )
}

export default ListaDeUsuarios

