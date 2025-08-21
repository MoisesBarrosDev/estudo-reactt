// Componente Input
// Recebe por parametro 4 propiedades: id,label,onChange,value e o restante que tiver está dentro de ...props.
const Input = ({ id, label, onChange, value, type, placeholder, mensagem }) => {
  const mensagensSucesso = ['Nome válido!', 'Email válido!', 'Senha válida!'];
  const isSuccess = mensagensSucesso.includes(mensagem);
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}

      />

      <span style={{ color: isSuccess ? 'green' : 'red' }}>{mensagem}</span>

    </>
  )
}

export default Input
