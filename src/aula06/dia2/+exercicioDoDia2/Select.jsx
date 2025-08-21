// Aqui está oque é cada parametro do componente Select.  

// options => contém um array com os valores das opções.
// onChange => contém a função que atualiza o estado, chamada de handleChange
// value => contém o valor que foi selecionado pelo o usuario.
// ...props => contém as demais propiedades, ele pega o restante das propiedades (rest)

const Select = ({ options, onChange, value,...props }) => {
  return (
    // aqui o value do select está no mesmo valor que primeiro value do option, já que o value do select o estado dele é '' por padrão.
    <select value={value} onChange={onChange} {...props}>
      {/* esse Selecione do option, vai ficar em primeiro, mesmo com a propiedade disabled, pois o value do select chama ele. */}
      <option value='' disabled>Selecione</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  )
}

export default Select
