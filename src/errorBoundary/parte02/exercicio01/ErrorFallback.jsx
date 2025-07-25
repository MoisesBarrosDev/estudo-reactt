

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    // esse atributo role é = Avisa leitor de tela que algo importante apareceu
    <div role="alert">
      <p>Algo deu errado!</p>
      {/* A tag <pre> serve para = 	Mostra o conteúdo com formatação literal (como código) */}
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Tentar novamente</button>
    </div>
  )
}

export default ErrorFallback