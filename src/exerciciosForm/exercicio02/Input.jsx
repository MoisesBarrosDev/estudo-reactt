// Componente Input
// Recebe por parametro 4 propiedades: id,label,onChange,value e o restante que tiver está dentro de ...props.
const Input = ({ id, label, onChange, value, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
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
