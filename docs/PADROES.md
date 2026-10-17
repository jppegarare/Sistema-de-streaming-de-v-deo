# Padrões Criacionais aplicados

Sistema de streaming de vídeo. Padrões implementados: Factory Method e Singleton.

## Factory Method

Onde está no código:
 `src/conteudo/Conteudo.ts`: interface do produto.
 `src/conteudo/Filme.ts` e `src/conteudo/Serie.ts`: produtos concretos.
 `src/conteudo/Catalogo.ts`: creator abstrato, com o método abstrato `criarConteudo()` (o Factory Method).
 `src/conteudo/CatalogoFilmes.ts` e `src/conteudo/CatalogoSeries.ts`: creators concretos.
 `src/Plataforma.ts`: cliente, que recebe um `Catalogo` no construtor.

Problema que resolve: a plataforma precisa criar conteúdos de tipos diferentes (filme e série). Se a própria `Plataforma` decidisse qual classe instanciar, por exemplo com um `if`, ela teria mais de um motivo para mudar e precisaria ser editada toda vez que surgisse um novo tipo, como documentário.

Por que faz sentido neste contexto: `criarConteudo()` é abstrato em `Catalogo`, e cada catálogo concreto decide qual objeto criar. A `Plataforma` só conhece `Catalogo` e `Conteudo`, nunca escreve `Filme` nem `Serie`. Para adicionar um novo tipo, criamos duas classes novas (um produto e um creator) sem alterar nenhuma classe existente.

## Singleton

Onde está no código:
 `src/config/ConfigStreaming.ts`: classe com construtor privado, atributo estático `instancia` e método estático `obterInstancia()`.
 Usado em `src/Plataforma.ts` e em `src/index.ts`.

Problema que resolve: a configuração da plataforma (nome, qualidade máxima e região) precisa ser a mesma em todo o sistema. Se cada parte do código criasse a sua com `new`, poderiam existir valores diferentes ao mesmo tempo.

Por que faz sentido neste contexto: o construtor é privado, então ninguém consegue criar uma segunda configuração. O método `obterInstancia()` cria a instância na primeira chamada e devolve sempre a mesma nas seguintes. No `index.ts`, `config1 === config2` retorna `true`, provando que é a mesma instância compartilhada.

