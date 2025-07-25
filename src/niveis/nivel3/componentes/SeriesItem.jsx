import ButtonItem from "./ButtonItem"
import SpanItem from "./SpanItem"

const SeriesItem = ({ titulo, assistida, id, onClick }) => {
  return (
    <li style={{ listStyle: 'none' }}>
      <SpanItem titulo={titulo} assistida={assistida} />
      <ButtonItem assistida={assistida} onClick={onClick} id={id} />
    </li>
  )
}

export default SeriesItem
