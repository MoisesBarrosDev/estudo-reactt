
// MensagemErro.jsx

// Recebe error como prop

// Se error existir, exibe a mensagem em vermelho

// Caso contrário, não mostra nada



import Button from "./Button"

const MensagemErro = ({ error, recarregar }) => {
  if (!error) return null

  return (
    <div>
      <p style={{ color: 'red' }}>{error}</p>
      <Button onClick={recarregar}>Tentar novamente</Button>
    </div>
  )
}

export default MensagemErro
