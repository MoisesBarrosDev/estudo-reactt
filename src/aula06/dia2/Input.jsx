  // Componente funcional Input
  // Props:
  // - label: texto do rótulo
  // - id: usado para linkar o label ao input (acessibilidade)
  // - onChange: função do pai (App) que atualiza o estado do form
  // - value: valor atual do campo (controlado pelo estado)
  // - ...props: pega todas as props extras (type, name, required, etc.)
const Input = ({ label, id, onChange, value, ...props }) => {

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        id={id}
        onChange={onChange}
        value={value}
        {...props}
      />
    </>
  )
}

export default Input
