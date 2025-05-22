const Link = ({ href, children }) => {
  const estilo = {
    color: 'blue',
    textDecoration: 'none'
  };

  const handleClick = ({ target }) => {
    target.style.color = 'red'
  }

  const handleMouseLeave = ({ target }) => {
    target.style.color = estilo.color;
  };

  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <a href={href} style={estilo} onMouseMove={handleClick} onMouseLeave={handleMouseLeave}>{children}</a>
        </li>
      </ul>
    </>
  )
}

export default Link