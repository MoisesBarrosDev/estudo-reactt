
// ✅ Nível 1 – Básico (GET)
// Exercício 1: Listar usuários

// Crie um componente que faz uma requisição GET para https://jsonplaceholder.typicode.com/users

// Mostre os nomes dos usuários em uma lista <ul>




import useAxios from './axios/exercicio01/useAxios'

const App = () => {
  const { error, dados, loading } = useAxios()
  return (
    <div>
      <ul>
        {dados && dados.map((nome) => (
          <li key={nome.id}>{nome.username}</li>
        ))}
      </ul>
      <p>{loading ? 'Carregando' : (error || '')}</p>
    </div>
  )
}

export default App
