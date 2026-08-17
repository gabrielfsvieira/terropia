# V00146 — Expansão Estrutural do Mundo de Terrópia
## Etapa 4/10 — Implementação completa de T4 e T5 (build v000149)

### Resultado
- T1 / Atenaria: 15 OVERWORLD preservadas.
- T2 / Altaria: 15 OVERWORLD preservadas.
- T3 / Mornaqua: 15 OVERWORLD preservadas.
- T4 / Calindra: 15 OVERWORLD implementadas (`AT-054`…`AT-068`).
- T5 / Solácia: 15 OVERWORLD implementadas (`AT-069`…`AT-083`).
- Total parcial implementado: **75 telas OVERWORLD**.

### Identidade reutilizada
- **Calindra / T4 / Ouro / Selva Densa:** junglewood, cipós, mossstone e resina; broadleaf, folhas gigantes, solo enraizado, dossel denso e iluminação `filtered-canopy`.
- **Solácia / T5 / Rubi / Deserto:** sandstone, terracotta, linen e bronze; areia quente, hardpan, pedra rachada, cactos/dry scrub/date palm e iluminação `hard-sun`.

### Integração técnica
As 30 telas usam `CRPG.data.mapsLegacy` 16×10 e a expansão existente do runtime para 32×20. `data/maps/calindra-solacia-expansion.js` gera as matrizes uma única vez e reaproveita Terrain 2.0, autotiling, Water 2.0, Vegetation 2.0, identidade regional, sombras, cache, câmera e renderer compartilhados. Nenhum renderer específico por mapa foi criado.

### Fronteiras implementadas
- T3 ↔ T4: `AT-042` ↔ `AT-054`.
- Costura continental secundária T2 ↔ T4 prevista no planejamento: `AT-036` ↔ `AT-068`.
- T4 ↔ T5: `AT-057` ↔ `AT-069`.
- T5 → T6 (`AT-072` → `AT-096`) permanece apenas planejada; nenhum link runtime aponta para T6 nesta etapa.

### Geografia e landmarks
Calindra usa corredores de raízes, clareiras úmidas, arcos de cipós, folhas gigantes, monólitos de musgo e pequenos bolsões de água não coletáveis. Solácia usa dunas, leitos secos, gargantas, marcos de arenito, cactos e raros bolsões de água cenográficos. A malha possui rotas principais, bifurcações, loops e ramificações opcionais conforme o planejamento global.

### Conteúdo proibido
Nenhum NPC, inimigo, recurso coletável, minério, planta coletável, construção, cidade, casa, loja, crafting station, dungeon, baú, quest ou recompensa foi adicionado às telas T4/T5.

### Validação
Executar `tests/v000149-t4-t5-expansion-check.js`. Critérios: T1–T5 = 15 cada, 75 alcançáveis desde Atenaria, IDs únicos, mapas físicos presentes, conexões bidirecionais válidas, exits navegáveis e ausência de população nova em T4/T5.

### Resultado automatizado
`T1=15, T2=15, T3=15, T4=15, T5=15, total=75, reachable=75, unreachable=0`. O Content Validator passou com 69 IDs, 212 conexões dirigidas e 28 recursos legados.
