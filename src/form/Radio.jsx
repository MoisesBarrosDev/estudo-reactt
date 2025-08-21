// o primeiro parametro recebe um array de cores.
// o segundo parametro recebe o valor atual do estado color, que é uma string vazia. 
// o 3 parametro recebe uma função atualizadora do estado atual do color. 

const Radio = ({ colors, value, setValue }) => {
// essa função pega o valor que está dentro do input radio, e atualiza o estado dela.
  function handleChange({ target }) {
    setValue(target.value)
  }
  return (
    // a tag fieldset serve para agrupra semanticamente os radio buttons, e a tag legend serve para colocar o titulo.
    <fieldset>
       <legend>Escolha uma cor:</legend>
      {colors.map((color) => (
        <div key={color} style={{ display: 'flex' }}>
          <label htmlFor={color}>{color}</label>
          <input type="radio" id={color} value={color} name='cor' onChange={handleChange} checked={value === color} />
        </div>
      ))}
    </fieldset>
  )
}

export default Radio
