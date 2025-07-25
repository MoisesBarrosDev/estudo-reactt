// ✅ Exercício 3 – Recarregar dados com botão
// 📝 Enunciado:
// Ainda usando o useAxios, adicione um botão "Recarregar" no componente App.

// Ao clicar no botão, a requisição deve ser feita novamente.

// O loading, error e dados devem se comportar como na primeira vez.


import Button from "./Button"
import useAxios from "./useAxios"

const App = () => {
  const { error, dados, loading, recarregar } = useAxios()
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
        <Button onClick={recarregar}>Recarregar</Button>
      )}
    </div>
  )
}

export default App
