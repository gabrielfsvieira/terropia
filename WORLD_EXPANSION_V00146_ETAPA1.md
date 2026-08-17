# V00146 — Expansão Estrutural do Mundo de Terrópia
## Etapa 1/10 — Auditoria e planejamento definitivo do continente

> Status: **planejamento técnico, sem criação física de telas e sem novo gameplay**. Fontes primárias auditadas: projeto v00145 e `Mapa_Mundo_COMMON_RPG_v40.xlsx`.

## 1. Decisões de auditoria

- O registry permanente existente é `data/map-codes.js`; AT-001…AT-014 permanecem intocados.
- A planilha v40 é explícita ao classificar AT-005 e AT-006 como `[VILA / OVERWORLD]`. Assim, para a contagem continental, `town` é uma especialização de overworld e não uma exclusão.
- OVERWORLD existente em Atenaria: **AT-005, AT-006, AT-007, AT-011, AT-012, AT-014 = 6**.
- Não contam: AT-001…004 (interiores), AT-008…010 e AT-013 (dungeons).
- Cálculo: `15 - 6 = 9` novas telas de T1. Novos IDs T1: **AT-015…AT-023**.
- Demais regiões: 15 telas novas cada. Planejamento novo total: 9 + (6 × 15) = **99** telas. Último ID planejado: **AT-113**.
- Total continental: 6 existentes + 99 novas = **105 OVERWORLD**.

## 2. Reuso arquitetural obrigatório

- Regiões/biomas/tiers: `data/world.js`.
- Tiers materiais: `data/tiers.js` (Ferro, Mithril, Platina, Ouro, Rubi, Diamante, Onyx; nenhum Tier 8).
- Identidade ambiental: `js/region-identity.js`, `REGION_PROPS_v00068.md`, `VISUAL_BIBLE.md`.
- Terrain 2.0 / autotiling: `js/terrain-visuals.js` + `js/terrain-autotile.js`; Water 2.0: `js/water-visuals.js`; Vegetation 2.0: `js/vegetation-visuals.js`.
- Conexões: seguir o contrato declarativo de `CRPG.data.mapConnections` e o Content Validator; nenhuma conexão unidirecional acidental.
- Renderer/câmera/colisão/save: **não alterados nesta etapa**. O arquivo `data/overworld-expansion-plan-v00146.js` é registry de planejamento, não runtime de mapas.

## 3. Sete regiões e identidade resumida

| Tier | Região | Material | Bioma | Terreno / vegetação | Iluminação / composição | Materiais ambientais |
|---|---|---|---|---|---|---|
| T1 | Atenaria | Ferro | Campo / Floresta | soft grass / packed dirt / fieldstone; oak, meadow grass, wildflower | clear-warm; campos abertos + linhas rurais | oak, straw, fieldstone, terracotta |
| T2 | Altaria | Mithril | Montanhoso | cool stone / slate chips / thin grass; pine, alpine grass, lichen | cool-highland; acentos verticais de pedra + vegetação esparsa | granite, slate, iron, pine |
| T3 | Mornaqua | Platina | Litoral | pale sand / wet sand / shallow coast; palm, dune grass, coastal shrub | bright-coastal; formas horizontais baixas + costa | driftwood, shell, coral, rope |
| T4 | Calindra | Ouro | Selva Densa | deep humus / moss / rooted ground; broadleaf, vine, giant leaf | filtered-canopy; folhagem vertical densa + arcos | junglewood, vine, mossstone, resin |
| T5 | Solácia | Rubi | Deserto | warm sand / hardpan / sun-cracked stone; cactus, dry scrub, date palm | hard-sun; espaço negativo + marcos verticais isolados | sandstone, terracotta, linen, bronze |
| T6 | Blazíria | Diamante | Vulcânico | basalt / ash / magma fracture; ash scrub, charred stem | ember-underlight; diagonais recortadas + massas escuras | basalt, obsidian, blackiron, slag |
| T7 | Necrovícia | Onyx | Terras Devastadas | ashen soil / black stone / dead grass; dead root, thorn scrub, pale fungus | cold-haunted; assimetria quebrada + vazios | deadwood, blackstone, bone, soulglass |

Árvores e vegetação introduzidas pela expansão são **cenário por padrão**. A presença visual de pinheiros, coqueiros, carvalhos, árvores de selva ou árvores secas não registra Woodcutting nem outro recurso coletável.

## 4. Macro mapa textual

Coordenadas abaixo são **macro-coordenadas de planejamento**; não substituem coordenadas internas/tile coordinates dos mapas legados. O sudoeste está embaixo/esquerda; o nordeste em cima/direita.

```text
                         [ T7 — Necrovícia ]
                    [ T6 — Blazíria ]
               [ T5 — Solácia ]
     [ T3 — Mornaqua ][ T4 — Calindra ]
[ T1 — Atenaria ][ T2 — Altaria ]
```

## 5. Registry planejado — exatamente 105 telas

| ID | Nome | Região | Tier | Bioma | Macro (x,y) | N | S | L | O | Fronteira | Landmark ambiental | Reserva futura |
|---|---|---|---|---|---:|---|---|---|---|---|---|---|
| AT-005 | Vila Carpinelli | Atenaria | T1 | Campo / Floresta | (1,9) | AT-016 | AT-022 | AT-007 | AT-006 | — | legado preservado | conteúdo existente preservado |
| AT-006 | Vila Carpinelli — Área Oeste | Atenaria | T1 | Campo / Floresta | (0,9) | AT-015 | AT-023 | AT-005 | — | — | legado preservado | conteúdo existente preservado |
| AT-007 | Entrada da Caverna | Atenaria | T1 | Campo / Floresta | (2,9) | AT-011 | AT-014 | AT-018 | AT-005 | — | legado preservado | conteúdo existente preservado |
| AT-011 | Passagem da Bruxa | Atenaria | T1 | Campo / Floresta | (2,8) | — | AT-007 | AT-012 | AT-016 | — | legado preservado | conteúdo existente preservado |
| AT-012 | Floresta Obscura | Atenaria | T1 | Campo / Floresta | (3,8) | — | AT-018 | AT-017 | AT-011 | — | legado preservado | conteúdo existente preservado |
| AT-014 | Floresta dos Cogumelos | Atenaria | T1 | Campo / Floresta | (2,10) | AT-007 | — | AT-020 | AT-022 | — | legado preservado | conteúdo existente preservado |
| AT-015 | Estrada dos Campos | Atenaria | T1 | Campo / Floresta | (0,8) | AT-052 | AT-006 | AT-016 | — | sim | cerca de campo | recuo lateral para evento futuro |
| AT-016 | Clareira do Poente | Atenaria | T1 | Campo / Floresta | (1,8) | — | AT-005 | AT-011 | AT-015 | — | poço de pedra | clareira para encontro futuro |
| AT-017 | Margem dos Salgueiros | Atenaria | T1 | Campo / Floresta | (4,8) | — | AT-019 | AT-024 | AT-012 | sim | linha de margem | espaço futuro para pesca |
| AT-018 | Caminho do Prado | Atenaria | T1 | Campo / Floresta | (3,9) | AT-012 | AT-020 | AT-019 | AT-007 | — | carroça rural | entroncamento futuro |
| AT-019 | Campo do Leste | Atenaria | T1 | Campo / Floresta | (4,9) | AT-017 | AT-021 | — | AT-018 | sim | marco de estrada | área aberta para encontros |
| AT-020 | Trilha das Flores | Atenaria | T1 | Campo / Floresta | (3,10) | AT-018 | — | AT-021 | AT-014 | — | floreira campestre | espaço lateral para segredo |
| AT-021 | Baixio Verde | Atenaria | T1 | Campo / Floresta | (4,10) | AT-019 | — | — | AT-020 | — | pequeno lago | margem futura de pesca |
| AT-022 | Clareira dos Carvalhos | Atenaria | T1 | Campo / Floresta | (1,10) | AT-005 | — | AT-014 | AT-023 | — | carvalhos cenográficos | clareira para conteúdo futuro |
| AT-023 | Caminho das Cercas | Atenaria | T1 | Campo / Floresta | (0,10) | AT-006 | — | AT-022 | — | — | cercas rurais | recuo para estrutura futura |
| AT-024 | Passagem de Granito | Altaria | T2 | Montanhoso | (5,8) | — | — | AT-025 | AT-017 | sim | cairn | clareira para evento futuro |
| AT-025 | Trilha da Ardósia | Altaria | T2 | Montanhoso | (6,8) | — | AT-028 | AT-026 | AT-024 | — | placa de pinho | recuo para recurso futuro |
| AT-026 | Encosta dos Pinheiros | Altaria | T2 | Montanhoso | (7,8) | — | AT-029 | AT-027 | AT-025 | — | pinheiros cenográficos | margem/platô para atividade futura |
| AT-027 | Vale Alto | Altaria | T2 | Montanhoso | (8,8) | — | AT-030 | — | AT-026 | sim | lajes de ardósia | espaço lateral para segredo |
| AT-028 | Caminho do Cairn | Altaria | T2 | Montanhoso | (6,9) | AT-025 | AT-033 | AT-029 | — | — | cairn | clareira para evento futuro |
| AT-029 | Terraço Rochoso | Altaria | T2 | Montanhoso | (7,9) | AT-026 | AT-034 | AT-030 | AT-028 | — | placa de pinho | recuo para recurso futuro |
| AT-030 | Ponte de Pedra | Altaria | T2 | Montanhoso | (8,9) | AT-027 | AT-035 | AT-031 | AT-029 | — | pinheiros cenográficos | margem/platô para atividade futura |
| AT-031 | Garganta do Vento | Altaria | T2 | Montanhoso | (9,9) | — | — | — | AT-030 | sim | lajes de ardósia | espaço lateral para segredo |
| AT-032 | Base da Serra | Altaria | T2 | Montanhoso | (5,10) | — | — | AT-033 | — | — | cairn | clareira para evento futuro |
| AT-033 | Rampa de Lajes | Altaria | T2 | Montanhoso | (6,10) | AT-028 | AT-037 | AT-034 | AT-032 | — | placa de pinho | recuo para recurso futuro |
| AT-034 | Clareira Alpina | Altaria | T2 | Montanhoso | (7,10) | AT-029 | — | AT-035 | AT-033 | — | pinheiros cenográficos | margem/platô para atividade futura |
| AT-035 | Costão do Norte | Altaria | T2 | Montanhoso | (8,10) | AT-030 | AT-038 | AT-036 | AT-034 | — | lajes de ardósia | espaço lateral para segredo |
| AT-036 | Varanda de Pedra | Altaria | T2 | Montanhoso | (9,10) | AT-068 | — | — | AT-035 | sim | cairn | clareira para evento futuro |
| AT-037 | Desvio dos Pinheiros | Altaria | T2 | Montanhoso | (6,11) | AT-033 | — | — | — | — | placa de pinho | recuo para recurso futuro |
| AT-038 | Passo Oriental | Altaria | T2 | Montanhoso | (8,11) | AT-035 | — | — | — | sim | pinheiros cenográficos | margem/platô para atividade futura |
| AT-039 | Costa do Sul | Mornaqua | T3 | Litoral | (0,4) | — | — | AT-040 | — | sim | conchas | clareira para evento futuro |
| AT-040 | Praia Clara | Mornaqua | T3 | Litoral | (1,4) | — | AT-043 | AT-041 | AT-039 | — | tronco à deriva | recuo para recurso futuro |
| AT-041 | Dunas Baixas | Mornaqua | T3 | Litoral | (2,4) | — | AT-044 | AT-042 | AT-040 | — | coqueiros cenográficos | margem/platô para atividade futura |
| AT-042 | Ponta das Conchas | Mornaqua | T3 | Litoral | (3,4) | — | AT-045 | AT-054 | AT-041 | sim | coral | espaço lateral para segredo |
| AT-043 | Trilha da Maré | Mornaqua | T3 | Litoral | (1,5) | AT-040 | AT-048 | AT-044 | — | — | conchas | clareira para evento futuro |
| AT-044 | Lagoa Rasa | Mornaqua | T3 | Litoral | (2,5) | AT-041 | AT-049 | AT-045 | AT-043 | — | tronco à deriva | recuo para recurso futuro |
| AT-045 | Faixa de Coqueiros | Mornaqua | T3 | Litoral | (3,5) | AT-042 | AT-050 | AT-046 | AT-044 | — | coqueiros cenográficos | margem/platô para atividade futura |
| AT-046 | Enseada do Leste | Mornaqua | T3 | Litoral | (4,5) | — | AT-051 | — | AT-045 | sim | coral | espaço lateral para segredo |
| AT-047 | Margem de Areia | Mornaqua | T3 | Litoral | (0,6) | — | — | AT-048 | — | — | conchas | clareira para evento futuro |
| AT-048 | Passagem das Redes | Mornaqua | T3 | Litoral | (1,6) | AT-043 | AT-052 | AT-049 | AT-047 | — | tronco à deriva | recuo para recurso futuro |
| AT-049 | Baía Serena | Mornaqua | T3 | Litoral | (2,6) | AT-044 | — | AT-050 | AT-048 | — | coqueiros cenográficos | margem/platô para atividade futura |
| AT-050 | Costa dos Corais | Mornaqua | T3 | Litoral | (3,6) | AT-045 | AT-053 | AT-051 | AT-049 | — | coral | espaço lateral para segredo |
| AT-051 | Restinga Oriental | Mornaqua | T3 | Litoral | (4,6) | AT-046 | — | — | AT-050 | sim | conchas | clareira para evento futuro |
| AT-052 | Duna Interior | Mornaqua | T3 | Litoral | (1,7) | AT-048 | AT-015 | — | — | — | tronco à deriva | recuo para recurso futuro |
| AT-053 | Ponta do Norte | Mornaqua | T3 | Litoral | (3,7) | AT-050 | — | — | — | sim | coqueiros cenográficos | margem/platô para atividade futura |
| AT-054 | Entrada da Selva | Calindra | T4 | Selva Densa | (5,4) | — | — | AT-055 | AT-042 | sim | arco de cipós | clareira para evento futuro |
| AT-055 | Trilha das Raízes | Calindra | T4 | Selva Densa | (6,4) | — | AT-058 | AT-056 | AT-054 | — | raízes | recuo para recurso futuro |
| AT-056 | Bosque Fechado | Calindra | T4 | Selva Densa | (7,4) | — | AT-059 | AT-057 | AT-055 | — | folhas gigantes | margem/platô para atividade futura |
| AT-057 | Arco de Cipós | Calindra | T4 | Selva Densa | (8,4) | — | AT-060 | AT-069 | AT-056 | sim | monólito de musgo | espaço lateral para segredo |
| AT-058 | Clareira Úmida | Calindra | T4 | Selva Densa | (6,5) | AT-055 | AT-063 | AT-059 | — | — | arco de cipós | clareira para evento futuro |
| AT-059 | Solo de Musgo | Calindra | T4 | Selva Densa | (7,5) | AT-056 | AT-064 | AT-060 | AT-058 | — | raízes | recuo para recurso futuro |
| AT-060 | Passagem das Folhas | Calindra | T4 | Selva Densa | (8,5) | AT-057 | AT-065 | AT-061 | AT-059 | — | folhas gigantes | margem/platô para atividade futura |
| AT-061 | Selva Oriental | Calindra | T4 | Selva Densa | (9,5) | — | AT-066 | — | AT-060 | sim | monólito de musgo | espaço lateral para segredo |
| AT-062 | Baixada Verde | Calindra | T4 | Selva Densa | (5,6) | — | — | AT-063 | — | — | arco de cipós | clareira para evento futuro |
| AT-063 | Corredor de Raízes | Calindra | T4 | Selva Densa | (6,6) | AT-058 | AT-067 | AT-064 | AT-062 | — | raízes | recuo para recurso futuro |
| AT-064 | Clareira do Dossel | Calindra | T4 | Selva Densa | (7,6) | AT-059 | — | AT-065 | AT-063 | — | folhas gigantes | margem/platô para atividade futura |
| AT-065 | Margem Escura | Calindra | T4 | Selva Densa | (8,6) | AT-060 | AT-068 | AT-066 | AT-064 | — | monólito de musgo | espaço lateral para segredo |
| AT-066 | Mata de Resina | Calindra | T4 | Selva Densa | (9,6) | AT-061 | — | — | AT-065 | sim | arco de cipós | clareira para evento futuro |
| AT-067 | Desvio das Folhas | Calindra | T4 | Selva Densa | (6,7) | AT-063 | — | — | — | — | raízes | recuo para recurso futuro |
| AT-068 | Saída da Selva | Calindra | T4 | Selva Densa | (8,7) | AT-065 | AT-036 | — | — | sim | folhas gigantes | margem/platô para atividade futura |
| AT-069 | Faixa de Areia | Solácia | T5 | Deserto | (9,1) | — | — | AT-070 | AT-057 | sim | marco de arenito | clareira para evento futuro |
| AT-070 | Dunas do Sul | Solácia | T5 | Deserto | (10,1) | — | AT-073 | AT-071 | AT-069 | — | cactos | recuo para recurso futuro |
| AT-071 | Planície Seca | Solácia | T5 | Deserto | (11,1) | — | AT-074 | AT-072 | AT-070 | — | ondulações de duna | margem/platô para atividade futura |
| AT-072 | Marco de Arenito | Solácia | T5 | Deserto | (12,1) | AT-096 | AT-075 | — | AT-071 | sim | ânfora decorativa | espaço lateral para segredo |
| AT-073 | Trilha do Sol | Solácia | T5 | Deserto | (10,2) | AT-070 | AT-078 | AT-074 | — | — | marco de arenito | clareira para evento futuro |
| AT-074 | Baixio Árido | Solácia | T5 | Deserto | (11,2) | AT-071 | AT-079 | AT-075 | AT-073 | — | cactos | recuo para recurso futuro |
| AT-075 | Duna Longa | Solácia | T5 | Deserto | (12,2) | AT-072 | AT-080 | AT-076 | AT-074 | — | ondulações de duna | margem/platô para atividade futura |
| AT-076 | Passagem do Leste | Solácia | T5 | Deserto | (13,2) | — | AT-081 | — | AT-075 | sim | ânfora decorativa | espaço lateral para segredo |
| AT-077 | Leito Seco | Solácia | T5 | Deserto | (9,3) | — | — | AT-078 | — | — | marco de arenito | clareira para evento futuro |
| AT-078 | Campo de Cactos | Solácia | T5 | Deserto | (10,3) | AT-073 | AT-082 | AT-079 | AT-077 | — | cactos | recuo para recurso futuro |
| AT-079 | Planície de Pedra | Solácia | T5 | Deserto | (11,3) | AT-074 | — | AT-080 | AT-078 | — | ondulações de duna | margem/platô para atividade futura |
| AT-080 | Dunas Altas | Solácia | T5 | Deserto | (12,3) | AT-075 | AT-083 | AT-081 | AT-079 | — | ânfora decorativa | espaço lateral para segredo |
| AT-081 | Garganta de Areia | Solácia | T5 | Deserto | (13,3) | AT-076 | — | — | AT-080 | sim | marco de arenito | clareira para evento futuro |
| AT-082 | Desvio das Tâmaras | Solácia | T5 | Deserto | (10,4) | AT-078 | — | — | — | — | cactos | recuo para recurso futuro |
| AT-083 | Borda do Basalto | Solácia | T5 | Deserto | (12,4) | AT-080 | — | — | — | sim | ondulações de duna | margem/platô para atividade futura |
| AT-084 | Base de Basalto | Blazíria | T6 | Vulcânico | (12,-2) | — | — | AT-085 | — | sim | espigões de basalto | clareira para evento futuro |
| AT-085 | Trilha de Cinzas | Blazíria | T6 | Vulcânico | (13,-2) | — | AT-088 | AT-086 | AT-084 | — | respiradouro de lava | recuo para recurso futuro |
| AT-086 | Fratura Escura | Blazíria | T6 | Vulcânico | (14,-2) | — | AT-089 | AT-087 | AT-085 | — | obsidiana | margem/platô para atividade futura |
| AT-087 | Encosta Vulcânica | Blazíria | T6 | Vulcânico | (15,-2) | — | AT-090 | AT-099 | AT-086 | sim | fraturas de magma | espaço lateral para segredo |
| AT-088 | Campo de Escória | Blazíria | T6 | Vulcânico | (13,-1) | AT-085 | AT-093 | AT-089 | — | — | espigões de basalto | clareira para evento futuro |
| AT-089 | Passagem de Obsidiana | Blazíria | T6 | Vulcânico | (14,-1) | AT-086 | AT-094 | AT-090 | AT-088 | — | respiradouro de lava | recuo para recurso futuro |
| AT-090 | Vale de Cinzas | Blazíria | T6 | Vulcânico | (15,-1) | AT-087 | AT-095 | AT-091 | AT-089 | — | obsidiana | margem/platô para atividade futura |
| AT-091 | Dobra de Basalto | Blazíria | T6 | Vulcânico | (16,-1) | — | AT-096 | — | AT-090 | sim | fraturas de magma | espaço lateral para segredo |
| AT-092 | Terraço Negro | Blazíria | T6 | Vulcânico | (12,0) | — | — | AT-093 | — | — | espigões de basalto | clareira para evento futuro |
| AT-093 | Corredor de Rocha | Blazíria | T6 | Vulcânico | (13,0) | AT-088 | AT-097 | AT-094 | AT-092 | — | respiradouro de lava | recuo para recurso futuro |
| AT-094 | Respiradouro Baixo | Blazíria | T6 | Vulcânico | (14,0) | AT-089 | — | AT-095 | AT-093 | — | obsidiana | margem/platô para atividade futura |
| AT-095 | Ladeira de Magma | Blazíria | T6 | Vulcânico | (15,0) | AT-090 | AT-098 | AT-096 | AT-094 | — | fraturas de magma | espaço lateral para segredo |
| AT-096 | Espigões do Leste | Blazíria | T6 | Vulcânico | (16,0) | AT-091 | AT-072 | — | AT-095 | sim | espigões de basalto | clareira para evento futuro |
| AT-097 | Desvio das Cinzas | Blazíria | T6 | Vulcânico | (13,1) | AT-093 | — | — | — | — | respiradouro de lava | recuo para recurso futuro |
| AT-098 | Borda Devastada | Blazíria | T6 | Vulcânico | (15,1) | AT-095 | — | — | — | sim | obsidiana | margem/platô para atividade futura |
| AT-099 | Entrada Devastada | Necrovícia | T7 | Terras Devastadas | (15,-5) | — | — | AT-100 | AT-087 | sim | raízes mortas | clareira para evento futuro |
| AT-100 | Trilha das Raízes Mortas | Necrovícia | T7 | Terras Devastadas | (16,-5) | — | AT-103 | AT-101 | AT-099 | — | pedra negra | recuo para recurso futuro |
| AT-101 | Campo Cinzento | Necrovícia | T7 | Terras Devastadas | (17,-5) | — | AT-104 | AT-102 | AT-100 | — | cerca quebrada | margem/platô para atividade futura |
| AT-102 | Pedras Negras | Necrovícia | T7 | Terras Devastadas | (18,-5) | — | AT-105 | — | AT-101 | sim | fungos pálidos | espaço lateral para segredo |
| AT-103 | Caminho Quebrado | Necrovícia | T7 | Terras Devastadas | (16,-4) | AT-100 | AT-108 | AT-104 | — | — | raízes mortas | clareira para evento futuro |
| AT-104 | Baixada de Cinzas | Necrovícia | T7 | Terras Devastadas | (17,-4) | AT-101 | AT-109 | AT-105 | AT-103 | — | pedra negra | recuo para recurso futuro |
| AT-105 | Bosque Seco | Necrovícia | T7 | Terras Devastadas | (18,-4) | AT-102 | AT-110 | AT-106 | AT-104 | — | cerca quebrada | margem/platô para atividade futura |
| AT-106 | Passagem dos Espinhos | Necrovícia | T7 | Terras Devastadas | (19,-4) | — | AT-111 | — | AT-105 | sim | fungos pálidos | espaço lateral para segredo |
| AT-107 | Planície Morta | Necrovícia | T7 | Terras Devastadas | (15,-3) | — | — | AT-108 | — | — | raízes mortas | clareira para evento futuro |
| AT-108 | Corredor de Pedra Negra | Necrovícia | T7 | Terras Devastadas | (16,-3) | AT-103 | AT-112 | AT-109 | AT-107 | — | pedra negra | recuo para recurso futuro |
| AT-109 | Clareira Pálida | Necrovícia | T7 | Terras Devastadas | (17,-3) | AT-104 | — | AT-110 | AT-108 | — | cerca quebrada | margem/platô para atividade futura |
| AT-110 | Fenda Silenciosa | Necrovícia | T7 | Terras Devastadas | (18,-3) | AT-105 | AT-113 | AT-111 | AT-109 | — | fungos pálidos | espaço lateral para segredo |
| AT-111 | Margem Sombria | Necrovícia | T7 | Terras Devastadas | (19,-3) | AT-106 | — | — | AT-110 | sim | raízes mortas | clareira para evento futuro |
| AT-112 | Desvio das Raízes | Necrovícia | T7 | Terras Devastadas | (16,-2) | AT-108 | — | — | — | — | pedra negra | recuo para recurso futuro |
| AT-113 | Extremo Nordeste | Necrovícia | T7 | Terras Devastadas | (18,-2) | AT-110 | — | — | — | sim | cerca quebrada | margem/platô para atividade futura |

## 6. Rotas principais, secundárias e loops

- **Atenaria — rota principal:** AT-006 → AT-005 → AT-007 → AT-018 → AT-019 → AT-017.
- **Altaria — rota principal:** AT-024 → AT-025 → AT-026 → AT-027 → AT-030 → AT-035 → AT-036.
- **Mornaqua — rota principal:** AT-052 → AT-048 → AT-049 → AT-050 → AT-045 → AT-042.
- **Calindra — rota principal:** AT-054 → AT-055 → AT-056 → AT-057.
- **Solácia — rota principal:** AT-069 → AT-070 → AT-071 → AT-072.
- **Blazíria — rota principal:** AT-096 → AT-091 → AT-090 → AT-087.
- **Necrovícia — rota principal:** AT-099 → AT-100 → AT-101 → AT-102 → AT-105 → AT-110 → AT-113.

Rotas secundárias são formadas pelas adjacências cardinais adicionais da tabela; cada região possui bifurcações e ciclos locais. A malha foi deliberadamente mantida com múltiplas conexões laterais, evitando uma cadeia única de 15 telas. Os loops são verificáveis no registry pela presença de ciclos no grafo não direcionado.

## 7. Conexões inter-regionais e telas de transição

- **Atenaria ↔ Altaria:** AT-017 L↔O AT-024. Ambas são telas de fronteira; a primeira deve carregar sinais graduais do bioma seguinte e a segunda preservar elementos residuais do anterior.
- **Atenaria ↔ Mornaqua:** AT-015 N↔S AT-052. Ambas são telas de fronteira; a primeira deve carregar sinais graduais do bioma seguinte e a segunda preservar elementos residuais do anterior.
- **Mornaqua ↔ Calindra:** AT-042 L↔O AT-054. Ambas são telas de fronteira; a primeira deve carregar sinais graduais do bioma seguinte e a segunda preservar elementos residuais do anterior.
- **Altaria ↔ Calindra:** AT-036 N↔S AT-068. Ambas são telas de fronteira; a primeira deve carregar sinais graduais do bioma seguinte e a segunda preservar elementos residuais do anterior.
- **Calindra ↔ Solácia:** AT-057 L↔O AT-069. Ambas são telas de fronteira; a primeira deve carregar sinais graduais do bioma seguinte e a segunda preservar elementos residuais do anterior.
- **Solácia ↔ Blazíria:** AT-072 N↔S AT-096. Ambas são telas de fronteira; a primeira deve carregar sinais graduais do bioma seguinte e a segunda preservar elementos residuais do anterior.
- **Blazíria ↔ Necrovícia:** AT-087 L↔O AT-099. Ambas são telas de fronteira; a primeira deve carregar sinais graduais do bioma seguinte e a segunda preservar elementos residuais do anterior.

Diretriz de blend: terreno dominante permanece da região proprietária; microdecoração, vegetação cenográfica, pedra, umidade/areia/cinza e iluminação podem migrar gradualmente nas telas de fronteira. Mudanças de paleta nunca devem exigir nova regra de gameplay.

## 8. Progressão geográfica

- T1: caminhos legíveis, campos abertos, água baixa e clareiras.
- T2: relevo rochoso, corredores de serra e desnível visual moderado.
- T3: costa, dunas baixas, enseadas e água como elemento de silhueta.
- T4: maior densidade vegetal, raízes e corredores naturais, sem labirinto artificial.
- T5: grandes vazios, dunas, leitos secos e gargalos de arenito.
- T6: diagonais de basalto, cinza, fraturas e passagens estreitas legíveis.
- T7: assimetria, árvores secas, pedra negra e vazios dramáticos, mantendo rota principal reconhecível.

## 9. Espaço reservado para conteúdo futuro

Cada tela planejada possui uma reserva explícita na tabela (clareira, recuo, margem/platô ou espaço lateral). Essas reservas **não instanciam NPC, inimigo, recurso, loja, crafting, quest, baú, dungeon, construção ou recompensa** nesta versão.

## 10. Validação matemática e de alcançabilidade

- T1 Atenaria: 15/15
- T2 Altaria: 15/15
- T3 Mornaqua: 15/15
- T4 Calindra: 15/15
- T5 Solácia: 15/15
- T6 Blazíria: 15/15
- T7 Necrovícia: 15/15
- **TOTAL = 105/105**
- BFS a partir de AT-005: `reachableOverworldScreens = 105`
- `totalOverworldScreens = 105`
- `unreachable = 0`
- Todas as transições N/S/L/O possuem retorno cardinal oposto no registry de planejamento.

## 11. Restrições para as próximas etapas

- Não alterar IDs AT-001…AT-014 nem conteúdo legado associado.
- Ao materializar novas telas, promover IDs planejados para o registry permanente `data/map-codes.js` sem reutilização e manter `data/locations.js`/map definitions coerentes.
- Usar os sistemas atuais de terreno, água, vegetação, renderer, câmera, colisão, save e validator. Só estender contratos existentes quando necessário.
- Rodar Content Validator e testes de conectividade a cada lote de mapas físicos.
- Não registrar árvores cenográficas como recursos coletáveis automaticamente.
