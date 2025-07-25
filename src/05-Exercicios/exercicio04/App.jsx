// ✅ Exercício 4 – Preferência de produto (Ranek API)
// 🎯 Objetivo:
// Reutilizar a lógica de localStorage que você já usou nos exercícios anteriores.

// Usar a API Ranek para buscar dados de um produto.

// Salvar a preferência do usuário (smartphone ou notebook).

// Mostrar o nome e o preço do produto escolhido.

// Ao recarregar a página, o produto preferido já deve aparecer automaticamente.

import Produto from "./Produto"
const App = () => {
  return (
    <div>
      <Produto />
    </div>
  )
}

export default App

