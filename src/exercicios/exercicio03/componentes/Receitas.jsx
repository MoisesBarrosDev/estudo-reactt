import Titulo from "./Titulo";
import Receita from "./Receita";

const Receitas = () => {

  const receitas = [{ nome: "Bolo de Cenoura", ingredientes: ["3 cenouras médias picadas", "4 ovos", "1 xícara de óleo", "2 xícaras de açúcar", "2 e 1/2 xícaras de farinha de trigo", "1 colher de sopa de fermento"] }]

  return (
    <section>
      <Titulo titulo='Receitas' />

      {receitas.map(({ nome, ...props }) => (
        <Receita key={nome} {...props} />
      ))}
    </section>
  )
}

export default Receitas