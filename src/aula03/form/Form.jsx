// Aqui abaixo estamos importando 2 componentes o Input e o Button
import Input from "./Input"
import Button from "./Button"
// Aqui estmaos criando um componente Form, que vai retornar um formulário!!
const Form = () => {
  return (
    // Aqui estamos colocando a tag form, que está contendo a tag <p> e <label>. Criamos e colocamos dentro da tag <p> a tag <label> 
    // e colocamos o Componente <Input>  dentro de  <p> veja que criamos 2 tags <p> contendo o mesmo Componente , não dá problema! 
    // fora da tag <p> ainda dentro da tag <form> colocamos Outro Componente que é o <Button>.
    <form>
      <p>
      <label htmlFor="nome">Nome</label>
      <Input />
      </p>
      
      <p>
        <label htmlFor="mail">Email</label>
        <Input />
      </p>

      <Button />
    </form>
  )
}
// Por fim estamos exportando o Componente Form que está contendo outros componentes dentro dele, para que possamos usar em outro lugar!
export default Form
