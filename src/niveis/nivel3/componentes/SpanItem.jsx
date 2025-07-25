

const SpanItem = ({ assistida, titulo }) => {
  return (
    <span
      style={{
        textDecoration: assistida ? 'line-through' : 'none',
        color: assistida ? 'green' : 'red'
      }}
    >
      {titulo}
    </span>
  )
}

export default SpanItem
