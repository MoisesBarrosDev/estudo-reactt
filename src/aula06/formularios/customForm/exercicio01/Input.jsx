
const Input = ({ id, label, onChange, value,...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        onChange={onChange}
        value={value}
        {...props}
      />
    </>
  )
}

export default Input
