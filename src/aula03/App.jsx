// Nessa aula vamos aprender sobre componentes

// Componentes : O ideal é dividir o aplicativo em pequenos componentes para facilitar a manutenção do mesmo. 
// Iremos trabalhar durante o curso com componentes funcionais.

// Interface
// Não existe limite para a composição de componentes, eles podem ser desde componentes gerais como Header e Footer, 
// até micro componentes como Input e Button.

// Return
// Um componente deve sempre retornar algo. O retorno pode ser qualquer tipo de dado aceitado pelo JSX 
// (string, array, um elemento JSX, null e etc).

// React.Fragment
// Um componente deve sempre retornar um elemento único no return. Caso você deseje retornar mais de um elemento,
//  envolva os mesmos em uma div ou dentro do <React.Fragment></React.Fragment> ou <></>

// O ideal é sempre colocar um nome único em cada componente!! Para que Você saiba Oque cada componente é e seja 
// mais facil na hora de da manuntenção! 


// Aqui estamos importando os componentes Header, Form e  Footer. 
import Header from "./Header"
import Form from "./form/Form"
import Footer from "./Footer"


// Aqui criamos um componente Test, que tem uma const que está recebendo true, colocamos uma condição. 
// Essa condição se for verdadeira vai retornar Um <p> com um texto, se for falso vai retornar nada, pois está retornando "null".
const Test = () => {
  const active = true
  
  if (active) {
    return <p>Teste</p>
  } else {
    return null
  }
}

// Aqui é A estrutura principal do nosso projeto <App/>, Nele está sendo inserido 4 componentes! <Test/> <Header/>, <Form/>, <Form/> e <Footer/>
const App = () => {
  return (
    <>
      <Test />
      {/* Não existe problema caso queira a duplicação de componentes!! */}
      <Header />
      <Form />
      <Form />
      <Footer />
    </>
  )
}

// Estamos exportando o Componente App que está contendo outros componentes!
export default App