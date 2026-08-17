# Direção visual — v00130

## Reward Presentation

A v00130 centraliza feedback de recompensa, raridade, descoberta e progressão em uma fila visual não-modal.

### Hierarquia
- comum: moldura neutra + símbolo `·` + rótulo;
- incomum: acento verde + símbolo `◆` + rótulo;
- raro: moldura dourada + símbolo `✦` + spark curto;
- especial: acento violeta + símbolo `★` + staging mais forte.

Os estados não dependem somente de cor.

### Eventos
- rareDrop: apresentação curta especial;
- questCompleted: confirmação de missão;
- playerLevelUp: progressão de nível;
- skillLevelUp: progressão de habilidade;
- discoveryFound: descoberta comum/importante;
- achievementUnlocked: conquista.

A fila prioriza eventos importantes e limita eventos simultâneos. Eventos baixos iguais podem ser consolidados.

Rare drop só abre modal se o item tiver ficado no chão por falta de espaço. Descobertas comuns deixam de abrir modal automaticamente; Arqueologia/lore detalhado mantém mensagem própria.

Reduced-motion reduz duração e remove spark.
