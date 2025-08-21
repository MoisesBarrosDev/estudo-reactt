// Criamos um componente input com cada propiedade espesifica.
// e o restante(rest) das propiedades deixo no props
const Input = ({ id, label, onChange, value, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        onChange={onChange}
        value={value}
        // espalhamos(spread) o restante das propiedades deentro do componente.
        {...props}
      />
    </>
  )
}

export default Input
