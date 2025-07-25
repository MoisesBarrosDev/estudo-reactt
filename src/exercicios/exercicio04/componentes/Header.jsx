import Links from "./Link"

const Header = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Produtos' },
    { href: '/sobre', label: 'Sobre' },

  ]
  return (

    <header>
      <nav>
        <ul>
          {navLinks.map(({ href, label }, index) => (
            <Links key={index} href={href}>{label}</Links>
          ))}
        </ul>
      </nav>
    </header>

  )
}

export default Header