// Componentes Input

// Input
// Podemos definir um componente para cada tipo de campo de formulário, assim evitamos criar código repetido.
// No caso chamo de input tudo aquilo que se parece com input text. Como por Exemplo: password , textarea.
// Agora quando eu falo do input do tipo: checkbox,radio e etc é melhor separar em componentes diferentes.



import { useState } from 'react'
import Input from './form/Input'
import Select from './form/Select'
import Radio from './form/Radio'
import Checkbox from './form/Checkbox'
const App = () => {
  // o estado sempre no app, pois se colocar ele dentro do componente <Input/>, não vai da pra acessar do lado de fora (aqui). 
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [produto, setProduto] = useState('')
  const [color, setColor] = useState('')
  // no caso do checkbox, sempre passar um array, como estado atual
  const [linguagens, setLinguagens] = useState([])
  return (
    <form>
      <h2>Checkbox</h2>
      <Checkbox options={['JavaScript','Java','C++','C#','NodeJs']} value={linguagens} setValue={setLinguagens}/>
      <h2>Select</h2>
      <Select options={['smartphone', 'tablet']} setValue={setProduto} value={produto} />
      <h2>Radio</h2>
      <Radio colors={['dark', 'white']} value={color} setValue={setColor} />
      <h2>Input</h2>
      <Input id='nome' type='text' label='nome' value={nome} setValue={setNome} />
      <Input id='email' type='email' label='email' value={email} setValue={setEmail} required />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App
