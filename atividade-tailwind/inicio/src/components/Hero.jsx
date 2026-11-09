// EXERCÍCIO 3: seção hero
export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-linear-to-br from-amber-100 to-orange-200 py-20 px-4 md:py-32 text-center"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900">
        O café que abraça a sua manhã
      </h1>
      <p className="mt-4 text-lg max-w-2xl mx-auto text-stone-700">
        Grãos selecionados de pequenos produtores, torrados artesanalmente e
        servidos com carinho desde 2010.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <a
          className=" text-white bg-amber-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-amber-700 active:scale-95 transition"
          href="#cardapio"
        >
          Ver cardápio
        </a>
        <a
          className="border-2 border-amber-600 text-amber-700 px-6 py-3 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition "
          href="#sobre"
        >
          Nossa história
        </a>
      </div>
    </section>
  );
}
