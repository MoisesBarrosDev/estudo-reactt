// 🦅 Nível 5 – useState + filter + remover item
// 🧠 Exercício 5: Carrinho de compras
// Crie uma aplicação de carrinho simples.
// ✅ Requisitos:
// Use um estado com um array de produtos (cada produto com id, nome e preco).
// Mostre a lista com .map().
// Cada produto deve ter um botão "Remover".
// Ao clicar no botão, remova o produto do carrinho usando filter.


// Dica: setEstado(produtos.filter(...))





const produtosInicias = [
  { id: 1, nome: 'Arroz', preco: 'R$20,00', comprado: false },
  { id: 2, nome: 'Feijão', preco: 'R$9,00', comprado: false },
  { id: 3, nome: 'Batata Inglesa', preco: 'R$4,00', comprado: false },
  { id: 4, nome: 'Macarrão', preco: 'R$7,00', comprado: false },
  { id: 5, nome: 'Nescau', preco: 'R$10,00', comprado: false },
  { id: 6, nome: 'Ketchup', preco: 'R$25,00', comprado: false },
  { id: 7, nome: 'Batata Palha', preco: 'R$4,00', comprado: false },
  { id: 9, nome: 'Coca-Cola', preco: 'R$10,00', comprado: false },
  { id: 10, nome: 'Tomate', preco: ' R$30,00', comprado: false },

]


import { useState } from "react"
import ProdutosItem from "./ProdutosItem"

const App = () => {
  const [produtos, setProdutos] = useState(produtosInicias)


  function deleteProducts(id) {

    setProdutos(produtos.filter((produto) => produto.id !== id))
  }

  return (
    <div>
      <ul>
        {produtos.map((produto) => (
          <ProdutosItem key={produto.id} {...produto} deleteProduct={deleteProducts} />
        ))}
      </ul>
    </div>
  )
}

export default App
