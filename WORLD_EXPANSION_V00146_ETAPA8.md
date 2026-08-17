# V00146 — Expansão Estrutural do Mundo de Terrópia
## Etapa 8/10 — Content Validator e testes automatizados — pacote v00153

## Implementação

A infraestrutura de testes existente foi preservada. `tests/harness.js` continua sendo o bootstrap do runtime e passou a carregar também `data/map-codes.js` e `data/overworld-expansion-plan-v00146.js`, permitindo que o Content Validator e os checks de mundo comparem registry permanente, mapas físicos, locations, planejamento macro e conexões reais.

Foram adicionados os checks formais solicitados:

- `tests/v00146-world-count-check.js`
- `tests/v00146-world-connectivity-check.js`
- `tests/v00146-region-layout-check.js`
- `tests/v00146-no-population-check.js`

A lógica compartilhada está em `tests/v00146-world-test-utils.js`, sem criar framework de testes paralelo. O agregador `tests/v00146-world-suite.js` executa Content Validator + planejamento + os quatro checks.

## World count / IDs

O conjunto canônico de OVERWORLD é derivado do registry central `data/map-codes.js`. AT-005 e AT-006 são exceções legadas documentadas: mantêm `type:'town'` por compatibilidade, mas contam como telas OVERWORLD conforme o mapeamento histórico. Resultado:

- T1 Atenaria = 15/15
- T2 Altaria = 15/15
- T3 Mornaqua = 15/15
- T4 Calindra = 15/15
- T5 Solácia = 15/15
- T6 Blazíria = 15/15
- T7 Necrovícia = 15/15
- TOTAL = 105

AT-001…AT-014 são verificados contra área e tipo/função original. Todo código registrado também precisa apontar para mapa físico existente.

## Transições e conectividade

As direções N/S/L/O são inferidas das saídas físicas de borda do mapa real. Cada conexão OVERWORLD precisa ter retorno cardinal oposto. Destinos inexistentes, saída sem direção de borda e links unidirecionais geram diagnóstico com origem, nome, direção, destino e retorno esperado.

BFS iniciado em AT-005:

- reachableOverworldScreens = 105
- totalOverworldScreens = 105
- unreachable = 0
- T1 reachable = 15/15
- T2 reachable = 15/15
- T3 reachable = 15/15
- T4 reachable = 15/15
- T5 reachable = 15/15
- T6 reachable = 15/15
- T7 reachable = 15/15

## Region layout

O teste utiliza as coordenadas macro existentes em `overworld-expansion-plan-v00146.js` e valida relações conceituais, sem impor retângulos:

- T2 a leste de T1;
- T3 ao norte de T1;
- T4 a leste de T3;
- T5 a nordeste de T4;
- T6 continua a nordeste;
- T7 ocupa a extremidade nordeste.

Também exige pelo menos uma conexão física inter-regional em cada região.

## No population

AT-015…AT-113 são verificadas contra os registries reais de conteúdo. O teste falha se uma dessas 99 telas receber:

- NPC;
- inimigo;
- árvore registrada em `TREE_NODES` / Woodcutting;
- minério;
- planta coletável;
- baú/recompensa;
- quest ligada a NPC da expansão;
- mapa funcional não-OVERWORLD (construção/interior/dungeon/town).

Árvores e vegetação puramente visuais de Vegetation 2.0 não causam falso positivo porque não pertencem a `TREE_NODES`.

## Content Validator

`tests/content-validator.js` foi expandido para incorporar as invariantes centrais da expansão, além das validações já existentes de entidades, recursos, itens, quests, exits e conexões.

Resultado atual:

`content validator: OK (69 IDs de conteúdo, 292 conexões, 28 recursos; overworld 105/105)`

## Problema real encontrado e corrigido

A execução ampla detectou um efeito colateral de gameplay introduzido pela expansão geográfica: `professionRegionAvailable()` considerava uma região disponível apenas por existir em `CRPG.data.locations`. Com T2–T7 geograficamente implementadas, isso liberava etapas profissionais de regiões ainda sem população/recursos.

A função foi corrigida sem registry paralelo: agora deriva disponibilidade de gameplay dos registries já existentes (`npcs`, `resourceNodes` e `enemies`). Assim, geografia sem população não libera progressão profissional prematuramente. `tests/v00141-profession-runtime-check.js` voltou a passar.

Também foi atualizado `tests/v00146-overworld-plan-check.js`, que ainda esperava status `planned` para AT-015…AT-023 apesar de essas telas já estarem implementadas desde a Etapa 2.

## Execução

Suíte formal da expansão:

`[V00146 WORLD SUITE] OK (6/6)`

Inclui:

1. Content Validator
2. v00146-overworld-plan-check
3. v00146-world-count-check
4. v00146-world-connectivity-check
5. v00146-region-layout-check
6. v00146-no-population-check

A coleção histórica completa de testes top-level também foi executada. Muitos checks antigos são snapshots/version-locks de versões específicas (por exemplo, exigem literalmente títulos/BUILD v000xx/v001xx) e não constituem uma suíte cumulativa compatível com v00153; além disso há falhas históricas fora do escopo da expansão. Esses checks não foram relaxados artificialmente. O problema de gameplay diretamente provocado pela expansão (profissões) foi corrigido.
