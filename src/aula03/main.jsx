// Aqui estamos importando o root  que vem dentro da dom do react
import { createRoot } from "react-dom/client";
// Aqui estmaos importando o App
import App from "./App"

// Aqui pegamos o root que foi importado acima, e colocamos dentro dele um elemento HTML <div> com o id Root, que foi declarado 
// no Arquivo Html. E pegamos o Componente <App/> e pedimos pra renderizar dentro da <div> que é o principal!
createRoot(document.getElementById('root')).render( <App />)