
const Receita = ({ nome,  ingredientes  }) => {
  return (
    <div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
      <p>{nome}</p>

      <ul>
        {ingredientes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

    </div>
  )
}

export default Receita
