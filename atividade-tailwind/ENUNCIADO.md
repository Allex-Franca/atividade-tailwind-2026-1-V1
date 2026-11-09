# Atividade: Landing page da "Cafeteria Grão Dourado" com Tailwind CSS

**Duração sugerida:** 2 aulas (≈ 3h)
**Nível:** iniciante / intermediário
**Pré-requisitos:** HTML semântico e noções básicas de CSS (box model, cores, unidades)

---

## Objetivos de aprendizagem

Ao final da atividade, você deverá ser capaz de:

1. Explicar o que é um framework **utility-first** e como ele se diferencia do CSS tradicional.
2. Aplicar utilitários de **tipografia, cores, espaçamento, bordas e sombras**.
3. Montar layouts com **Flexbox** e **Grid** usando classes do Tailwind.
4. Criar interfaces **responsivas** com os prefixos `sm:`, `md:` e `lg:` (abordagem *mobile-first*).
5. Usar **estados** (`hover:`, `focus:`, `active:`) e **transições**.
6. (Bônus) Implementar **modo escuro** com o prefixo `dark:`.

---

## Preparação

Você **não precisa instalar nada**. O arquivo `inicio/index.html` já carrega o Tailwind via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

1. Abra a pasta `inicio/` no VS Code.
2. Instale a extensão **Tailwind CSS IntelliSense** (autocompleta as classes).
3. Abra o `index.html` no navegador (ou use a extensão *Live Server*).
4. Deixe a documentação aberta numa aba: <https://tailwindcss.com/docs>

> ⚠️ **Regra da atividade:** é proibido escrever CSS próprio (`<style>` ou `style="..."`). Tudo deve ser feito **somente com classes do Tailwind**.

---

## Revisão rápida (leia antes de começar)

| Conceito | Exemplo | O que faz |
|---|---|---|
| Espaçamento | `p-4`, `px-6`, `mt-2`, `gap-4` | 1 unidade = `0.25rem` (4px). `p-4` = 16px de padding |
| Tamanho | `w-full`, `h-48`, `max-w-6xl` | Largura, altura e largura máxima |
| Cor | `bg-amber-600`, `text-stone-800` | Paleta + tom (50 a 950) |
| Texto | `text-xl`, `font-bold`, `text-center` | Tamanho, peso e alinhamento |
| Borda | `border`, `border-2`, `rounded-lg` | Espessura e arredondamento |
| Sombra | `shadow-md`, `shadow-xl` | Sombra da caixa |
| Flex | `flex items-center justify-between` | Alinha no eixo cruzado / principal |
| Grid | `grid grid-cols-3 gap-6` | Grade com 3 colunas |
| Responsivo | `md:grid-cols-3` | Aplica **a partir de** 768px |
| Estado | `hover:bg-amber-700` | Aplica quando o mouse está em cima |

**Breakpoints:** `sm` ≥ 640px · `md` ≥ 768px · `lg` ≥ 1024px · `xl` ≥ 1280px

> 💡 *Mobile-first*: classes **sem prefixo** valem para todas as telas. Prefixos adicionam regras para telas **maiores**. Ex.: `grid-cols-1 md:grid-cols-3` → 1 coluna no celular, 3 no desktop.

---

## Exercícios

O arquivo `inicio/index.html` contém todo o HTML da página **sem nenhuma classe**. Cada seção tem um comentário `<!-- EXERCÍCIO X -->` indicando onde trabalhar. Faça na ordem.

### Exercício 1 — Base da página (tipografia e cores)
No `<body>`:
- Fundo `stone-50` e texto `stone-800`.
- Fonte sem serifa (`font-sans`) e `antialiased`.

Teste: a página deve ficar levemente bege, com texto cinza-escuro.

### Exercício 2 — Barra de navegação (Flexbox)
No `<header>`:
- Fundo branco, sombra pequena e posição fixa no topo ao rolar (`sticky top-0`). Use `z-10`.

Na `<nav>` interna:
- Largura máxima `max-w-6xl`, centralizada (`mx-auto`), padding horizontal `px-4` e vertical `py-4`.
- Use **flex** para deixar o logo à esquerda e os links à direita, alinhados verticalmente ao centro.

No logo: `text-2xl`, `font-bold`, cor `amber-700`.

Na lista de links (`<ul>`):
- `flex` com espaço de `gap-6` entre os itens.
- **Escondida no celular** e visível a partir de `md` (dica: `hidden md:flex`).
- Cada link: `font-medium` e, no `hover`, cor `amber-700`. Adicione `transition-colors`.

### Exercício 3 — Seção Hero (espaçamento, alinhamento e botões)
Na `<section id="inicio">`:
- Fundo em gradiente: `bg-linear-to-br from-amber-100 to-orange-200`.
- Padding vertical `py-20` (no `md:`, `py-32`) e texto centralizado.

No `<h1>`:
- `text-4xl` no celular, `md:text-6xl` no desktop, `font-extrabold`, `text-stone-900`.

No parágrafo: `mt-4`, `text-lg`, `max-w-2xl mx-auto` e cor `stone-700`.

Na `<div>` dos botões: `mt-8`, `flex`, `flex-col` no celular e `sm:flex-row` em telas maiores, `justify-center` e `gap-4`.

**Botão primário** ("Ver cardápio"):
- `bg-amber-600`, texto branco, `px-6 py-3`, `rounded-full`, `font-semibold`, `shadow-lg`.
- `hover:bg-amber-700`, `active:scale-95` e `transition`.

**Botão secundário** ("Nossa história"):
- Borda de 2px `amber-600`, texto `amber-700`, mesmo padding e arredondamento.
- `hover:bg-amber-600 hover:text-white`.

### Exercício 4 — Cardápio (Grid + cards)
Na `<section id="cardapio">`: `max-w-6xl mx-auto px-4 py-16`.

No título `<h2>`: `text-3xl font-bold text-center mb-10`.

Na `<div>` que envolve os cards:
- `grid` com **1 coluna** no celular, **2** a partir de `sm` e **3** a partir de `lg`. `gap-6`.

Em **cada** `<article>` (card):
- Fundo branco, `rounded-2xl`, `shadow-md`, `overflow-hidden`.
- No hover: `hover:shadow-xl` e `hover:-translate-y-1`, com `transition duration-300`.

Na `<img>`: `w-full h-48 object-cover`.

Na `<div>` de conteúdo: `p-5`.

Na linha com nome e preço: `flex justify-between items-center`.
- Nome: `text-xl font-semibold`.
- Preço: `bg-amber-100 text-amber-800 text-sm font-bold px-3 py-1 rounded-full`.

Na descrição: `mt-2 text-stone-600 text-sm`.

> 💡 Repetir as mesmas classes em 6 cards é cansativo, né? Anote isso — vamos discutir na pergunta 4.

### Exercício 5 — Sobre nós (layout em duas colunas)
Na `<section id="sobre">`: fundo `stone-900`, texto `stone-100`.

Na `<div>` interna: `max-w-6xl mx-auto px-4 py-16`, `flex flex-col md:flex-row items-center gap-10`.

- Imagem: `w-full md:w-1/2 rounded-2xl shadow-2xl`.
- Bloco de texto: `md:w-1/2`.
- `<h2>`: `text-3xl font-bold text-amber-400`.
- Parágrafos: `mt-4 leading-relaxed text-stone-300`.

Na lista de números (`<ul>`): `mt-8 grid grid-cols-3 gap-4 text-center`.
- Cada número (`<strong>`): `block text-3xl font-extrabold text-amber-400`.
- Cada legenda (`<span>`): `text-sm text-stone-400`.

### Exercício 6 — Formulário de contato (estados de foco)
Na `<section id="contato">`: `max-w-xl mx-auto px-4 py-16`.

No `<form>`: fundo branco, `p-8`, `rounded-2xl`, `shadow-lg`, `space-y-5`.

No `<h2>` do formulário: `text-2xl font-bold text-center`.

Em cada `<label>`: `block text-sm font-medium mb-1`.

Em cada `<input>` e no `<textarea>`:
- `w-full`, `border border-stone-300`, `rounded-lg`, `px-4 py-2`.
- No foco: `focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500`.

No `<textarea>`: adicione `h-32`.

No botão "Enviar": `w-full`, mesmo estilo do botão primário do Hero.

### Exercício 7 — Rodapé
No `<footer>`: `bg-stone-100 border-t border-stone-200 py-6 text-center text-sm text-stone-500`.

---

## 🏆 Desafios bônus (escolha pelo menos 1)

1. **Modo escuro:** adicione variantes `dark:` (ex.: `dark:bg-stone-950 dark:text-stone-100`) no `body`, header, cards e formulário. Teste mudando o tema do seu sistema operacional (o Tailwind segue `prefers-color-scheme` por padrão).
2. **Selo "Novo":** no primeiro card, adicione um `<span>` "Novo" posicionado no canto superior da imagem. Dica: o card precisa de `relative` e o selo de `absolute top-3 left-3`.
3. **Menu mobile:** crie um botão ☰ visível só no celular (`md:hidden`). Não precisa funcionar com JavaScript — só o visual.
4. **Cores personalizadas:** no `<head>`, adicione um bloco `<style type="text/tailwindcss">` com:
   ```css
   @theme {
     --color-cafe-500: #8b5a2b;
   }
   ```
   e use `bg-cafe-500` em algum lugar. (Esta é a **única** exceção à regra de "não escrever CSS".)

---

## Perguntas para responder (entregar em um arquivo `respostas.md`)

1. O que significa "utility-first"? Cite **uma vantagem** e **uma desvantagem** em relação ao CSS tradicional.
2. Qual a diferença entre `md:text-6xl` e `text-6xl`? Por que dizemos que o Tailwind é *mobile-first*?
3. Explique o que cada classe faz: `flex items-center justify-between`.
4. No exercício 4, você repetiu as mesmas classes em vários cards. Como isso poderia ser evitado em um projeto real? (Pesquise sobre componentes em React/Vue ou a diretiva `@apply`.)
5. Qual a diferença entre `p-4` e `m-4`? E entre `gap-4` e `space-y-4`?

---

## Entrega

Compacte a pasta com:
- `index.html` finalizado
- `respostas.md`
- Um **print** da página no celular (use o DevTools: `F12` → ícone de celular) e outro no desktop.

---

## Critérios de avaliação (10 pontos)

| Critério | Pontos |
|---|---|
| Ex. 1–2: base e navegação (flex, links escondidos no mobile, hover) | 1,5 |
| Ex. 3: hero com gradiente, tipografia responsiva e botões com estados | 1,5 |
| Ex. 4: grid responsivo 1 → 2 → 3 colunas e cards com hover | 2,0 |
| Ex. 5: layout em coluna no mobile e lado a lado no desktop | 1,5 |
| Ex. 6–7: formulário com estados de foco e rodapé | 1,0 |
| Nenhum CSS próprio (só classes do Tailwind) | 0,5 |
| Perguntas respondidas corretamente | 1,5 |
| Desafio bônus | 0,5 |
| **Total** | **10,0** |
