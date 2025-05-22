// Aqui abaixo estamos importando os 2 componentes , <Button> e <Input>.
import Button from "./Button"
import Input from "./Input"

// Aqui criamos o Componente Form, que esta contendo a tag <form> dentro dela tem 2 Componentes (Input).
// pegamos a propiedade 'label' e colocamos o valor dela de 'Email', pegamos a propiedade 'id' e colocamos o valor email 
// para quando o label for clicado se conter o mesmo id entra no input, colocamos o required e ele vai entrar no ...rest
const Form = () => {
  return (
    <>
      <form style={{ margin: '1rem 0' }}>
        <Input required id="email" label="Email"  />
        <Input type='password' id="password" label="Password"  />
        <Button text="Submit" type="submit" />
      </form>
    </>
  )
}

export default Form
