// Nessa aula vamos falar de propiedades ou props.
// Propriedades
// Assim como uma função pode receber argumentos, podemos também passar argumentos aos componentes.
// Esses são conhecidos como propriedades ou props.


// Children
// Se utilizarmos o componente abrindo e fechando o mesmo, o conteúdo interno deste será acessado através da propriedade children.

// Aqui abaixo criamos um componente que se chama Titulo, e as propiedades que estamos desestruturando 
// e colocando pra retornar no h1, vai receber esses valores na hora de colocar o componente, lembrando 
// que a propiedade do Componente tem que ser o mesmo nome que foi estabelecido pela a mesma!
const Titulo = ({ cor, texto, children }) => {
  return <h1 style={{ color: cor }}>{texto}, {children}</h1>
}

const App = () => {
  return (
    <>
      {/* Aqui abaixo pegamos o componente e colocamos os valores nas props.*/}
      <Titulo cor="red" texto="Meu titulo 1" />
      <Titulo cor="blue" texto="Meu titulo 2" />

      {/* Aqui está um exemplo de children, não esta limitado e pode colocar tag dentro dele também! */}
      <Titulo cor="green" texto="Meu titulo3">Isso é o children
        <p>Test</p>
      </Titulo>


    </>
  )
}


import Form from "./form/Form"
// Rest e Spread
// Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber.

// Abaixo é um coponente que se chama App2 e está recebendo o componente <Form>
const App2 = () => {
return (
  <>
    <Form/>
  </>
)
}

export { App, App2} 