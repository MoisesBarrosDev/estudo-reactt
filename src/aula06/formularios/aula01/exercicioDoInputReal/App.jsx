
import { ErrorBoundary } from "react-error-boundary"
import Form from "./Form"
import ErrorFallBack from "./ErrorFallBack"

const App = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <Form />
      </ErrorBoundary>
    </div>
  )
}

export default App
