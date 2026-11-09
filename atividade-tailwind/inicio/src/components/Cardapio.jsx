import { cardapio } from '../data/cardapio.js'
import CardProduto from './CardProduto.jsx'

// EXERCÍCIO 4 (parte 1): seção do cardápio em grid
export default function Cardapio() {
  return (
    <section id="cardapio">
      <h2>Nosso cardápio</h2>
      <div>
        {cardapio.map((produto) => (
          <CardProduto key={produto.id} {...produto} />
        ))}
      </div>
    </section>
  )
}
