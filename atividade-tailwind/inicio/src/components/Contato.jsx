// EXERCÍCIO 6: formulário de contato
export default function Contato() {
  function handleSubmit(evento) {
    evento.preventDefault()
    alert('Mensagem enviada! (de mentirinha)')
  }

  return (
    <section id="contato">
      <form onSubmit={handleSubmit}>
        <h2>Fale com a gente</h2>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="voce@email.com" />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" placeholder="Escreva sua mensagem..." />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}
