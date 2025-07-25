// 🧪 Exercício 3 – Vários componentes, um erro isolado
// 🎯 Objetivo:
// Ter 3 componentes diferentes na tela (A, B, C), sendo que apenas B pode dar erro.
// O ErrorBoundary deve proteger apenas o componente B, sem afetar A ou C.

// ✅ Regras:
// Crie 3 componentes: ComponenteA, ComponenteB, ComponenteC.

// ComponenteB terá um botão "Disparar erro" que, ao clicar, lança um erro com throw new Error(...).

// Envolva apenas o ComponenteB com ErrorBoundary.

// ComponenteA e ComponenteC devem continuar aparecendo normalmente, mesmo quando B der erro.

// O Fallback de erro deve mostrar a mensagem e botão para "Tentar novamente".



import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ErrorFallback'
import ComponenteA from './errorBoundary/parte02/exercicio03/ComponenteA'
import ComponenteB from './errorBoundary/parte02/exercicio03/ComponenteB'
import ComponenteC from './errorBoundary/parte02/exercicio03/ComponenteC'

const App = () => {
  return (
    <div>
      <ComponenteA />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ComponenteB />
      </ErrorBoundary>
      <ComponenteC />
    </div>
  )
}

export default App
