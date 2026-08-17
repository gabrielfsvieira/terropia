# V00146 — Expansão Estrutural do Mundo de Terrópia
## Etapa 3/10 — Implementação completa de T2 e T3 (build v000148)

### Resultado
- T1 / Atenaria: 15 OVERWORLD preservadas.
- T2 / Altaria: 15 OVERWORLD implementadas (`AT-024`…`AT-038`).
- T3 / Mornaqua: 15 OVERWORLD implementadas (`AT-039`…`AT-053`).
- Total parcial implementado: **45 telas OVERWORLD**.

### Identidade reutilizada
- **Altaria / T2 / Mithril / Montanhoso:** granito, ardósia, ferro e pinho; terreno rochoso, caminhos de pedra, penhascos, vegetação alpina esparsa, iluminação `cool-highland`.
- **Mornaqua / T3 / Platina / Litoral:** driftwood, conchas, coral e corda; areia clara, costa rasa, coqueiros/capim de duna, composição costeira aberta, iluminação `bright-coastal`.

### Integração técnica
As telas usam o mesmo contrato `CRPG.data.mapsLegacy` 16×10 já empregado pelo projeto e são expandidas pelo runtime existente para 32×20. O arquivo `data/maps/altaria-mornaqua-expansion.js` gera as matrizes deterministicamente uma única vez no carregamento. Terrain 2.0, Water 2.0, Vegetation 2.0, region identity, static layers/cache, câmera e renderer existentes continuam compartilhados.

### Fronteiras implementadas
- T1 ↔ T2: `AT-017` ↔ `AT-024`.
- T1 ↔ T3: `AT-015` ↔ `AT-052`.
- Fronteiras futuras T2/T3 ↔ T4 continuam apenas planejadas; nenhum link runtime aponta para mapa não implementado.

### Conteúdo
Nenhum NPC, inimigo, recurso coletável, minério, planta coletável, casa, cidade, loja, crafting station, dungeon, baú, quest ou recompensa foi adicionado. Árvores/rochas/água são cenário derivado dos sistemas ambientais existentes.

### Landmarks ambientais previstos pela malha
Altaria usa cairns, lajes de ardósia, pinheiros, ponte de pedra, gargantas e terraços rochosos. Mornaqua usa lagoa rasa, enseada, dunas, coqueiros, conchas, coral e curvas de costa. São referências ambientais, não gameplay.

### Validação
Executar `tests/v000148-t2-t3-expansion-check.js`. Critérios: 15/15/15, 45 alcançáveis desde Atenaria, IDs únicos, mapas físicos presentes, conexões bidirecionais válidas e ausência de população nova nas 30 telas.
