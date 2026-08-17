# V00146 — Expansão estrutural do mundo de Terrópia
## Etapa 6/10 — Revisão geográfica, conectividade e landmarks (build v000151)

### Resultado
- Overworld preservado em **105 telas**, sem novos IDs ou novas telas.
- Contagem: T1=15, T2=15, T3=15, T4=15, T5=15, T6=15, T7=15.
- BFS desde AT-005: `reachableOverworldScreens=105`, `unreachable=0`.
- Todas as 105 matrizes físicas possuem suas saídas cardinais acessíveis e conectadas internamente.
- Todas as conexões controladas pelo overworld têm retorno N↔S / L↔O. A assimetria de coordenada de spawn AT-005↔AT-007 é legado preservado e explicitamente aceita pelo teste; sua direção continua O↔L.

### Grafo e rotas
Cada região mantém múltiplas bifurcações e loops. O teste de revisão exige ciclo interno mínimo (cycle rank >= 3) para T1–T7, impedindo que uma região seja reduzida a uma corrente linear de 15 telas. As sete regiões continuam ligadas em uma única componente continental e T7 permanece alcançável a partir de Atenaria.

### Sincronização do planejamento
O registry `data/overworld-expansion-plan-v00146.js` foi sincronizado com o runtime para as rotas de Atenaria que haviam sido reroteadas nas etapas de implementação para preservar o conteúdo legado. Nenhum ID foi alterado. A revisão automática agora exige equivalência entre as transições planejadas e `CRPG.data.mapConnections` para todas as 105 telas.

### Landmarks e leitura espacial
A revisão reutiliza a biblioteca `region-props` existente. Foram selecionados **21 landmarks visuais curados** (3 por região) usando exclusivamente props `visualOnly`, sem colisão/interação/save. Eles entram pelo mesmo `regionalSignaturePlan` e pela mesma static scenery layer/cache já existente; não há renderer paralelo nem custo dinâmico por frame.

A colocação é determinística, evita zonas de gameplay já reservadas e preserva espaço negativo. Os demais props regionais continuam usando a distribuição determinística existente, com densidade definida pela identidade de cada região.

### Transições ambientais
As 7 costuras continentais receberam **14 assinaturas de mistura** (um lado de cada fronteira), também com props visuais já existentes da região vizinha:
- T1↔T2: AT-017 / AT-024
- T1↔T3: AT-015 / AT-052
- T3↔T4: AT-042 / AT-054
- T2↔T4: AT-036 / AT-068
- T4↔T5: AT-057 / AT-069
- T5↔T6: AT-072 / AT-096
- T6↔T7: AT-087 / AT-099

Isso torna a troca visual gradual sem modificar colisão, tier, recursos ou gameplay.

### Água, pontes, vegetação e colisão
- Water 2.0, Terrain 2.0 e Vegetation 2.0 foram preservados sem sistema alternativo.
- O teste verifica que água/obstáculos não ocupem as células de saída das conexões e que as saídas estruturais das telas expandidas pertençam ao mesmo componente navegável físico.
- Saídas de uma mesma tela precisam pertencer ao mesmo componente navegável físico.
- Árvores/props adicionados por esta revisão permanecem puramente visuais e não são registrados em Woodcutting.
- Pontes e travessias existentes continuam submetidas à matriz lógica e ao sistema de colisão já usado pelo jogo; nenhuma ponte interativa nova foi criada nesta etapa.

### Conteúdo proibido
Nenhum NPC, inimigo, recurso coletável, minério, planta coletável, quest, cidade, casa, loja, crafting station, dungeon, baú ou recompensa foi adicionado a AT-015…AT-113.

### Validação automática
Novo teste: `tests/v000151-geography-review-check.js`.

Resultado esperado e obtido:
```
T1 reachable = 15/15
T2 reachable = 15/15
T3 reachable = 15/15
T4 reachable = 15/15
T5 reachable = 15/15
T6 reachable = 15/15
T7 reachable = 15/15
reachableOverworldScreens = 105
totalOverworldScreens = 105
unreachable = 0
```
