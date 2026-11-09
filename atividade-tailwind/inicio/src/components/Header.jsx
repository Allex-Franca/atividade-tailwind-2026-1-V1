const links = [
  { href: '#inicio', texto: 'Início' },
  { href: '#cardapio', texto: 'Cardápio' },
  { href: '#sobre', texto: 'Sobre' },
  { href: '#contato', texto: 'Contato' },
]

// EXERCÍCIO 2: barra de navegação
export default function Header() {
  return (
    <header>
      <nav>
        <a href="#">☕ Grão Dourado</a>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
