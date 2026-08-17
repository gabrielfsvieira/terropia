# Direção visual — v00114

## Vegetação com mais vida

A v00114 preserva footprints, colisões e regras de gathering. Vegetação passa a usar variações determinísticas de silhueta e tonalidade, nunca aleatoriedade por redraw.

### Recursos
- Árvores mantêm quatro silhuetas determinísticas por espécie/ID e pequenas variações tonais.
- Estado de dano continua marcado no tronco; tocos permanecem inequívocos e não recebem movimento de copa.
- Arbustos mantêm variantes próprias; frutos/cogumelos continuam sendo o principal sinal de recurso ativo.
- Recursos usam os frames cacheados existentes e recebem apenas accents animados mínimos por cima.

### Vegetação decorativa
- Grama e flores recebem pequenas variações de inclinação/altura e distribuição derivadas do seed já existente.
- Movimento ambiental é aplicado apenas como accent, na camada de efeitos, e somente dentro da viewport.
- `prefers-reduced-motion` desativa esses accents.

### Performance
`js/vegetation-visuals.js` mantém um pequeno atlas/cache de frames compartilhados. Não existem timers por objeto, blur, filtros ou invalidação contínua do cache estático.
