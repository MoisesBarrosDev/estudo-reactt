// 🧪 Enunciado – Exercício 4: Simular erro de rede com uma flag
// Use seu useAxios, mas:

// Adicione uma flag booleana chamada forcarErro (por padrão false)

// No buscarDados, se forcarErro for true, dispare um erro manual:

// if (forcarErro) throw new Error('Erro simulado!')
// No componente App, adicione um botão chamado “Simular Erro”

// Ao clicar nesse botão, altere a flag forcarErro pra true e recarregue os dados

// Mostre corretamente a mensagem de erro e o botão de “Tentar novamente”


import Button from "./Button"
import useAxios from "./useAxios"

const App = () => {
  const { error, dados, loading, recarregar, forcarErro, simule } = useAxios()

  if (loading) return <p>Carregando...</p>

  if (error) return (
    <div>
      <p style={{ color: 'red' }}>{error}</p>
      <Button onClick={recarregar}>Tentar novamente</Button>
    </div>
  )

  if (!dados) return <p>Nenhum dado carregado.</p>


  return (
    <div>
      {/* Leitura dev: Se os dados existem (foram carregados) e o carregamento terminou, então mostre a lista. */}
      {dados && !loading && (
        <ul>
          {dados && dados.map((nome) => (
            <li key={nome.id}>{nome.username}</li>
          ))}
        </ul>
      )}
      {!loading && (
        <div style={{ display: 'flex', gap: '.5rem' }}>
          <Button onClick={recarregar}>Recarregar</Button>
          <Button onClick={simule}>Forçar erro</Button>
        </div>
      )}

    </div>

  )
}

export default App
