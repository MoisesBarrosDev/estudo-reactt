// Aqui está oque é cada parametro do componente Input.  

// label => contém o nome do que vai ficar em cima do checkbox.
// id => contém o valor 'termos' que vai conectar no texto acima do checkbox.
// onChange => contém a função que atualiza o estado, chamada de handleChange
// value => contém o valor do que o usuario digitou.
// checked => contém o valor que verifica se o checkbox foi marcado.
// ...props => contém as demais propiedades, ele pega o restante das propiedades (rest)

const Checkbox = ({ label, id, onChange, checked, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        onChange={onChange}
        checked={checked}
        {...props}
      />
    </>
  )
}

export default Checkbox
