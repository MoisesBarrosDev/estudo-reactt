import React from 'react'

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null
  }

  static getDerivedStateFromError(error) {
    // Atualiza o estado para exibir a interface alternativa
    return {
       hasError: true,
        error: error.message
       }
  }

  componentDidCatch(error, info) {
    // Aqui você pode logar o erro para um serviço externo, se quiser
    console.log('Erro capturado pelo ErrorBoundary:', error)
    console.log('Info adicional:', info)
  }
  
  // Se o estado de error for true,vai retornar uma div com um <h2>, e um <p> com uma menssagem de erro amigavel
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '1rem', background: '#fee', color: '#900' }}>
          <h2>Algo deu errado.</h2>
          <p>{this.state.error}</p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
