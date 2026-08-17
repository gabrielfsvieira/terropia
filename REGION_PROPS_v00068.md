# Terrópia — Biblioteca de Props Regionais v00068

> Documento complementar à `VISUAL_BIBLE.md`. A Bíblia Visual continua sendo a referência normativa. Esta biblioteca prepara arte reutilizável para as sete regiões já registradas em `data/world.js`; **não cria mapas, colisões, interações, IDs de terreno ou dados persistidos**.

## Contrato de uso

- API runtime: `CRPG.systems.regionProps` / `js/region-props.js`.
- Cada prop é visual-only por padrão: `interactive:false`, `collision:false`, `visualOnly:true`. Um mapa futuro deve declarar gameplay separadamente se precisar de interação.
- Luz global: superior-esquerda. Sombras de contato: baixo/direita. Pixel grid inteiro e `imageSmoothingEnabled=false`.
- Span máximo de referência: **54 px lógicos**, para leitura dentro/próximo de um tile de 60 px sem competir automaticamente com personagens/recursos interativos.
- IDs são exclusivos da biblioteca e têm namespace por região (`atenaria_*`, `altaria_*` etc.). Eles **não substituem nem alteram IDs existentes do jogo**.
- `render(ctx,id,x,y)` desenha um prop; `exampleLayout(region)` cria uma composição demonstrativa; `renderExample(ctx,region)` desenha os 10 exemplos da região.
- Preview de desenvolvimento: `examples/region-props-preview.html`. Ele não registra nenhum mapa.

## Atenaria — Campo / Floresta

**Materiais:** `oak`, `straw`, `fieldstone`, `iron`, `linen`, `terracotta`.  
**Paleta:** outline `#293026`, deep `#4b3928`, shadow `#72553a`, base `#9a7448`, highlight `#c7a56c`, accent `#7ea653`, accent2 `#d8c97a`.

| ID | Prop | Material | Silhueta | Span |
|---|---|---|---|---|
| `atenaria_hay_bale` | Fardo de Feno | `straw` | `bundle` | 46×28 |
| `atenaria_oak_sign` | Placa de Carvalho | `oak` | `sign` | 34×48 |
| `atenaria_field_fence` | Cerca de Campo | `oak` | `fence` | 54×32 |
| `atenaria_farm_cart` | Carroça Rural | `oak` | `cart` | 54×40 |
| `atenaria_stone_well` | Poço de Pedra | `fieldstone` | `well` | 48×46 |
| `atenaria_scarecrow` | Espantalho | `linen` | `totem` | 42×54 |
| `atenaria_milk_churn` | Latão de Leite | `iron` | `vessel` | 28×38 |
| `atenaria_flower_planter` | Floreira Campestre | `terracotta` | `planter` | 44×30 |
| `atenaria_field_lantern` | Lampião de Estrada | `iron` | `lamp` | 26×52 |
| `atenaria_grain_sack` | Saco de Grãos | `linen` | `sack` | 30×36 |

## Altaria — Montanhoso

**Materiais:** `granite`, `slate`, `iron`, `rope`, `pine`, `crystal`.  
**Paleta:** outline `#252b30`, deep `#3c464e`, shadow `#59656b`, base `#78858a`, highlight `#aeb9b9`, accent `#6f9eb2`, accent2 `#d0e3de`.

| ID | Prop | Material | Silhueta | Span |
|---|---|---|---|---|
| `altaria_summit_cairn` | Marco de Cume | `granite` | `cairn` | 40×42 |
| `altaria_cliff_sign` | Placa de Penhasco | `pine` | `sign` | 34×48 |
| `altaria_rope_post` | Poste de Corda | `rope` | `post` | 30×50 |
| `altaria_wind_chime` | Sino de Vento | `iron` | `hanger` | 30×48 |
| `altaria_alpine_shrine` | Santuário Alpino | `granite` | `shrine` | 42×52 |
| `altaria_ore_cart` | Vagonete de Minério | `iron` | `cart` | 54×38 |
| `altaria_slate_bench` | Banco de Ardósia | `slate` | `bench` | 50×30 |
| `altaria_crystal_marker` | Marco de Cristal | `crystal` | `spike` | 30×50 |
| `altaria_eagle_totem` | Totem da Águia | `granite` | `totem` | 42×54 |
| `altaria_snow_pole` | Baliza de Trilha | `pine` | `post` | 24×52 |

## Mornaqua — Litoral

**Materiais:** `driftwood`, `shell`, `coral`, `rope`, `brass`, `canvas`.  
**Paleta:** outline `#26343a`, deep `#4b5b58`, shadow `#687b70`, base `#9b9a72`, highlight `#d8c99b`, accent `#4fa5a3`, accent2 `#efb479`.

| ID | Prop | Material | Silhueta | Span |
|---|---|---|---|---|
| `mornaqua_shell_pile` | Monte de Conchas | `shell` | `pile` | 42×26 |
| `mornaqua_driftwood_log` | Tronco à Deriva | `driftwood` | `log` | 52×24 |
| `mornaqua_fishing_crate` | Caixote de Pesca | `driftwood` | `crate` | 42×34 |
| `mornaqua_net_rack` | Varal de Rede | `rope` | `rack` | 54×46 |
| `mornaqua_buoy_post` | Boia de Sinalização | `canvas` | `post` | 28×48 |
| `mornaqua_coral_fan` | Leque de Coral | `coral` | `fan` | 42×40 |
| `mornaqua_brass_anchor` | Âncora Costeira | `brass` | `anchor` | 42×46 |
| `mornaqua_palm_basket` | Cesto de Praia | `canvas` | `basket` | 38×32 |
| `mornaqua_tide_lantern` | Lanterna de Maré | `brass` | `lamp` | 28×50 |
| `mornaqua_canoe_prow` | Proa de Canoa | `driftwood` | `prow` | 54×30 |

## Calindra — Selva Densa

**Materiais:** `junglewood`, `vine`, `mossstone`, `bone`, `resin`, `broadleaf`.  
**Paleta:** outline `#1e2d27`, deep `#334a38`, shadow `#4d6844`, base `#6f8951`, highlight `#a5b96a`, accent `#d95f58`, accent2 `#69bca9`.

| ID | Prop | Material | Silhueta | Span |
|---|---|---|---|---|
| `calindra_vine_arch` | Arco de Cipós | `vine` | `arch` | 54×54 |
| `calindra_root_stump` | Toco de Raízes | `junglewood` | `stump` | 48×38 |
| `calindra_poison_bloom` | Flor Venenosa | `broadleaf` | `bloom` | 42×44 |
| `calindra_carved_idol` | Ídolo Entalhado | `junglewood` | `totem` | 38×54 |
| `calindra_moss_monolith` | Monólito de Musgo | `mossstone` | `shrine` | 40×54 |
| `calindra_hanging_vines` | Cipós Suspensos | `vine` | `hanger` | 46×50 |
| `calindra_resin_bowl` | Tigela de Resina | `resin` | `bowl` | 34×24 |
| `calindra_giant_leaf` | Folha Gigante | `broadleaf` | `fan` | 48×42 |
| `calindra_bone_charm` | Talismã de Ossos | `bone` | `hanger` | 28×48 |
| `calindra_jungle_basket` | Cesto da Selva | `vine` | `basket` | 38×34 |

## Solácia — Deserto

**Materiais:** `sandstone`, `terracotta`, `linen`, `bronze`, `cactus`, `bone`.  
**Paleta:** outline `#3a3028`, deep `#6b4e32`, shadow `#9b7043`, base `#c3945c`, highlight `#e7c17f`, accent `#4f8060`, accent2 `#d85e3d`.

| ID | Prop | Material | Silhueta | Span |
|---|---|---|---|---|
| `solacia_sand_obelisk` | Obelisco de Areia | `sandstone` | `shrine` | 34×54 |
| `solacia_clay_amphora` | Ânfora de Barro | `terracotta` | `vessel` | 28×42 |
| `solacia_sun_banner` | Estandarte Solar | `linen` | `banner` | 34×54 |
| `solacia_desert_lantern` | Lanterna do Deserto | `bronze` | `lamp` | 28×50 |
| `solacia_cactus_cluster` | Grupo de Cactos | `cactus` | `cactus` | 44×48 |
| `solacia_dune_marker` | Marco de Duna | `sandstone` | `post` | 28×46 |
| `solacia_date_basket` | Cesto de Tâmaras | `linen` | `basket` | 38×32 |
| `solacia_sun_brazier` | Braseiro Solar | `bronze` | `brazier` | 42×40 |
| `solacia_bleached_ribs` | Costelas Alvejadas | `bone` | `bones` | 48×26 |
| `solacia_water_urn` | Urna de Água | `terracotta` | `vessel` | 32×40 |

## Blazíria — Vulcânico

**Materiais:** `basalt`, `obsidian`, `blackiron`, `chain`, `slag`, `emberglass`, `ashcloth`.  
**Paleta:** outline `#17191d`, deep `#292c31`, shadow `#414247`, base `#626064`, highlight `#8d8783`, accent `#db5b27`, accent2 `#f2a33a`.

| ID | Prop | Material | Silhueta | Span |
|---|---|---|---|---|
| `blaziria_basalt_spike` | Espigão de Basalto | `basalt` | `spike` | 34×52 |
| `blaziria_lava_vent` | Respiradouro de Lava | `basalt` | `vent` | 46×28 |
| `blaziria_chain_post` | Poste de Corrente | `chain` | `post` | 30×50 |
| `blaziria_obsidian_cluster` | Agulhas de Obsidiana | `obsidian` | `spike` | 42×50 |
| `blaziria_forge_brazier` | Braseiro de Forja | `blackiron` | `brazier` | 42×42 |
| `blaziria_slag_cart` | Carroça de Escória | `blackiron` | `cart` | 54×38 |
| `blaziria_iron_cage` | Gaiola de Ferro | `blackiron` | `cage` | 38×52 |
| `blaziria_magma_urn` | Urna de Magma | `emberglass` | `vessel` | 32×42 |
| `blaziria_rune_pillar` | Pilar Rúnico | `basalt` | `shrine` | 38×54 |
| `blaziria_ash_banner` | Estandarte de Cinzas | `ashcloth` | `banner` | 34×54 |

## Necrovícia — Terras Devastadas

**Materiais:** `deadwood`, `blackstone`, `bone`, `rustediron`, `ashcloth`, `soulglass`.  
**Paleta:** outline `#1b1920`, deep `#332c3a`, shadow `#51445c`, base `#74617b`, highlight `#a08ca6`, accent `#7fa85b`, accent2 `#6fc2b3`.

| ID | Prop | Material | Silhueta | Span |
|---|---|---|---|---|
| `necrovicia_dead_stump` | Toco Morto | `deadwood` | `stump` | 48×40 |
| `necrovicia_grave_marker` | Lápide Negra | `blackstone` | `grave` | 38×48 |
| `necrovicia_bone_pile` | Pilha de Ossos | `bone` | `bones` | 46×28 |
| `necrovicia_soul_lantern` | Lanterna de Almas | `soulglass` | `lamp` | 28×50 |
| `necrovicia_black_obelisk` | Obelisco Negro | `blackstone` | `shrine` | 34×54 |
| `necrovicia_broken_fence` | Cerca Quebrada | `deadwood` | `fence` | 54×34 |
| `necrovicia_skull_totem` | Totem de Crânios | `bone` | `totem` | 38×54 |
| `necrovicia_dead_roots` | Raízes Mortas | `deadwood` | `rootmass` | 52×28 |
| `necrovicia_cursed_urn` | Urna Amaldiçoada | `blackstone` | `vessel` | 32×42 |
| `necrovicia_spectral_brazier` | Braseiro Espectral | `rustediron` | `brazier` | 42×42 |

## Exemplo mínimo de integração futura

```js
const props = CRPG.systems.regionProps;
props.render(ctx, 'atenaria_stone_well', worldX, worldY);

// Galeria sem mapa: apenas demonstra os 10 props de uma região.
props.renderExample(ctx, 'Mornaqua', {x:40, y:72, columns:5, gapX:64, gapY:72});
```

Um mapa futuro pode manter sua própria lista visual (por exemplo, `{id,x,y}`) e chamar `render` depois do terreno/microdecoração e antes de entidades que precisem dominar visualmente. Colisão, interação e persistência devem continuar sendo sistemas separados; **a presença de um prop nesta biblioteca nunca cria gameplay implicitamente**.
