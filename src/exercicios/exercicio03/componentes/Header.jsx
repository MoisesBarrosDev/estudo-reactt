import Link from "./Link"
const Header = () => {
  return (
    <section>
      <header>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/receitas'>Receitas</Link>
          <Link href='/sobre'>Sobre</Link>
        </nav>
      </header>
    </section>
  )
}

export default Header
