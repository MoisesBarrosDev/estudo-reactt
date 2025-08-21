// o parametro options está recebendo um array com 2 valores.
// o parametro value está recebendo o estado atual do produto que é '' inicialmente.
// o parametro setValue, está recebendo a função atualizadora do produto.
const Select = ({ options, value, setValue }) => {
  // esta função handleChange, pega o valor  que está dentro de produto.
  function handleChange({ target }) {
    setValue(target.value)
  }
  // agora a pergunta que fica é como o estado sabe o valor atualizado? 
  // O evento onChange chama handleChange, que executa setValue com o novo valor do <select>.
  // Isso atualiza o estado no componente pai.
  // esta função handleChange pega o valor selecionado no <select> e atualiza o estado com setValue.
  // dentro do select temos a primeira opsição, que está desabilitada , que se chama selecione, ela so vai ficar selecionada 
  // se colocar o parametro value do select, que vai por parametro '' vazia, e ai pro selecione que está desabilidado , pra deixar ele
  // como inicial, o value do option, tem que ser o mesmo do select, nesse caso é pois o value do select por padrão também é string vazia. 
  return (
    <select value={value} onChange={handleChange}>
      <option value='' disabled>Selecione</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  )
}

export default Select
