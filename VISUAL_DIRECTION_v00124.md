# Direção visual — v00124

## Diálogos 2.0

Terrópia mantém três níveis de conversa:

1. **Balão no mundo** — fala curta sem interromper exploração; mostra nome do NPC, retrato quando importante e pequeno indicador de continuidade.
2. **Diálogo funcional** — serviços como banco usam retrato, nome, função, texto e ações.
3. **Diálogo de quest/recompensa** — hierarquia completa com retrato, identidade, mensagem, informações e escolhas.

NPCs importantes usam apenas mudança sutil de moldura/acento. NPCs de linha principal podem receber um segundo acento, sem mudar estrutura.

Entrada usa animação curta em steps; saída usa Web Animations quando disponível. `prefers-reduced-motion` remove a animação.

No mobile, diálogos são ancorados na parte inferior, ocupam no máximo cerca de 58–62% da altura e mantêm ações visíveis/roláveis, evitando esconder simultaneamente personagem, texto e escolhas.
