
// 🎯 Reset automático do erro com resetKeys
// 🧪 Exercício 4 – Reset automático com resetKeys
// ✅ Objetivo:
// Fazer com que o erro seja resetado automaticamente quando um certo estado mudar, sem precisar clicar no botão de “Tentar novamente”.


// 📌 Regras:
// Crie um componente CampoDeTextoBugado.

// Ele deve ter um input controlado (useState).

// Se o usuário digitar a palavra "erro" (com qualquer letra minúscula), o componente deve lançar:


// throw new Error('Palavra proibida detectada!')
// Envolva o componente com ErrorBoundary e use a prop resetKeys={[texto]}.

// Quando o usuário apagar ou alterar o texto para algo diferente de "erro", o fallback deve sumir automaticamente (sem botão).

// O FallbackComponent pode continuar mostrando a mensagem de erro com error.message.

import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import CampoDeTextoBugado from './errorBoundary/parte02/exercicio04/CampoDeTextoBugado'
import ErrorFallback from './ErrorFallBack'

const App = () => {
  const [texto, setTexto] = useState('')

  return (
    <div>
      <ErrorBoundary resetKeys={[texto]} FallbackComponent={ErrorFallback}>
        <CampoDeTextoBugado texto={texto} setTexto={setTexto} />
      </ErrorBoundary>
    </div>
  )
}

export default App

