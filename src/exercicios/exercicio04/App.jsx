import Header from "./componentes/Header"
import Products from "./componentes/Products"
import Sobre from "./componentes/Sobre"
import Home from "./componentes/Home"


const PageProducts = () => {
  const { pathname } = window.location
  let Component;

  if (pathname === '/products') {
    Component = Products
  } else if (pathname === '/sobre') {
    Component = Sobre
  } else {
    Component = Home
  }
  return (
    <section>
      <Header />
      <Component />
    </section>
  )
}

export default PageProducts