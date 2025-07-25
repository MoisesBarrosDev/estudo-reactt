import { useEffect } from "react"

const Message = ({ children, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
      console.log('Mensagem excluida!')
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])
  return (
    <p>{children}</p>
  )
}

export default Message

