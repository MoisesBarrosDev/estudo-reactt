// 🚀 Exercício 3 – Qual hook usar?
// Você está otimizando este código:

// const total = lista.reduce((acc, item) => acc + item.preco, 0)


// ❓Qual hook usar?
const produtosEmPromocao = useMemo(() => {
  return produtos.filter(produto => produto.promocao === true);
}, [produtos]);

//  useMemo é o hook certo aqui.

// ✔️ Por quê?
// useMemo memoriza um valor computado (ex: produtosEmPromocao) baseado em dependências.

// Se a lista de produtos não mudar, o filtro não será reexecutado, economizando performance.

// O resultado fica salvo na memória, ideal para operações pesadas como .filter() em listas grandes.

// 🧠 Dica de ouro:
// Se você passasse esse filtro como uma função para um componente filho, aí sim você pensaria em useCallback. 
// Mas para filtrar e salvar o resultado, é useMemo.