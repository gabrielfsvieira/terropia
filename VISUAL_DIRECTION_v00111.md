# Direção visual — v00111

## Hierarquia do mundo

A v00111 preserva a direção lateral/3/4 e a paleta existente, mas formaliza três níveis de leitura:

1. **Gameplay primário:** jogador e inimigos mantêm a silhueta mais forte. O jogador recebe grounding/edge neutro e inimigos usam outline funcional fino; bosses mantêm ênfase maior.
2. **Gameplay secundário:** NPCs, recursos, entradas e objetos interativos preservam outlines/sombras próprios e recebem espaço visual ao redor.
3. **Cenário:** microdecoração é menos saturada visualmente por alpha e não é colocada na vizinhança imediata de recursos, NPCs, inimigos, fazenda e objetos de gameplay.

Microdecoração nunca deve competir com silhueta ou footprint interativo. Não usar glow permanente para comunicar interatividade.

## Regras

- `WORLD_DECOR_ALPHA = .68`.
- Zona de respiro padrão de até 2 tiles para objetos/recursos e 1 tile para atores dinâmicos.
- Outline normal de inimigo: 1 px cardinal; boss: 2 px.
- Jogador usa edge neutro e sombra compacta, sem aura luminosa.
- Gameplay, colisões, posições, drops e saves permanecem inalterados.
