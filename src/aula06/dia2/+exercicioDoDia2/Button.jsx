// Aqui está oque é cada parametro do Componente Button

// children => o children é responsavel para que o componente seja generico, assim pode reutilizar ele em outra coisa, 
// e colocar qualquer valor dentro dele.

//...props => nesse caso em especifico este (rest) contém somente o type'submit' 
const Button = ({ children, ...props }) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default Button
