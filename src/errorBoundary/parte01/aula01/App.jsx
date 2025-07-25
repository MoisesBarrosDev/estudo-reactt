import Bugado from './Bugado'
import ErrorBoundary from './ErrorBoundry'

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
