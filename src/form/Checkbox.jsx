// options -> array com as opções do checkbox (ex: ['JS', 'Java', 'C#'])
// value -> estado atual (array) com as linguagens selecionadas, começa vazio []
// setValue -> função que atualiza o estado value

const Checkbox = ({ options, value, setValue }) => {
  // Essa função verifica se o valor foi marcado,se foi, pega os valores antigos do array espalha ali dentro e,
  // coloca o atual valor dentro do array, assim o estado linguagem espalha oque já tem e coloca a que foi marcada.
  // Se foi desmarcado, filtre a linguagem e retorne um novo array, removendo a que foi desmarcada.
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value])
    } else {
      setValue(value.filter((option) => option !== target.value))
    }
  }

  // checkedLinguage(linguage) retorna true se a linguagem já estiver no array value.
  // Serve para controlar se o checkbox aparece marcado (checked) ou não.
  function checkedLinguage(linguage) {
    return value.includes(linguage)
  }
  return (
    <>
      {options.map((option) => (
        <div key={option}>
          <label htmlFor={option}>{option}</label>
          <input
            type="checkbox"
            name="linguagem"
            id={option}
            value={option}
            onChange={handleChange}
            checked={checkedLinguage(option)}
          />
        </div>
      ))}
    </>
  )
}

export default Checkbox
