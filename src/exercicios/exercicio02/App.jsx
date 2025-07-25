import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos"

const Teste = () => {
  const { pathname } = window.location;


  let Component;
  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }
  return (

    <section>
      <Header />
      <Component />
    </section>

  )
}


export default Teste