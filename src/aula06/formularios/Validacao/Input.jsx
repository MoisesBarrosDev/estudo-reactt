

const Input = ({ label, id, onChange,...props }) => {
  
  // dentro do ...props tem um objeto contendo as demais propiedades, no caso do text, tem o type:'text',value:'', 
  // já no email tem type: 'email', value: '', required: true
  // console.log(props)
  return (
    <>
    {/* não tem como usar ...props no htmlFor, pois o id é unico pra cada label, e o nome também é unico pra cada label. */}
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        {...props}
      />

    </>
  )
}

export default Input
