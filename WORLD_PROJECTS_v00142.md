# Projetos permanentes do mundo — v00142

## Arquitetura

`data/world-projects.js` define projetos opcionais como conteúdo declarativo.

Cada projeto possui:

- `id`;
- nome;
- área e coordenada visual;
- mentor associado;
- requisitos consumidos pelo `RequirementSystem`;
- recursos;
- custo em ouro;
- transformação visual;
- recompensa/unlock;
- `optional: true`.

Não existe timer de construção, espera em tempo real ou monetização.

## Projetos iniciais

### Restaurar a Ponte de Carpinelli
- Artesanato 10;
- missão de Joaquim concluída;
- 20 Lenhas de Carvalho;
- 8 Barras de Ferro;
- 80 ouro.

### Reparar o Moinho Antigo
- Artesanato 12;
- Plantação 10;
- 16 Lenhas de Carvalho;
- 6 Barras de Ferro;
- 10 Trigos;
- 90 ouro.

Recompensa funcional: preparos de Culinária ficam 5% mais rápidos.

### Melhorar a Ferraria de Jordan
- Ferraria 15;
- pedido de Jordan concluído;
- 12 Barras de Ferro;
- 6 Barras de Mithril;
- 8 Lenhas de Carvalho;
- 140 ouro.

Recompensa funcional: trabalhos de Ferraria ficam 5% mais rápidos.

### Reconstruir o Cais de Pesca
- Pesca 15;
- Corte 10;
- 18 Lenhas de Carvalho;
- 4 Barras de Mithril;
- 8 Lãs;
- 100 ouro.

Recompensa funcional: +3% de chance de captura em Atenaria.

### Recuperar a Fazenda Oeste
Resource sink agrícola e desbloqueio persistente para conteúdo profissional/sidequest futuro.

### Restaurar a Ruína da Floresta
Projeto avançado com Artesanato, Magia, gemas e materiais processados; desbloqueia novos ganchos de pesquisa.

## Persistência

Ao concluir um projeto:

1. recursos e ouro são consumidos imediatamente;
2. `completedProjects[id]` é gravado;
3. `worldProjectUnlocks` recebe a conveniência/desbloqueio;
4. `storyFlags["worldProject:<id>"]` é marcado;
5. `worldProjectCompleted` é emitido no Event Bus;
6. `save()` é chamado imediatamente, usando o `SaveStorage` já existente.

Assim, uma transformação concluída não depende do próximo save manual.

## Mundo visual

Projetos concluídos são desenhados permanentemente na camada do mundo:

- ponte restaurada;
- moinho reparado;
- ferraria ampliada;
- cais reconstruído;
- fazenda recuperada;
- ruína restaurada.

Os desenhos não alteram colisões ou IDs lógicos nesta versão.

## Diálogos

Mentores passam a reconhecer projetos concluídos nos diálogos normais.

## Segurança de campanha

Todos os projetos são opcionais e não aparecem como requisito da campanha principal.
