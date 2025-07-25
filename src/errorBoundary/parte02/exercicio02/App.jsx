// 🧪 Exercício 2 – Erro condicional com estado
// 🎯 Objetivo:
// Criar um componente que só lança erro ao atingir 5 cliques, para treinar a lógica de erro condicional com useState.

// ✅ Regras:
// Crie um componente chamado ContadorPerigoso.

// Ao clicar no botão, o contador soma 1 (useState).

// Se o contador chegar a 5, deve lançar throw new Error("O contador bugou ao chegar em 5!").

// Use ErrorBoundary para capturar esse erro e mostrar o ErrorFallback.

// O Fallback deve exibir a mensagem de erro e um botão "Tentar novamente" que reseta tudo.

// 💡 Dicas:
// O erro precisa estar no corpo do componente, para ser capturado pelo ErrorBoundary.

// Use resetErrorBoundary no botão do Fallback para resetar.

// Deixe o contador visível na tela antes de dar erro.


import { ErrorBoundary } from 'react-error-boundary'
import ContadorPerigoso from './errorBoundary/parte02/exercicio02/ContadorPerigoso'
import ErrorFallback from './errorBoundary/parte02/exercicio02/ErrorFallBack'

const App = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ContadorPerigoso />
      </ErrorBoundary>
    </div>
  )
}

export default App
