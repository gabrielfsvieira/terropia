# Direção visual — v00125

## Identidade visual das regiões

A identidade regional passa a ser declarativa em `js/region-identity.js` e complementa, sem substituir, a biblioteca `region-props.js`.

| Região | Composição dominante | Materiais / formas |
|---|---|---|
| Atenaria | campos abertos e linhas rurais horizontais | carvalho, palha, pedra de campo, cercas e poços |
| Altaria | acentos verticais, pedra e vegetação esparsa | granito, ardósia, pinho, cairns e cristais |
| Mornaqua | formas baixas e horizontais junto à costa | madeira à deriva, corda, conchas, coral e redes |
| Calindra | massa vegetal densa e arcos orgânicos | cipós, folhas largas, madeira de selva e pedra com musgo |
| Solácia | espaço negativo amplo e marcos verticais isolados | arenito, terracota, bronze, cactos e banners |
| Blazíria | diagonais quebradas e massas escuras | basalto, obsidiana, ferro negro, cinza e fissuras |
| Necrovícia | assimetria quebrada, vazios e verticais mortos | madeira morta, pedra negra, ossos e soulglass |

Cada perfil declara materiais, vegetação, terreno, arquitetura, props, iluminação conceitual, composição, tint de terreno e densidade de decoração.

O renderer usa os perfis para:
- variar paletas de terreno entre regiões sem alterar IDs lógicos;
- inserir poucos props regionais determinísticos da biblioteca v00068 na camada estática;
- variar densidade/composição sem espalhar ruído uniforme;
- preservar zonas de respiro de NPCs, inimigos, recursos e entradas.

Os props continuam `visualOnly`, sem colisão/interação e entram no cache estático de cenário. A diferenciação depende de forma/composição e materiais, não de simples recoloração.
