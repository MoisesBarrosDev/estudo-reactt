// 🧪 Exercício 1 – Simulando um erro simples
// Objetivo: Criar um componente que lança um erro quando um botão é clicado.

// Regras:
// Crie um componente BugButton.

// Ao clicar no botão, ele lança throw new Error('Erro simulado!').

// Use ErrorBoundary ao redor para capturar isso.

// Mostre o erro em um FallbackComponent com botão "Tentar novamente" que reseta o erro.



import { ErrorBoundary } from 'react-error-boundary'
import BugButton from './errorBoundray/parte02/exercicio01/BugButton'
import ErrorFallback from './errorBoundray/parte02/exercicio01/ErrorFallback'


const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} >
      <BugButton/>
    </ErrorBoundary>
  )
}

export default App
