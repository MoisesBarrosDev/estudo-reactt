// Aqui está oque é cada parametro do componente Input.  

// label => contém o nome do tipo do input.
// id => contém o id do tipo do input.
// onChange => contém a função que atualiza o estado, chamada de handleChange
// value => contém o valor do que o usuario digitou.
// ...props => contém as demais propiedades, ele pega o restante das propiedades (rest)

const Input = ({ label, id, onChange, value, ...props }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  )
}

export default Input
