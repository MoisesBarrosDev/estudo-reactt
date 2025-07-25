const Button = ({ children }) => {
  return (
    <>
      <button style={{ padding: "0.5rem 1rem", cursor: "pointer" }} type="button" >
        {children}
      </button>
    </>
  )
}

export default Button
