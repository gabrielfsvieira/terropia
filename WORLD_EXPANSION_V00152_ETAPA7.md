# V00152 — Expansão Estrutural do Mundo de Terrópia — Etapa 7/10

## Atualização completa da planilha de mapeamento

A planilha `Mapa_Mundo_COMMON_RPG_v41.xlsx` foi reconstruída a partir da estrutura visual/convenções da v40 e sincronizada com o projeto atual após a revisão geográfica v000151.

### Resultado

- Overworld: 105 telas.
- T1 Atenaria: 15/15.
- T2 Altaria: 15/15.
- T3 Mornaqua: 15/15.
- T4 Calindra: 15/15.
- T5 Solácia: 15/15.
- T6 Blazíria: 15/15.
- T7 Necrovícia: 15/15.
- IDs de overworld únicos: 105.
- Próximo código livre do registry: AT-114.
- Abas preservadas: Overworld, Construções, Dungeons e Catálogo.
- Conteúdo legado AT-001…AT-014 preservado no Catálogo; transições cardinais das telas OVERWORLD legadas sincronizadas com o runtime atual.
- Telas AT-015…AT-113 registradas como `Novo / v00146`, sem recursos, NPCs ou inimigos novos.

### Sincronização projeto ↔ planilha

A fonte implementada foi validada usando `data/locations.js`, `data/overworld-expansion-plan-v00146.js`, `data/world.js`, `data/map-codes.js` e `CRPG.data.mapConnections`. O teste geográfico v000151 também foi executado antes da geração da planilha e confirmou `reachableOverworldScreens = 105`, `unreachable = 0` e 15/15 por região.

A aba Overworld usa as coordenadas macro do registry de planejamento sincronizado para representar a progressão sudoeste → nordeste e contém exatamente uma célula grande por tela. A cor regional é auxiliar; cada célula também explicita REGIÃO, BIOMA e TIER.

### Validação do arquivo

O XLSX final foi exportado, reaberto e verificado. As quatro abas esperadas permanecem presentes, as 105 telas aparecem tanto no mapa visual quanto no Catálogo, não existem IDs duplicados ou ausentes e não foram encontrados erros de fórmula no arquivo.
