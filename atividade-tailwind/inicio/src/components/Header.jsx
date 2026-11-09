const links = [
  { href: "#inicio", texto: "Início" },
  { href: "#cardapio", texto: "Cardápio" },
  { href: "#sobre", texto: "Sobre" },
  { href: "#contato", texto: "Contato" },
];

// EXERCÍCIO 2: barra de navegação
export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-stone-900 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a className=" text-2xl font-bold text-amber-700 dark:text-amber-400">
          ☕ Grão Dourado
        </a>
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                className="font-medium hover:text-amber-700 transition-colors"
                href={link.href}
              >
                {link.texto}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
