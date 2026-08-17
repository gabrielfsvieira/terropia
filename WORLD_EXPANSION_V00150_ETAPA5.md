# V00150 — Expansão estrutural do mundo de Terrópia
## Etapa 5/10 — T6, T7 e fechamento das 105 telas

### Escopo implementado

- **T6 — Blazíria**: AT-084 a AT-098, 15 telas OVERWORLD, bioma Vulcânico, tier material **Diamante**.
- **T7 — Necrovícia**: AT-099 a AT-113, 15 telas OVERWORLD, bioma Terras Devastadas, tier material **Onyx**.
- T1–T5 foram preservadas, com a única alteração geográfica necessária na borda norte de AT-072 para ativar a conexão previamente planejada com T6.

### Identidade ambiental reutilizada

Blazíria usa as definições existentes de `data/world.js` e `js/region-identity.js`: basalto, obsidiana, cinza, fraturas de magma, massas escuras e iluminação de brasa. Necrovícia usa solo cinzento, pedra negra, raízes mortas, vegetação seca/fungos pálidos, assimetria e bolsões de vazio. A implementação reutiliza o pipeline existente de Terrain 2.0, autotiling, Water/Vegetation/decoração regional, renderer, câmera e cache; não existe renderer especial por mapa.

### Fronteiras

- **T5 ↔ T6**: AT-072 N ↔ S AT-096.
- **T6 ↔ T7**: AT-087 L ↔ O AT-099.

### Conteúdo proibido

Nenhum conteúdo de gameplay novo foi adicionado nas 30 telas: NPCs, inimigos, recursos, minérios, plantas coletáveis, crafting stations, lojas, casas, cidades, dungeons, baús, quests e recompensas permanecem ausentes. Árvores/vegetação/rochas são exclusivamente cenário quando derivadas pelos sistemas ambientais existentes.

### Validação global

```text
T1 = 15
T2 = 15
T3 = 15
T4 = 15
T5 = 15
T6 = 15
T7 = 15
totalOverworldScreens = 105
reachableOverworldScreens = 105
unreachable = 0
```

Diagnóstico por região no BFS: T1=15, T2=15, T3=15, T4=15, T5=15, T6=15, T7=15. O Content Validator passa com 292 conexões dirigidas. Compatibilidade de save passa no teste v00133. O teste histórico `v00128-camera-check.js` ainda depende da presença literal da string `v00128` no HTML e portanto não é um teste funcional de regressão para esta versão; nenhum arquivo de câmera foi alterado nesta etapa.
