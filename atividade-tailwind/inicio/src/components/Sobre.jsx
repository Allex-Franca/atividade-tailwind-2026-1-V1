const numeros = [
  { valor: '15', legenda: 'anos de história' },
  { valor: '12', legenda: 'produtores parceiros' },
  { valor: '+50 mil', legenda: 'xícaras por ano' },
]

// EXERCÍCIO 5: sobre nós
export default function Sobre() {
  return (
    <section id="sobre">
      <div>
        <img src="https://picsum.photos/seed/coffeeshop/800/600" alt="Interior da cafeteria" />
        <div>
          <h2>Nossa história</h2>
          <p>
            Tudo começou com uma pequena máquina de espresso e o sonho de servir
            o melhor café do bairro.
          </p>
          <p>
            Hoje trabalhamos diretamente com produtores do sul de Minas,
            garantindo qualidade e um preço justo para quem planta.
          </p>
          <ul>
            {numeros.map((item) => (
              <li key={item.legenda}>
                <strong>{item.valor}</strong> <span>{item.legenda}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
