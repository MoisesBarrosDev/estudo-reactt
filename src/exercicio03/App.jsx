import Header from "./componentes/Header.jsx"
import Home from "./componentes/Home.jsx"
import Receitas from "./componentes/Receitas.jsx"

const AppCatalogoReceitas = () => {
  const { pathname } = window.location

  let Component;
  if (pathname === '/receitas') {
    Component = Receitas;
  } else {
    Component = Home;
  }

  return (

    <section>
      <Header />
     <Component/>
   
    </section>
  )
}

export default AppCatalogoReceitas