

const ErrorFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Algo deu errado!</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Tentar novamente</button>
    </div>
  )
}

export default ErrorFallBack