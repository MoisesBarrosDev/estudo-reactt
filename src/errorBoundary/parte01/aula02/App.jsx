import Bugado from './errorBoundry/aula02/Bugado'
import ErrorBoundary from './errorBoundry/aula02/ErrorBoundry'

function App() {
  return (
    <div>
      <h1>Meu App</h1>

      <ErrorBoundary>
        <Bugado />
      </ErrorBoundary>

    </div>
  )
}

export default App
