import React from "react";
import Button from "./Button";


class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null
  }


  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error.message
    }
  }

    handleReset = () => {
    this.setState({
      hasError: false,
      error: null
    })
  }

  componentDidCatch(erro, info) {
    console.log('Error capiturado pelo Boundray: ', erro)
    console.log('Mais informações: ', info)

  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '1rem', background: '#fee', color: '#900' }}>
          <h2>Algo deu errado!</h2>
          <p>{this.state.error}</p>
          <Button onClick={this.handleReset}>Tentar novamente</Button>
        </div>
      )
    }

    return this.props.children
  }
}
export default ErrorBoundary
