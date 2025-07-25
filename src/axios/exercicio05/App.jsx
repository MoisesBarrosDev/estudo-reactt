// ✅ Exercício 5 – Estados separados: data, loading, error
// 📝 Enunciado:
// Você já está usando o hook useAxios que retorna:

// dados

// loading

// error


import useAxios from "./useAxios"
import ListaDeUsuarios from "./ListaDeUsuarios"
import MensagemErro from "./MensagemErro"
import Carregando from "./Carregando"
import Button from "./Button"

const App = () => {
  const { dados, loading, error, recarregar } = useAxios()

  return (
    <div>
      <MensagemErro error={error} recarregar={recarregar} />
      <Carregando loading={loading} />
      <ListaDeUsuarios dados={dados} />
      {!loading && <Button onClick={recarregar}>Recarregar</Button>}
    </div>
  )
}

export default App
