// ✅ Exercício 2 – GET com Loading e Erro na Tela
// 📝 Enunciado:
// Use seu hook useAxios do Exercício 1 (ou refatore se quiser)

// Na tela, mostre:

// Carregando... enquanto a requisição está acontecendo

// Erro: [mensagem] se der erro na requisição

// A lista de nomes dos usuários apenas se não estiver carregando e não tiver erro

// 🎯 Objetivo:
// Garantir que o usuário entenda o que está acontecendo no app, melhorando a UX.


import useAxios from "./useAxios"

const App = () => {
  const { error, dados, loading } = useAxios()
  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro: {error}</p>
  return (
    <div>
       {/* Leitura dev: Se os dados existem (foram carregados) e o carregamento terminou, então mostre a lista. */}
      {dados && !loading &&(
        <ul>
        {dados && dados.map((nome) => (
          <li key={nome.id}>{nome.username}</li>
        ))}
      </ul>
      )}

    </div>
  )
}

export default App
