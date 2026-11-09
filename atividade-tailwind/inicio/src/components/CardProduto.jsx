// EXERCÍCIO 4 (parte 2): card de um produto
export default function CardProduto({ nome, preco, descricao, imagem }) {
  return (
    <article>
      <img src={imagem} alt={nome} />
      <div>
        <div>
          <h3>{nome}</h3>
          <span>{preco}</span>
        </div>
        <p>{descricao}</p>
      </div>
    </article>
  )
}
