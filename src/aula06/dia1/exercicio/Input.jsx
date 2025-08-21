
// Componente funcional chamado Input
// Recebe as props:
// - label: texto do rótulo do input (e também usado como id)
// - setValue: função que vai atualizar o estado lá do componente pai (App)
// - value: valor atual do input (vindo do estado do App)
// - ...props: pega todas as outras props (type, name, required, etc.)
const Input = ({ label, setValue, value, ...props }) => {

  // handleChange vai rodar toda vez que o usuário digitar no input.
  // O React envia o evento para essa função, e desestruturamos { target } para acessar o input que disparou.
  function handleChange({ target }) {
    // Chama a função setValue (que veio do App) passando o valor digitado.
    // Isso atualiza o estado do App, que por consequência atualiza o 'value' do input.
    // Essa é a essência de um INPUT CONTROLADO.
    setValue(target.value)
  }

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        {...props}
        value={value}
        onChange={handleChange}
      />
    </>
  )
}

export default Input
