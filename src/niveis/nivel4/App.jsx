// 🐔 Nível 4 – Componentes + props
// Exercício 4: Lista de produtos com componente Produto
// ✅ Enunciado:
// Crie um componente Produto que recebe via props:
// nome
// preco
// descricao
// No componente App, crie um array de produtos.
// Mostre a lista com .map().
// Para cada produto, renderize o componente Produto passando as props.
// Mostre nome, preço e descrição.


import Title from "./Title"
import ProdutosItem from "./ProdutosItem"

const produtosInicias = [
  { id: 1, nome: 'Arroz', preco: 'R$20,00', descricao: 'Arroz Branco', comprado: false },
  { id: 2, nome: 'Feijão', preco: 'R$9,00', descricao: 'Feijão Marrom', comprado: false },
  { id: 3, nome: 'Batata Inglesa', preco: 'R$4,00', descricao: 'Legumes', comprado: false },
  { id: 4, nome: 'Macarrão', preco: 'R$7,00', descricao: 'Macarrão Parafuso', comprado: false },
  { id: 5, nome: 'Nescau', preco: 'R$10,00', descricao: 'Achocolatado', comprado: false },
  { id: 6, nome: 'Ketchup', preco: 'R$25,00', descricao: 'Helmas', comprado: false },
  { id: 7, nome: 'Batata Palha', preco: 'R$4,00', descricao: 'Batata fina', comprado: false },
  { id: 9, nome: 'Coca-Cola', preco: 'R$10,00', descricao: 'Guaraná', comprado: false },
  { id: 10, nome: 'Tomate', preco: ' R$30,00', descricao: 'Legumes', comprado: false },

]
const App = () => {

  const produtos = produtosInicias


  return (
    <div>
      <Title>Produtos de Mercado</Title>
      <ul>
        {produtos.map((produto) => (
          <ProdutosItem key={produto.id} {...produto}  />
        ))}
      </ul>
    </div>
  )
}

export default App
