
// 🐥 Exercício 3G: Lista de séries para assistir
// Crie um estado com um array de séries.
// Cada série deve ser um objeto com:
// id (número único)
// titulo (string)
// assistida (boolean, começa como false)
// Mostre a lista de séries com .map().
// Para cada série, exiba:
// O título
// Um botão "Marcar como assistida"
// Quando clicar no botão:
// Atualize a propriedade assistida daquela série para true
// Mude o estilo do título (riscar ou mudar a cor) para indicar que já foi assistida.

const seriesIniciais = [
  { id: 1, titulo: 'Friends', assistida: false },
  { id: 2, titulo: 'Suits', assistida: false },
  { id: 3, titulo: 'Flash', assistida: false },
  { id: 4, titulo: 'Mentes criminosas', assistida: false },
  { id: 5, titulo: 'Apenas um show', assistida: false },
  { id: 6, titulo: 'Todo Mundo odeia o Chris', assistida: false },

]
import { useState } from "react"
import SeriesItem from "./SeriesItem"

const App = () => {
  const [series, setSeries] = useState(seriesIniciais)

  function handleClick(id) {
    const novasSeries = series.map((serie) =>
      serie.id === id ? { ...serie, assistida: true } : serie
    )
    setSeries(novasSeries)
  }
  return (
    <div>
      <ul>
        {series.map((serie) => (
          <SeriesItem key={serie.id} onClick={handleClick} {...serie} />
        ))}
      </ul>
    </div>
  )
}

export default App
