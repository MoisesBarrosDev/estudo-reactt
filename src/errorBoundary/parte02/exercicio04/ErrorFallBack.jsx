


const ErrorFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <div role='alert'>
      <p>Algo deu Errado!</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export default ErrorFallBack
