1-O que significa "utility-first"? Cite uma vantagem e uma desvantagem em relação ao CSS tradicional.
2-Qual a diferença entre md:text-6xl e text-6xl? Por que dizemos que o Tailwind é mobile-first?
3-Explique o que cada classe faz: flex items-center justify-between.
4-No exercício 4 você escreveu as classes do card uma única vez e elas valeram para os seis produtos. Explique por que isso aconteceu. Como você faria isso se a página fosse só HTML puro, sem React?
5-Qual a diferença entre p-4 e m-4? E entre gap-4 e space-y-4?

1- Utility-first significa usar classes prontas do Tailwind para estilizar o site. Uma vantagem é que fica mais fácil e rápido de fazer o visual. Uma desvantagem é que o código pode ficar cheio de classes.

2- text-6xl funciona em qualquer tamanho de tela, enquanto md:text-6xl funciona em telas médias ou maiores. O Tailwind é mobile-first porque começa pensando primeiro nos celulares.

3- flex coloca os itens lado a lado, items-center centraliza os itens e justify-between deixa um espaço entre eles.

4- Isso aconteceu porque criamos um card no React e usamos ele para todos os seis produtos. Se fosse HTML puro, teríamos que copiar e colar o código do card para cada produto.

5- p-4 é o espaço dentro do elemento e m-4 é o espaço fora dele. Já gap-4 cria espaço entre os itens e space-y-4 cria espaço vertical entre eles.