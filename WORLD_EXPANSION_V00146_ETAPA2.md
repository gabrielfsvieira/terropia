# V00146 — Expansão Estrutural do Mundo de Terrópia
## Etapa 2/10 — Implementação Geográfica de Atenaria / T1 — build v00147

## Resultado
- OVERWORLD T1 inicial: **6** (AT-005, AT-006, AT-007, AT-011, AT-012, AT-014).
- Novas telas físicas: **9** (AT-015 a AT-023).
- OVERWORLD T1 final: **15**.
- Nenhum AT-001…AT-014 removido ou renomeado.
- Nenhum NPC, inimigo, recurso coletável, crafting station, loja, casa, cidade, dungeon, baú, quest ou recompensa novo foi adicionado.

## Integração técnica
As telas novas usam o contrato existente `CRPG.data.mapsLegacy` (grade-fonte 16×10, expandida pelo runtime existente para 32×20), Terrain 2.0/autotiling, Water 2.0, Vegetation 2.0, cache estático, pixel snapping, câmera e renderer existentes. O registry permanente `data/map-codes.js`, `data/locations.js` e o registry central `CRPG.data.mapConnections` foram estendidos; não foi criado registry paralelo.

## Preservação do legado e correção do planejamento
O plano da Etapa 1 sugeria usar a borda leste de AT-012 para AT-017. Essa borda já pertence à transição preservada AT-012 → AT-013 (Covil da Aranha) no runtime. A implementação não substitui essa conexão. A malha nova foi reroteada por conexões adicionais, preservando as rotas antigas. Apenas aberturas de borda necessárias à expansão foram acrescentadas em AT-005 e AT-006; o interior e o conteúdo dessas telas permanecem inalterados.

## Grafo físico novo de T1
- AT-006 ↔ AT-015 ↔ AT-016 ↔ AT-005
- AT-016 ↔ AT-018 ↔ AT-019 ↔ AT-017
- AT-019 ↔ AT-021 ↔ AT-020 ↔ AT-018 (loop)
- AT-020 ↔ AT-022 ↔ AT-023 ↔ AT-006 (loop sudoeste)
- AT-022 ↔ AT-005 (loop de retorno à Vila Carpinelli)

Todas as conexões físicas novas são bidirecionais e registradas no `mapConnections` já existente.

## Fronteiras continentais preparadas
- **T1 → T2 / Leste:** AT-017 — Margem dos Salgueiros. Borda leste visualmente aberta/preparada, sem conexão runtime para AT-024 nesta etapa, pois T2 ainda não foi implementada fisicamente.
- **T1 → T3 / Norte:** AT-015 — Estrada dos Campos. Borda norte preparada visualmente, sem conexão runtime para AT-052 nesta etapa.

Não existem referências runtime para mapas T2/T3 inexistentes.

## Landmarks ambientais das novas telas
- AT-015: estrada rural e cercas/campos.
- AT-016: clareira ampla.
- AT-017: corredor de margem/vegetação densa, fronteira leste.
- AT-018: entroncamento de caminhos.
- AT-019: campo aberto e eixo norte-sul.
- AT-020: trilha florida com pequeno curso d’água.
- AT-021: baixio com pequeno lago.
- AT-022: clareira arborizada e eixo de retorno.
- AT-023: caminho de cercas/campos.

A vegetação decorativa é gerada pelos sistemas visuais existentes e **não é registrada como Woodcutting**.

## Espaço reservado para população futura
As clareiras, margens, recuos e entroncamentos permanecem sem gameplay nesta versão, aptos para NPC/evento, pesca, minério, construção ou segredo em versões futuras.

## Validação obrigatória
O teste `tests/v00147-atenaria-expansion-check.js` verifica:
1. AT-001…AT-014 preservados no registry;
2. AT-015…AT-023 únicos e presentes;
3. exatamente 15 telas OVERWORLD de T1 pela regra consolidada (6 legado + 9 novas);
4. todos os novos mapas físicos presentes e 16×10 na fonte;
5. referências de `mapConnections` apontando somente para áreas existentes;
6. reciprocidade das novas conexões;
7. alcançabilidade das 15 telas T1 a partir de AT-005;
8. ausência de T2/T3 físicos nesta etapa.
