

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Algo deu errado!</p>
      <pre>{error.message}</pre>

      <button onClick={resetErrorBoundary}>Tente novamente</button>
    </div>
  )
}

export default ErrorFallback