function Bugado() {
  const pessoa = null
  return <h3>{pessoa.nome}</h3> // Erro de acesso a propriedade
}

export default Bugado
