// React Hooks
// useContext

// createContext
// O contexto irá permitir passarmos dados/estado a todos os componentes, sem a necessidade de utilizar propriedades. 
// Serve principalmente para dodos/estados globais como por exemplo dados do usuário logado.

// UserContext.js


import { GlobalStorage } from "./aula05/react-hooks/aula05/GlobalContext";
import Produto from "./aula05/react-hooks/aula05/Produto";


const App = () => {
  return (
      <GlobalStorage>
        <Produto />
      </GlobalStorage>
 
  )
}

export default App
