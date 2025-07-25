import { useEffect, useRef, useState } from "react"

const useHover = () => {
  const [hovering, setHovering] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const elemento = ref.current
    if (!elemento) return

    function handleMouseEnter() {
      setHovering(true)
    }

    function handleMouseLeave() {
      setHovering(false)
    }

    elemento.addEventListener('mouseenter', handleMouseEnter)
    elemento.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      elemento.removeEventListener('mouseenter', handleMouseEnter)
      elemento.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return [ref, hovering]
}

export default useHover

