
// Componente Button
// recebe 1 propiedade por parametro que é o children, e o restante(rest) das propiedades dentro de ...props.
const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}

export default Button
