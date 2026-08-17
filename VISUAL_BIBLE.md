# Terrópia — Bíblia Visual

> **REFERÊNCIA VIGENTE — v00069.** Este documento é a única fonte normativa para direção visual. A v00069 mantém o baseline estrutural consolidado na v00064, preserva a revisão de ícones da v00065, o autotiling da v00066, as microdecorações da v00067 e a biblioteca regional da v00068, e evolui construções existentes, storytelling de interiores e sombras de contato. Ele consolida o estado efetivo da **v00063** e substitui, como regra ativa, `VISUAL_DIRECTION_v00057.md`, `VISUAL_DIRECTION_v00059.md`, `VISUAL_DIRECTION_v00060.md`, `VISUAL_DIRECTION_v00061.md`, `VISUAL_DIRECTION_v00062.md`, `VISUAL_DIRECTION_v00063.md` e `ITEM_ICONS_v00058.md`. Esses arquivos permanecem no repositório somente como histórico.

A v00069 é uma evolução estritamente visual dos cenários já existentes. **Não altera matriz lógica dos mapas, IDs de terreno, footprints, entradas, posições, colisões, save schema, quests, economia, stats, hitboxes ou demais comportamentos de gameplay.** Construções e interiores mudam somente no renderer; Sombras 2.0 mudam somente o assentamento visual das silhuetas.

## 1. Princípios que não podem ser quebrados sem uma evolução visual explícita

1. Gameplay usa **pixel art lateral/3/4**.
2. A luz global vem do **canto superior esquerdo**.
3. Sprites e VFX trabalham em pixels lógicos inteiros, sem suavização do canvas.
4. Outlines, sombras e rampas de material devem manter leitura consistente entre mundo, personagens, itens e batalha.
5. Mudança visual não redefine coordenadas, footprint, colisão, interação, stats, quests, drops, economia ou save.
6. A implementação deve continuar leve para Edge e dispositivos móveis; não adicionar loops, filtros caros ou bibliotecas só para validar estilo.

## 2. Resolução, mundo, tile e apresentação

### 2.1 Resolução lógica vigente

- Canvas principal (`#game`): **1280×720 px lógicos**.
- Aspect ratio: **16:9**.
- Tile lógico do mundo: **60×60 px**.
- Grid lógico dos mapas: **32×20 tiles**.
- Mundo lógico resultante: **1920×1200 px**.
- Viewport lógico resultante: **21⅓ tiles de largura × 12 tiles de altura**. É intencional existir uma coluna parcial nas bordas horizontais.

A resolução lógica é a resolução real do canvas. **3840×2160 não é um segundo canvas nem aumenta o custo de rasterização do mundo.** É apenas o alvo máximo de apresentação CSS da v00063.

### 2.2 Escala de apresentação

- Referência desktop/4K: apresentar o canvas de 1280×720 em até **3840×2160**, equivalente a **3×** quando houver espaço.
- Em telas menores, `width:min(3840px,100%)` reduz o elemento responsivamente.
- `height:auto`, `aspect-ratio:16/9` e o limite de altura do viewport preservam o enquadramento.
- `image-rendering: pixelated`/`crisp-edges` deve permanecer ativo.
- Não substituir o canvas lógico por um canvas 4K: isso aumentaria fill-rate e memória sem ganho para a linguagem pixel art, especialmente em mobile/Edge.

## 3. Câmera

A câmera da v00063 é uma câmera em pixels do mundo, não em tiles inteiros.

- Alvo normal: centro do tile do jogador.
- Centralização: `player*TILE + TILE/2 - canvas/2`.
- Clamp horizontal: **0…640 px** (`1920 - 1280`).
- Clamp vertical: **0…480 px** (`1200 - 720`).
- A posição final é arredondada para pixels inteiros antes de desenhar.
- O mundo é renderizado com `ctx.translate(-cameraState.x, -cameraState.y)`.
- Clique e menu de contexto convertem CSS pixels → canvas pixels → world pixels → tile, sempre somando o offset da câmera.
- Cutscenes podem substituir temporariamente alvo/zoom da câmera, mas não alteram coordenadas lógicas, colisões nem persistência.

Não voltar a uma viewport fixa sem câmera e não acoplar a câmera a mudanças de mapa/save.

## 4. Perspectiva lateral/3/4

A direção vigente é **lateral/3/4**. A orientação top-down que existiu historicamente na v48 não é válida.

### Personagens e humanoides

- `down`: frente.
- `up`: costas.
- `left`/`right`: perfil lateral espelhado.
- Cabeça, torso e equipamento devem sugerir uma face frontal/superior curta para volume, sem virar visão aérea.

### Animais e inimigos

- Quadrúpedes e aves priorizam eixo horizontal e leitura de perfil.
- Bosses podem ganhar presença por escala/VFX, não por mudar a perspectiva do mundo.

### Construções, recursos e interiores

- Fachada dominante com telhado/volume em degraus e pequenas faces laterais quando úteis.
- Recursos e estações de trabalho usam volumes blocados compatíveis com a mesma luz e sombra.
- Footprint visual nunca redefine footprint de colisão/interação.

## 5. Escala de personagens

- O renderer humanoide trabalha com uma silhueta-base de aproximadamente **50 px lógicos de altura em escala 1**, com pequenas extensões possíveis por cabelo/equipamento.
- No mundo, jogador e NPCs usam `ACTOR_SCALE = 1.22`, resultando em cerca de **61 px de altura visual** para o corpo-base, coerente com o tile de 60 px.
- A escala pode ultrapassar visualmente uma célula; a hitbox lógica permanece a existente.
- A prévia de criação usa escala maior apenas para apresentação.
- Batalha usa escalas próprias de composição (`~2.0` para jogador e `~1.8–2.05` para inimigos), sem alterar stats ou hitboxes de gameplay.

Regra de continuidade: aumentar/reduzir personagens deve preservar proporção da silhueta inteira; não deformar membros isoladamente para “caber” no tile.

## 6. Itens — grid 48×48

- Fonte lógica vigente dos ícones: **48×48 px** (`ICON_SIZE=48`).
- A construção estrutural usa um vocabulário de 24×24 unidades escalado em 2×, com micro-highlights opcionais no pixel nativo de 48×48; todas as coordenadas permanecem inteiras e `imageSmoothingEnabled=false`.
- A v00065 possui cobertura explícita dos **157 IDs de item atualmente registrados em `ITEM_META`**. Um item atual não pode cair em `fallback`.
- **Emoji não é fallback para nenhum ID atual.** Emoji só pode aparecer quando o ID é desconhecido/futuro e ainda não pertence ao catálogo visual vigente. A ausência acidental de um sprite atual deve falhar em teste em vez de ser mascarada por emoji.
- Cada família precisa ser reconhecida primeiro pela silhueta: ingot trapezoidal para barras, rocha irregular para minério, lâmina+guarda+pomo para espada, ponta+cabo para ferramentas, arco em C com corda, flecha diagonal com penas, vara inclinada com linha/anzol, joia pendente para amuletos etc. Cor não pode ser o único sinal de categoria.
- Gema bruta e gema lapidada têm silhuetas diferentes. Peixes T1–T7 compartilham a família horizontal, mas usam variações de dorsal/cauda/face mais paleta própria para leitura de tier. Cru/cozido deve ser distinguível por material/cor e marcas de cocção.
- Equipamentos de uma mesma categoria preservam a **mesma silhueta externa entre tiers**, conforme a regra histórica. Tier é distinguido por rampas coerentes de ferro → mithril → platina → ouro → rubi → diamante → ônix e por pequenos acentos **internos** que não mudam hitbox nem contorno externo.
- Highlights ficam concentrados no topo/esquerda; sombras e tons profundos ficam em baixo/direita. Ônix deve continuar escuro, mas com highlight suficiente para não desaparecer sobre fundos escuros.
- A mesma biblioteca/tipo é reutilizada em inventário, banco, equipamento, crafting, tooltips, recompensas e mundo. O tamanho **48×48 é o grid-fonte**, não uma obrigação de exibir 48 CSS px em toda UI.
- Drops no mundo usam a mesma biblioteca e podem ser escalados para leitura dentro do tile. O fallback de texto/emoji no mundo é reservado a IDs desconhecidos/futuros.
- A evolução deve continuar baseada em Canvas/retângulos pixelados, sem atlas grande, filtros, blur ou biblioteca externa.

## 7. Terreno e autotiling por vizinhança

- O autotiling vigente usa **8 vizinhos**: N, NE, E, SE, S, SO, O e NO. A máscara é calculada exclusivamente a partir da família visual de cada tile já existente; ela nunca escreve na matriz do mapa.
- Os quatro vizinhos cardinais determinam **bordas**. Dois cardinais adjacentes ausentes formam **canto externo**. Dois cardinais adjacentes presentes com a diagonal correspondente ausente formam **canto interno**.
- O algoritmo é **determinístico**: não usa `Math.random`, timer ou estado persistido. A mesma área, coordenada e matriz lógica produzem sempre a mesma máscara e a mesma transição.
- Limites externos do mapa são tratados como continuidade do próprio piso para não criar costuras artificiais na borda do mundo/câmera.
- Famílias vigentes cobertas: **grama, grama densa, terra, pedra, água, chão de caverna, caminho de caverna e pisos internos**. Entradas/portões/objetos especiais continuam especiais e não são reinterpretados como terreno.
- Água mantém borda clara e sombra inferior/direita; materiais terrestres usam highlight preferencial em N/O e sombra em S/L, coerentes com a luz superior-esquerda.
- Pisos futuros entram pelo mesmo contrato visual usando uma chave `floor-*`; não precisam de nova lógica de máscara. Novos materiais podem fornecer paleta própria sem mudar o algoritmo.
- A camada de autotiling é aplicada **depois da superfície base** e antes de entidades/VFX. Ela não pode mudar `tileAt`, `MAPS`, IDs, `walkable`, colisão, pathfinding, pesca, interação ou save.
- O custo permanece limitado ao desenho dos tiles visíveis no ciclo já existente; o sistema não cria `requestAnimationFrame`, intervalos, timers, atlas grande ou biblioteca externa.

### 7.1 Microdecorações ambientais determinísticas

- A v00067 usa `js/world-decor.js` como planner visual puro. A seed obrigatória é derivada de **área + coordenada X/Y + família visual do piso**; a mesma entrada produz sempre o mesmo resultado e não depende de `Math.random`, tempo, save ou estado de animação.
- O catálogo vigente inclui **flores, tufos de grama, folhas, raízes, rachaduras, pedras, galhos, cogumelos decorativos e irregularidades**. Perfis de área/bioma ponderam esse catálogo: campos favorecem flores/tufos/folhas; Floresta dos Cogumelos favorece cogumelos/raízes; florestas escuras favorecem folhas/raízes/galhos; cavernas e Covil da Aranha favorecem rachaduras/pedras/raízes/cogumelos.
- A seleção considera a família visual existente (`grass`, `dirt`, `stone`, `cave-floor`, `cave-path` e contratos compatíveis). Água, paredes internas e tiles `special-*` não recebem microdecoração terrestre.
- Cada microdetalhe é pixelado, sem blur/gradiente/sombra própria, usa coordenadas inteiras, **span máximo de 16 px lógicos** e alpha reduzido (`0.78`). Highlights permanecem no topo/esquerda e sombras/tons profundos no baixo/direita.
- O planner é calculado uma vez por área e mantido em cache visual durante a sessão. Redraws reutilizam o plano; não há hashing aleatório repetido por frame, timer próprio ou novo loop de animação.
- **Recursos interativos têm prioridade visual absoluta:** footprints de árvores, minérios, arbustos/coletas, baús, fogueiras, ovelhas e plantação suprimem microdecoração. A camada ambiental é desenhada antes desses recursos, que continuam maiores, opacos e com sombras/contraste próprios.
- Esta camada é exclusivamente decorativa: não escreve em `MAPS`, não altera `tileAt`, `walkable`, pathfinding, colisão, interação, spawns, drops ou save.

### 7.2 Biblioteca de props regionais reutilizáveis

- A v00068 introduz `js/region-props.js` como **biblioteca visual-only**, cobrindo exclusivamente as sete regiões já registradas em `data/world.js`: Atenaria, Altaria, Mornaqua, Calindra, Solácia, Blazíria e Necrovícia.
- Cada região possui **10 props característicos** (70 no total), namespace próprio de ID, paleta regional, materiais permitidos e família de silhueta declarada. O catálogo detalhado está em `REGION_PROPS_v00068.md`.
- Atenaria privilegia madeira, palha, pedra de campo, ferro, linho e terracota; Altaria usa granito, ardósia, ferro, corda, pinho e cristal; Mornaqua usa madeira à deriva, conchas, coral, corda, latão e lona; Calindra usa madeira de selva, cipós, pedra com musgo, osso, resina e folhas largas; Solácia usa arenito, terracota, linho, bronze, cactos e osso; Blazíria usa basalto, obsidiana, ferro negro, correntes, escória, vidro de brasa e tecido de cinzas; Necrovícia usa madeira morta, pedra negra, osso, ferro oxidado, tecido de cinzas e vidro de almas.
- Rampas seguem a regra global `outline → deep → shadow → base → highlight`, com dois acentos regionais. Highlights permanecem topo/esquerda e sombras/base de contato ficam baixo/direita.
- Props têm span visual máximo de referência de **54 px lógicos**, grid inteiro, `imageSmoothingEnabled=false` e nenhum blur/gradiente/filtro. A silhueta precisa funcionar antes da cor; o renderer usa famílias reutilizáveis como `sign`, `fence`, `cart`, `shrine`, `lamp`, `spike`, `hanger`, `brazier`, `vessel`, `totem` e outras.
- Todos os registros começam com `visualOnly:true`, `interactive:false` e `collision:false`. **A biblioteca não cria gameplay implicitamente**: se um mapa futuro quiser colisão/interação, deve declarar isso no sistema de mapa/objeto apropriado sem alterar o renderer do prop.
- A API reutilizável expõe `list`, `get`, `style`, `render`, `exampleLayout` e `renderExample`. `examples/region-props-preview.html` demonstra os 70 props sem registrar mapas, IDs de terreno ou objetos persistidos.
- A v00068 **não chama a biblioteca no `draw()` atual**; portanto não adiciona draw calls aos mapas existentes. O custo de runtime atual é somente o parse/carregamento do pequeno catálogo, sem timer, `Math.random`, loop de animação ou biblioteca externa.
- Quando mapas regionais forem criados, props puramente decorativos devem ser desenhados depois do terreno/microdecorações e antes de recursos/personagens que precisem dominar visualmente; recursos interativos mantêm prioridade de contraste e leitura.

### 7.3 Construções com identidade funcional — v00069

- A função precisa ser reconhecível **sem placa, texto ou ícone externo**. `js/building-visuals.js` é o vocabulário reutilizável vigente para fachadas.
- **Casa do jogador:** telha pintada, traves domésticas, janelas quentes e floreira; deve parecer habitada antes mesmo de entrar.
- **Ferraria:** cobertura metálica escura, base de pedra/tijolo, ventilação/chaminé dominante, janelas estreitas aquecidas e ferramental junto à fachada.
- **Banco:** cobertura de ardósia, alvenaria cortada, cornija pesada, pilastras, janelas gradeadas e ferragens de latão; leitura estável, segura e organizada.
- **Loja:** madeira quente, toldo listrado, vitrines maiores, caixas/sacos e volumes de mercadoria; leitura de abertura comercial e estoque visível.
- **Cabana da Bruxa:** telhado assimétrico, madeira escura, vãos irregulares e ervas/recipientes pendurados; continua lateral/3/4.
- Entrada da caverna e futuras construções podem usar o mesmo catálogo de perfil, sempre preservando a geometria lógica existente.
- **Footprint, `doorX/doorY`, entrada clicável, posição e colisão nunca são derivados do desenho.** O renderer recebe essas medidas da lógica já existente e não pode escrevê-las.
- Perfis arquitetônicos usam pixels inteiros, `imageSmoothingEnabled=false`, sem blur/filtro e sem biblioteca externa.

### 7.4 Interiores com storytelling ambiental — v00069

- `home`, `smithy`, `bank` e `shopInterior` recebem uma camada de storytelling visual-only. Ela não registra objetos no mapa, não altera `walkable`, não cria hitbox, interação, item ou save.
- **Banco:** ledgers/pastas, caixas de segurança, divisores de latão e organização repetida; superfícies limpas e alinhadas reforçam segurança/ordem.
- **Ferraria:** ferramentas em rack, carvão, lingotes, balde de têmpera e pequenos pixels de calor/faísca próximos da forja. Forja e bigorna continuam maiores e visualmente dominantes.
- **Loja:** frascos, sacos, caixas de produto, tecidos e bundles sobre/ao redor das prateleiras; o lojista continua sendo o foco interativo.
- **Casa:** livros, caneca/utensílios, tecido/tapete e pequenos recipientes/cozinha; o cenário deve parecer usado, não showroom.
- Decoração sobre rota é deliberadamente **sem colisão** e é desenhada antes de jogador/NPCs. Estações interativas e recursos continuam com outline/contraste/sombra superiores.
- Storytelling é estático/determinístico; não usar `Math.random`, timers ou partículas persistentes só para preencher o interior.

## 8. Iluminação e rampas

Fonte global: **superior-esquerda**.

Para cada material, usar uma rampa controlada:

1. `deep` — cavidades, bordas internas profundas;
2. `shadow` — faces inferiores/direitas;
3. `base` — cor dominante;
4. `highlight` — topo/esquerda;
5. outline — adicional, neutro profundo ou `deep` do material.

- Highlights ficam no topo e/ou lado esquerdo.
- Sombras locais ficam na base e/ou lado direito.
- Não inverter a luz para resolver um sprite isolado.
- Famílias de material existentes (ferro, mithril, platina, ouro, rubi, diamante, ônix) devem ser reutilizadas antes de criar nova paleta.
- Equipamentos do mesmo tipo preservam a silhueta entre tiers; material/tier muda principalmente a paleta.

## 9. Outlines

- Referência de sprite pequeno: **1 px lógico**.
- Silhueta externa recebe o outline mais profundo; bordas internas preferem `deep`/`shadow` do material.
- Em escalas fracionárias do renderer, arredondar coordenadas/espessuras para evitar antialiasing perceptível.
- Contorno funcional de inimigos (laranja/vermelho) é uma exceção de estado e pode ficar fora da paleta local.
- Não usar blur ou cadeia de `drop-shadow` para fabricar outline de gameplay.

## 10. Sombras — sistema 2.0 (v00069)

- `js/shadow-system.js` é o renderer vigente de sombra de contato. A sombra continua em **dois níveis pixelados**, sem suavização, e nunca participa de colisão/hitbox.
- Direção projetada: **baixo/direita**, coerente com a luz superior-esquerda. Todos os perfis têm deslocamento positivo em X; nenhum objeto pode inverter a direção para “encaixar” melhor.
- A área de sombra é proporcional à silhueta e usa hierarquia explícita: `small < actor/NPC < enemy/resource < tree < building`; inimigos voadores usam sombra menor/mais distante para sugerir separação do chão.
- Jogador e NPCs compartilham o assentamento humanoide; inimigos usam largura maior quando a massa visual aumenta; árvores/construções recebem caixas de contato mais largas, mas continuam curtas verticalmente.
- Recursos, baús, drops, fogueira, minérios e demais objetos usam perfis próprios por classe em vez de uma única sombra genérica.
- **Proibido em sombras de gameplay:** `blur`, `filter`, `shadowBlur`, radial gradient, `ellipse`, arco suavizado ou sprite raster de sombra. Usar `fillRect`/degraus em coordenadas inteiras.
- A sombra serve para assentamento e hierarquia, não para ambient occlusion realista; deve permanecer barata para Edge/mobile.

## 11. Animações e VFX

### Mundo

- Movimento visual interpola entre tiles sem alterar a posição lógica; duração de referência atual: **140 ms**.
- Partículas do mundo: máximo **72** simultâneas.
- Anéis/impactos do mundo: máximo **8** simultâneos.
- Redraw ambiental normal: cerca de **100 ms** entre quadros (~10 FPS) quando não há feedback mais urgente.
- Com `prefers-reduced-motion`, reduzir quantidade de partículas e cadência de animação; o estado de gameplay não muda.
- Água, partículas e anéis são desenhados com blocos/pixels, sem filtros pesados.
- XP fora de batalha usa floater curto; XP de batalha continua excluída desse feedback de mundo.

### Batalha

- `js/battle-v47.js`, carregado depois de `js/battle-visuals.js`, é a implementação visual efetiva vigente.
- Batalha permanece lateral/3/4, com arena simples, sem falsa profundidade pesada.
- Partículas: máximo **96** simultâneas.
- Floaters: máximo **6**.
- Impactos usam anéis pixelados; projéteis e golpes usam formas simples e curtas.
- `requestAnimationFrame` é usado somente enquanto o renderer de batalha está ativo.
- `prefers-reduced-motion` encurta/reduz animações sem alterar dano, turnos ou resultados.

### Regra geral

VFX é **aditivo e descartável**: nunca deve ser a fonte de verdade para dano, HP, deslocamento lógico, coleta, tempo de respawn, quest ou save.

## 12. Pixel integrity e performance

- `ctx.imageSmoothingEnabled=false` nos renderers de sprites/batalha onde aplicável.
- Preferir `fillRect`, linhas com caps/join duros e coordenadas arredondadas.
- Evitar blur, sombras grandes, filtros CSS/canvas e gradientes animados em gameplay.
- Respeitar os caps de partículas já existentes.
- Não criar um canvas principal 3840×2160 para “melhorar” nitidez.
- Não introduzir biblioteca externa para desenho, scaling ou validação que possa ser feita com HTML/CSS/JS nativos.
- Em mobile, priorizar custo de fill-rate, memória, input e legibilidade antes de aumentar densidade de detalhe.

## 13. Save e separação de gameplay

A consolidação visual da v00064 **não exige migração**. `SAVE_VERSION` permanece **43** e o prefixo atual permanece `common_rpg_save_v27_` para continuar carregando os mesmos slots existentes.

Uma mudança futura de arte, resolução de apresentação, paleta, animação ou VFX **não justifica por si só** incrementar o schema de save. Só migrar quando houver dado persistido novo/incompatível.

Ao fazer trabalho visual, é proibido alterar para “acomodar a arte”:

- mapas e códigos de mapa;
- `x/y`, footprints e colisões;
- quests, flags narrativas e requisitos;
- economia, loot, recipes e valores;
- HP, dano, skills, XP e demais stats;
- IA, pathfinding, movimento lógico e gatilhos;
- chaves/prefixos de save.

## 14. Resolução das contradições históricas

| Documento | Estado histórico | Regra vigente |
|---|---|---|
| v00057 | definiu lateral/3/4, luz superior-esquerda, outlines, sombras e rampas | **mantido** |
| v00059 | 960×600, tile 40, câmera, itens 32×32 | resolução/tile/grid de item **substituídos**; câmera e linguagem artística mantidas |
| v00060 | 1920×1080, tile 60, itens 48×48, `ACTOR_SCALE=1.22` | tile, itens e escala de atores **mantidos**; resolução substituída |
| v00061 | 960×600 lógico com apresentação ampliada | **substituído** pela sequência v62→v63 |
| v00062 | 1920×1080 lógico apresentado a 3840×2160 (2×) | **substituído** pela v00063 |
| v00063 | 1280×720 lógico apresentado até 3840×2160 (3×) | **baseline estrutural vigente** |
| v00064 | consolidou a Bíblia e guardas estruturais, sem mudar runtime visual | **mantido** |
| v00065 | revisou os 157 ícones atuais em 48×48 e restringiu emoji a IDs desconhecidos/futuros | **mantido** |
| v00066 | adicionou autotiling visual determinístico de 8 vizinhos, bordas e cantos | **mantido** |
| v00067 | expandiu microdecorações determinísticas por área/coordenada e protegeu dominância de recursos | **mantido** |
| v00068 | adicionou biblioteca visual-only de 70 props para as sete regiões, sem mapas novos | **mantido** |
| v00069 | diferenciou construções/interiores e consolidou Sombras 2.0 sem alterar geometria lógica | **estado visual vigente** |

Quando um documento histórico divergir desta Bíblia, **esta Bíblia vence**.

## 15. Validações automáticas

`tests/visual-structure-check.js` protege os invariantes globais sem executar trabalho visual extra no jogo:

- canvas lógico 1280×720 e 16:9;
- tile 60 e mundo 32×20;
- câmera centralizada/clampada e conversão de clique com offset;
- `ACTOR_SCALE=1.22`;
- grid de ícones 48×48;
- lateral/3/4, luz superior-esquerda, outline 1 px e Sombras 2.0 em dois níveis proporcionais;
- pixel rendering sem smoothing;
- caps de VFX de mundo/batalha;
- save schema/prefixo preservados;
- esta Bíblia marcada como referência vigente e documentos anteriores marcados como históricos.

`tests/item-icons-structure-check.js` protege o subsistema 48×48 da v00065:

- catálogo visual exatamente sincronizado com todos os IDs atuais de `ITEM_META`;
- nenhum ID atual classificado como `fallback` ou contendo fallback emoji no HTML;
- IDs desconhecidos/futuros continuam recebendo fallback técnico;
- desenhos permanecem dentro do grid 48×48, com pixels inteiros e smoothing desativado;
- silhuetas externas dos equipamentos permanecem iguais entre tiers, enquanto as assinaturas de cor por material continuam distintas;
- gemas brutas/lapidadas e peixes T1–T7 mantêm distinções estruturais esperadas.

`tests/terrain-autotile-check.js` protege a máscara de 8 vizinhos, bordas, cantos internos/externos, determinismo, suporte a `floor-*` e ausência de dependência de mapa lógico/colisão/save.

`tests/world-decor-check.js` protege a v00067: seed por área + coordenada, catálogo dos nove tipos, perfis por superfície/bioma, ausência de aleatoriedade/timers, cache visual, limite de 16 px e ordem de renderização que mantém recursos interativos dominantes.

`tests/region-props-check.js` protege a v00068: correspondência exata com as sete regiões registradas, 10+ props por região, IDs exclusivos, materiais válidos, paletas completas, variedade de silhuetas, span máximo de 54 px, pixel grid, renderer reutilizável, preview sem mapas e ausência de integração acidental no render loop atual.

`tests/shadow-system-check.js` protege a v00069: perfis proporcionais por classe, projeção coerente com luz superior-esquerda, pixels inteiros, determinismo e ausência de blur/filter/elipse/arco suavizado.

`tests/building-visuals-check.js` protege a v00069: perfis distintos para casa/ferraria/banco/loja/cabana, identidade sem texto/placa, materiais/cues mínimos, storytelling dos quatro interiores, pixels inteiros e ausência de dependência de mapa/colisão.

`tests/v00069-check.js` congela a matriz lógica efetiva, `data/`, footprints, entradas e funções de colisão/entrada da v00068, além de garantir a integração dos novos módulos somente no renderer.

O `tests/static-check.py` executa todas as validações estruturais vigentes (Bíblia, ícones, autotiling, microdecoração, props regionais, construções e sombras), para que regressões sejam detectadas junto do check estático normal.

## 16. Checklist para futuras mudanças visuais

Antes de entregar uma versão visual:

- confirmar se a alteração realmente exige mudança de save; por padrão, não;
- comparar mapas/dados/lógica protegida quando o pedido for somente visual;
- atualizar esta Bíblia somente se a regra vigente mudar de fato;
- manter os documentos versionados antigos como histórico, sem promovê-los novamente a fonte vigente;
- atualizar `CHANGELOG.md` e documentação relevante;
- criar teste específico da versão;
- rodar static check, functional check, adjustments check, teste da nova versão e smoke runtime.
