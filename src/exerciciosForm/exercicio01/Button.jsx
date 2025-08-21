// Criamos um componente Button
// Esse componente contém:
// 1º propiedade = children. Permitindo escrever dentro do componente.
// 2º propiedade = ...props. Pega as demais propiedades e espalha dentro do componente.
const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}

export default Button
