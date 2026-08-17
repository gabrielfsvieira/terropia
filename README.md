
## v00109 — conteúdo e validação
A v00109 continua a extração de conteúdo para `data/content.js` e adiciona validação cruzada de mapas/dados. Execute `node tests/content-validator.js`, `python tests/mobile-layout-check.py` e `node tests/mobile-smoke-check.js` para as novas regressões de conteúdo e layout.
### v00106 — InputManager, UIStateManager e Event Bus
A v00106 centraliza entradas em ações abstratas, overlays em uma máquina de estado com reset determinístico e eventos de domínio em um Event Bus interno. Teclado, D-pad, joystick, ponteiro e gamepad passam pelo `InputManager`; overlays principais são registrados no `UIStateManager`; e progressão/Diário podem reagir a `skillLevelUp`, `itemObtained`, `questAccepted`, `questCompleted`, `enemyDefeated`, `areaEntered`, `resourceGathered` e `rareDrop`.

### v00103 — arquitetura modular incremental
A v00103 inicia a retirada progressiva de responsabilidades de `js/main.js` sem reescrever o jogo de uma vez. Os módulos em `js/state-save.js`, `world.js`, `entities.js`, `renderer-layers.js`, `input.js`, `inventory.js`, `quest.js`, `gathering.js`, `crafting.js`, `battle.js` e `ui.js` definem as fronteiras de domínio. Persistência, inventário, pipeline de render e registro de entidades já possuem implementação própria; os demais domínios usam contratos registrados pelo runtime legado para permitir migração em etapas pequenas.

O renderer executa a ordem `terrain → scenery → resources → entities → effects → ingameText → ui`. Terreno e cenário são pré-renderizados em caches separados, enquanto camadas mutáveis continuam dinâmicas. `CRPG_RENDER_LAYERS()` permite inspecionar dirty flags e registro das camadas no console. `CRPG_ENTITY_SNAPSHOT()` expõe um snapshot somente para diagnóstico do registro central de entidades.

# Terrópia v00073

RPG web estático em HTML, CSS e JavaScript.

## Editor de Mundo

A partir da v00176, o ZIP inclui **`world-editor.html`**. Abra esse arquivo no navegador (ou use o botão **🗺️ Editor de Mundo** no menu inicial) para editar a intenção de conteúdo do overworld por tela. O Editor permite reposicionar telas por drag-and-drop, recalcula adjacências N/L/S/O, oferece biblioteca lateral de NPCs/recursos/inimigos/construções/mecânicas e exporta `world-editor-project.json` / `WORLD_EDITOR_PROMPT.md` para orientar edições futuras.

A regra persistente para futuras entregas está em **`WORLD_EDITOR_CHATGPT_INSTRUCTIONS.md`**. Antes de reenviar um ZIP com mudanças feitas no Editor, inclua o JSON/prompt exportado dentro do ZIP; detalhes em `world-editor/README.md`.


## Referência visual vigente

A v00073 adiciona acessibilidade visual configurável, sinergia explícita entre as dez Skills, progressão funcional de ferramentas e rendimento duplo em coleta. A v00072 acrescentou retratos pixel-art maiores para NPCs-chave, marcadores de missão acessíveis por símbolo + cor e Ambientação Animada 2.0 com culling e orçamento global.

A direção visual oficial está em **`VISUAL_BIBLE.md`**. A v00070 preserva o baseline estrutural v00063/v00064, os ícones v00065, o autotiling v00066, as microdecorações v00067 e a biblioteca regional v00068, preservando essas camadas e acrescentando **linguagem visual de raridade e cenários de batalha específicos por tela**.

Estado visual vigente:

- canvas lógico atual **1440×720**, mundo renderizado em **24×12 tiles** de **60 px**, com tela fixa sem câmera de follow;
- itens em grid-fonte **48×48**, com cobertura dos **157 IDs atuais**;
- autotiling determinístico de 8 vizinhos e microdecoração seedada por área/coordenada preservados;
- biblioteca regional v00068 com 70 props visual-only preservada;
- fachadas v00069 distinguem **casa do jogador, ferraria, banco, loja e Cabana da Bruxa pela própria arquitetura**, sem depender de placa/ícone;
- `js/building-visuals.js` concentra perfis de telhado, fachada, janela, materiais e props funcionais, além de storytelling visual para `home`, `smithy`, `bank` e `shopInterior`;
- interiores ganham apenas decoração de renderização: livros/utensílios na casa, carvão/ferramentas/metal/calor na ferraria, ledgers/cofres/organização no banco e mercadorias/prateleiras na loja;
- `js/shadow-system.js` implementa Sombras 2.0 com perfis proporcionais para atores, inimigos, voadores, recursos, árvores, objetos e construções, usando somente retângulos pixelados e deslocamento baixo/direita;
- raridade v00070 combina borda, glifo e microtextura em inventário, banco, tooltip, loot, chão, Diário e mensagens especiais;
- batalhas de AT-005/006/007, galerias AT-008/009/010, Floresta Obscura, Floresta dos Cogumelos e Covil da Aranha recebem composição própria/determinística;
- não há blur, filtros Canvas, elipses de sombra, bibliotecas externas ou aleatoriedade por frame nos novos cenários.

**Geometria congelada:** footprints, entradas, colisões, posições, matriz lógica dos mapas e IDs de terreno permanecem iguais à v00068. As decorações interiores não registram colisão/interação e são desenhadas antes das entidades; estações/recursos interativos continuam visualmente dominantes.

A v00070 não altera quests, economia, stats, itens ou schema de save. `SAVE_VERSION` permanece **43** e o prefixo `common_rpg_save_v27_` é preservado; portanto, **não há migração de save nesta versão**.

## Validação

Comandos de entrega da v00071:

```bash
python3 tests/static-check.py
node tests/functional-check.js
node tests/adjustments-check.js
node tests/visual-structure-check.js
node tests/item-icons-structure-check.js
node tests/terrain-autotile-check.js
node tests/world-decor-check.js
node tests/region-props-check.js
node tests/shadow-system-check.js
node tests/building-visuals-check.js
node tests/v00070-check.js
node tests/smoke-runtime.js
```

`tests/building-visuals-check.js` exige perfis arquitetônicos distintos e storytelling visual-only; `tests/shadow-system-check.js` impede blur/filtros/elipses e valida a hierarquia proporcional. `tests/v00070-check.js` valida raridade, cenários específicos, determinismo e preservação byte a byte de `data/`.

## Histórico

As seções abaixo registram alterações de versões anteriores e não substituem `VISUAL_BIBLE.md` como direção visual atual.

## Ajustes v56

- Aviário: bico em perfil agora se projeta claramente para fora do rosto.
- O menu de item sempre restaura “Dropar Item” após fechar o banco, evitando o rótulo residual “Guardar todos”.
- Durante mineração e corte de árvores, espadas equipadas deixam de ser desenhadas enquanto picareta/machado estiverem em uso.
- Missão do Geraldo passa a pedir 1 Safira. Safiras são encontradas exclusivamente ao minerar Ferro com Mineração Nv. 5+, com 1% de chance por minério.
- Ao alcançar Mineração Nv. 5, o popup informa que Safiras agora podem ser encontradas em Ferro.
- Saves anteriores com a missão do Geraldo ainda em andamento têm apenas o progresso de entrega dessa missão reiniciado para a nova Safira; missões já concluídas permanecem concluídas.


## Ajustes v55

- Tons de pele e sombreamento agora preservam o matiz racial escolhido; não há fallback bege/marrom para raças não humanas.
- Reptiliano usa duas narinas pretas; Orc mantém olhos vermelhos de alto contraste e todas as raças combinam íris clara/colorida com contorno escuro para leitura em todos os tons de pele.
- Nome do personagem limitado a 12 caracteres e exibido abaixo do jogador no mapa.
- Jogador e NPCs foram ampliados visualmente, sem alterar colisão; morcegos e lobos receberam sprites redesenhados e mais detalhados.
- Textos do mapa ficaram maiores e usam contorno preto com junções arredondadas.
- Anciã Mira foi movida 3 tiles à esquerda e recebeu uma cutscene persistente de primeira entrada na AT-006, com zoom, corrida desesperada e chamada para a quest dos slimes.



## Criação de personagem — ajustes v53

- Nome + pronome (Ele/Dele ou Ela/Dela), sem seleção de gênero.
- 7 raças, 4 estilos de cabelo, camiseta/calça em tons pastéis e 4 opções de luvas.
- Aparência e pronome persistem no save e na batalha.
- Contorno de inimigos otimizado por composição/cache de silhueta, sem cadeia de `drop-shadow`.



## Marcadores de missão — v52

- O símbolo dos marcadores de quest acima dos NPCs mudou de `?` para **`!`** branco.
- **Verde** = a missão está disponível e os requisitos foram atendidos.
- **Amarelo** = a missão já está em progresso.
- **Vermelho** = o NPC possui uma missão, mas o jogador ainda não atende aos requisitos para iniciá-la.
- Ao concluir a missão, o marcador continua desaparecendo.
- A animação leve de flutuação e o Registro de Missões da v51 foram preservados.
- O schema de save permanece na versão 40.
- `tests/v52-check.js` valida os três estados visuais, conclusão e preservação do save.


## Missões e sinalização — v51

- Histórico da v51: NPCs com missão pronta para ser iniciada exibiam um círculo **verde** com `?` branco acima da cabeça; na v52, o símbolo vigente é `!`.
- Após aceitar a missão, o mesmo marcador fica **amarelo** enquanto a missão estiver em progresso ou aguardando retorno/recompensa. Ao concluir a missão, ele desaparece.
- Histórico da v51: NPCs cujo requisito ainda não estava atendido não exibiam marcador; na v52, passam a exibir um círculo vermelho com `!`.
- O Registro de Missões agora mostra as missões da região atual por padrão e possui o botão **“Ver todas as missões.”** para remover o filtro regional.
- Estados no registro: **verde** = disponível, **amarelo** = em progresso, **cinza claro** = concluída e **vermelho** = requisito pendente.
- O filtro usa a região cadastrada no próprio mapa/NPC, ficando preparado para regiões futuras sem alterar o schema de save.
- Desafios de combate foram preservados em uma seção neutra separada.
- `tests/v51-check.js` valida marcadores, estados, filtro regional e preservação do save.


## Gameplay e feedback — v50

- Removido o sistema de **Sangramento** das batalhas: inimigos não aplicam nem recebem esse status.
- Caminhar pelo mapa não dispara mais eventos/encontros aleatórios. A missão do Dragão Ancestral continua concluível: após aceitar a missão, fale novamente com a Bruxa Selene para iniciar a batalha. O encontro do bode ao coletar lã foi mantido, pois não é acionado por caminhada.
- Inimigos no mapa recebem contorno de leitura: **laranja** para inimigos comuns e **vermelho** para bosses. Esse contorno existe apenas no canvas do mapa; os sprites de batalha não foram alterados por essa regra.
- Toda XP recebida fora de batalha agora mostra um texto amarelo `N XP` acima do personagem com animação rápida de fade in, subida e fade out. XP de batalha é explicitamente excluída desse feedback.
- Nova ação **Defender** na batalha: consome o turno e reduz o próximo dano em 50%. Com um escudo equipado, há 25% de chance de bloquear totalmente o dano. A ação entra em cooldown por 2 turnos do jogador.
- Adicionado **Dano Crítico** aos ataques do jogador. Chance e bônus de dano crescem com o nível de Combate e com o Tier da arma equipada; ataques corpo a corpo, à distância e mágicos usam o mesmo sistema de progressão, considerando o Tier da arma correspondente.
- O schema de save permanece o mesmo, pois os novos estados de defesa/cooldown são temporários da batalha.
- `tests/v50-check.js` cobre os novos comportamentos e a preservação da perspectiva lateral/3/4 da v49.

## Correção de perspectiva — v49

- A solicitação de manter absolutamente todos os elementos em visão superior foi retirada. A direção visual válida volta a ser a da v46: **lateral/3/4**.
- Jogador e NPCs preservam quatro direções: baixo = frente, cima = costas, esquerda/direita = perfil lateral espelhado.
- Inimigos/animais, árvores, coqueiro, arbustos, cogumelos, baús, milho, tomate, casas, loja, Cabana da Bruxa, fogueira e composição de batalha voltaram à leitura lateral/3/4.
- O polimento de animação/performance da v47/v48 foi mantido; gameplay, mapas, colisões, IA, stats, quests, drops e schema de save não foram alterados.
- `tests/v49-check.js` valida a restauração lateral e a preservação dos limites de VFX.

> A orientação top-down descrita na seção histórica da v48 está **supersedida pela v49** e não deve ser usada como requisito atual.

## Polimento visual final — v48 (histórico; perspectiva supersedida pela v49)

- Etapa 7 concluída como revisão de consistência, sem alterar gameplay, mapas, hitboxes, IA, stats, dano, HP, velocidade, loot, inventário, quests, códigos de tela ou save schema.
- Histórico da v48: nesta etapa houve uma orientação de visão superior que substituiu temporariamente a direção lateral/3/4 da v46. **Essa orientação foi retirada e supersedida pela v49.**
- Iluminação padronizada no canto superior esquerdo, com sombras menores e mais uniformes, contraste controlado e melhor separação do terreno.
- Paletas, outlines e microdetalhes foram revisados para priorizar leitura rápida de personagens, inimigos, recursos e objetos interativos; equipamentos mantêm exatamente o mesmo desenho entre tiers, mudando somente a paleta.
- Variações determinísticas existentes são reaproveitadas para reduzir repetição de vegetação e cenário sem adicionar novos assets raster.
- As animações/efeitos da v47 foram suavizados: menos deslocamento, partículas menores, impactos mais curtos e arena de combate plana/top-down, sem céu, horizonte, filtros pesados ou falsa profundidade.
- Performance para navegador foi apertada: efeitos do mundo limitados a 72 partículas, batalha a 96, redraw ambiental em ~10 FPS e suporte a `prefers-reduced-motion`.
- Criado `css/v48.css` para o acabamento final e `tests/v48-check.js` para validar top-down, consistência, limites de VFX e preservação dos arquivos de gameplay/dados.


## Animações e efeitos visuais — v47

- Etapa 6 visual adicionada sem alterar gameplay, mapas, hitboxes, IA, stats, dano, HP, velocidade, loot, inventário, quests ou save schema.
- Caminhada do jogador recebeu interpolação visual curta e bob de 1 px; mineração e corte usam os mesmos tempos/regras, agora com oscilação visual da ferramenta.
- Água ganhou ondas animadas em overlay; árvores balançam discretamente; fogueira ganhou chama/fumaça curta; itens no chão flutuam e brilham levemente; minérios raros pulsam apenas nos micro-highlights.
- Mineração, corte, coleta, lã, colheita, pesca, uso de comida/poção e abertura de baús emitem partículas leves e ondas de impacto reutilizáveis no Canvas.
- Árvores reagem ao golpe e, ao serem esgotadas, usam queda visual curta antes do toco; baús possuem transição de abertura.
- Combate usa a nova camada `js/battle-v47.js`: flashes, rastros, impacto, partículas, números flutuantes de dano/cura, ondas curtas e derrota visual, mantendo `js/battle-visuals.js` intacto como baseline.
- O encontro do Dragão mantém confirmação por `OK` e agora mostra exatamente `⚠️ Um Dragão te ataca!`, com tremor discreto no alerta antes da batalha.
- Como este projeto é HTML/Canvas (não Godot), foi usado um sistema leve de partículas Canvas com limites rígidos, em vez de GPUParticles do Godot.
- Loop ambiental limitado a aproximadamente 12 FPS e pools de partículas pequenos para priorizar navegador.
- Novo teste `tests/v47-check.js` valida o escopo visual e preservação dos arquivos de gameplay/dados.



## Direção visual lateral / 3/4 — v46

- Sprites que ainda tinham leitura de cima foram redesenhados para perfil lateral ou 3/4 lateral, sem alterar terreno, mapas, hitboxes, IA, stats, combate, quests, drops, interface ou sistemas.
- Jogador e NPCs mantêm as quatro direções existentes: baixo = frente, cima = costas, esquerda/direita = perfil lateral espelhado.
- Lobo, Rato, Capivara, Bode, Galinha, Morcego, Slime, Aranha e Dragão Ancestral usam silhuetas laterais; o Dragão agora mostra corpo, cabeça, asa, pernas e cauda em perfil.
- Árvores, Coqueiro, arbustos, Cogumelos, baús, milho, tomate, casas, loja, Cabana da Bruxa e fogueira foram convertidos para leitura lateral/3/4.
- Equipamentos continuam com a mesma geometria entre tiers; apenas a paleta muda, agora encaixada também no perfil lateral.
- Novo teste `tests/v46-check.js` valida o escopo exclusivamente visual da versão.

## NPCs e inimigos — v45

- NPCs receberam identidade visual individual sem alterar dados, posição, interação ou diálogo: Anciã Mira usa xale/bengala; Joaquim e Alfredo usam chapéu de palha; Lojista usa avental; Heitor tem proporção infantil; Clarisse usa cabelo/faixas próprias; Jordan tem aparência grisalha de minerador; Geraldo e Selene possuem silhuetas mágicas distintas; banqueiros compartilham uniforme com acentos individuais; Gnomo Júlio possui escala e gorro próprios.
- A biblioteca racial dos NPCs preserva as cores definidas em v40 e possui detalhes leves para Aviários, Goblins, Gnomos, Reptilianos, Orcs e Elfos, pronta para NPCs futuros sem criar assets pesados.
- Inimigos passaram a possuir renderers dedicados por espécie: Slime, Morcego, Lobo, Aranha, Rato, Dragão, Galinha, Capivara e Bode.
- Animais terrestres foram reorganizados para leitura diretamente de cima, evitando aparência lateral; aranhas usam oito pernas radiais e morcegos asas abertas em pixel art.
- Variantes existentes de aranha e alguns inimigos especiais usam pequenos marcadores internos, mantendo a espécie reconhecível sem criar sprites estruturalmente incompatíveis.
- O Dragão Ancestral ganhou a maior presença visual da biblioteca, com asas simétricas, crista, chifres e cauda top-down, aproveitando o footprint/boss scale que já existia.
- Sombras seguem a iluminação superior-esquerda e `imageSmoothingEnabled=false` continua preservando pixel-perfect.
- Nenhum HP, dano, velocidade, IA, spawn, evento, combate, mapa, tile, equipamento, objeto, interface ou sistema foi alterado.
- Não foram adicionadas imagens, modelos 3D ou animações novas; a etapa permanece baseada em desenho leve por pixels no Canvas.


## Personagem e equipamentos — v44

- O jogador recebeu renderer exclusivo em pixel art top-down, preservando NPCs e inimigos da v43.
- As quatro direções existentes (cima, baixo, esquerda e direita) têm leitura visual própria sem alterar movimentação ou animações.
- Silhueta, contornos e iluminação superior-esquerda foram refinados mantendo a mesma escala/hitbox visual.
- Armadura, elmo, luvas, botas, espada, escudo e amuleto usam uma única geometria-base por categoria.
- Ferro, Mithril, Platina, Ouro, Rubi, Diamante e Onyx diferem somente pela paleta já estabelecida.
- Picaretas e machados também reutilizam exatamente o mesmo desenho entre tiers; apenas a cabeça metálica recebe a paleta do material.
- Nenhum stat, tier, inventário, mapa, tile, objeto, NPC, inimigo, interface ou sistema foi alterado.
- Nenhum asset raster grande foi adicionado; o desenho continua leve e pixel-perfect no Canvas.


## Objetos do mundo e elementos de cenário — v43

- Objetos do mundo redesenhados em pixel art 100% top-down, preservando footprints, coordenadas, colisões e interações.
- Árvores usam `TREE_01–04`, com copas irregulares vistas de cima, sombras discretas e pequenas diferenças naturais; Coqueiro possui renderer radial próprio para Mornaqua.
- Arbustos/cogumelos usam `BUSH_01–03`; recursos ativos continuam imediatamente reconhecíveis sem brilho excessivo.
- Depósitos de minério compartilham a mesma linguagem e silhueta, diferenciados principalmente por paleta: Ferro marrom, Mithril azul-escuro, Platina cinza-escuro, Ouro dourado, Rubi vermelho, Diamante cinza-claro e Onyx preto.
- Rochas decorativas são pequenas/neutras e visualmente distintas de depósitos mineráveis.
- Baús, milho e tomate receberam desenho top-down mais legível; estados de coleta/abertura/crescimento continuam idênticos.
- Construções externas e fogueira foram ajustadas para leitura direta de cima sem mudar portas, footprints ou áreas interativas.
- Vegetação secundária é procedural, esparsa e determinística por coordenada. A biblioteca já possui perfis para Atenaria, Altaria, Mornaqua, Calindra, Solácia, Blazíria e Necrovícia, sem criar mapas novos.
- O renderer de terreno da v42 permanece byte a byte igual dentro do bloco de tiles; personagens, NPCs, inimigos, equipamentos, interface e arquivos de dados não foram alterados.
- Nenhuma imagem grande foi adicionada; todos os elementos continuam sendo compostos por poucos blocos de pixel no Canvas.
- Save schema permanece o mesmo da v40–v42; v43 é exclusivamente visual.


## Tiles e terreno — v42

- Terreno redesenhado em pixel art top-down, mantendo exatamente o mesmo grid, mapas, colisões e gameplay.
- Grama com 4 variações determinísticas e textura discreta; caminhos/terra com 3 variações.
- Pedra/caverna com 3 variações, fissuras leves e contraste de piso sem poluir a leitura.
- Água com 4 variações de reflexo/ondas reutilizáveis e bordas rasas top-down.
- Transições orgânicas geradas por vizinhança entre grama, terra e água, com pequenos recortes de borda/canto.
- Pisos internos receberam textura pixelada de madeira/pedra, sem perspectiva frontal.
- Nenhum atlas/imagem grande foi adicionado: as variações são desenhadas com poucos retângulos de pixels no canvas.
- `Math.random()` não é usado para textura: a variação é estável por coordenada e área.
- Personagens, NPCs, inimigos, equipamentos, recursos, objetos, interface e arquivos de dados permanecem inalterados em relação à v41.

## Padrão visual de sprites — v41

- Renderer de sprites padronizado em pixel art 2D top-down, sem imagens grandes ou filtros.
- Direção única de luz: canto superior esquerdo.
- Personagens, NPCs e inimigos usam contornos escuros coloridos, paletas compactas e sombras simples.
- Equipamentos mantêm exatamente a mesma silhueta entre tiers; a progressão visual ocorre apenas por paleta.
- Árvores, bushes/cogumelos, baús, ovelhas, plantações e casas receberam o mesmo tratamento visual sem alteração de hitbox ou layout.
- `imageSmoothingEnabled=false` continua sendo usado para preservar aparência pixel-perfect.
- Nenhuma mecânica, mapa, regra de gameplay, câmera ou interface foi alterada nesta etapa.

## Estrutura de mundo — v40

Terrópia passa a ter sete regiões/biomas, cada uma vinculada a um Tier de tela. O Tier define a faixa esperada de força dos inimigos, Tier predominante de recursos e Tier/base de recompensas de baús e quests. Conteúdo legado de Atenaria é preservado quando possui exceções já usadas por missões.

| Tier | Região | Bioma | Combate recomendado | Inimigos-base |
|---|---|---|---:|---|
| T1 | Atenaria | Campo / Floresta | 1 | Galinha, Bode, Rato, Aranha, Morcego |
| T2 | Altaria | Montanhoso | 12 | Bode, Morcego, Falcão, Lobo Montanhês, Carneiro Selvagem, Águia Rochosa |
| T3 | Mornaqua | Litoral | 20 | Pelicano, Leão Marinho, Gaivota, Caranguejo, Siri |
| T4 | Calindra | Selva Densa | 30 | Cobra, Pantera Negra, Planta Carnívora, Golem de Musgo |
| T5 | Solácia | Deserto | 40 | Escorpião, Serpente Naja, Golem de Areia |
| T6 | Blazíria | Vulcânico | 50 | Golem de Pedra, Morcego Gigante, Serpente Rochosa |
| T7 | Necrovícia | Terras Devastadas | 60 | Zumbi, Fantasma, Orc, Esqueleto |

Raças registradas: Humano (Atenaria), Aviário (Altaria), Goblin e Gnomo (Calindra), Reptiliano (Solácia), Orc (Blazíria) e Elfo (Necrovícia). NPCs atuais são Humanos, exceto Gnomo Júlio, que é Gnomo. Sprites futuros usam a cor-base da raça; Aviários também possuem suporte visual a bico amarelo.

O recurso de madeira T3 agora é **Coqueiro / Lenha de Coqueiro**. Coqueiros podem derrubar Côco, um alimento consumível.

## Identidade das telas — v40

Cada tela/mapa possui um código permanente no formato `AT-XXX`. `AT` é o prefixo permanente de identidade das telas; a Região é armazenada separadamente, e o número identifica unicamente a tela. Os códigos não devem ser reutilizados. Novas telas recebem o próximo código livre.

| Código | Área | Tela |
|---|---|---|
| AT-001 | `home` | Casa do Jogador |
| AT-002 | `smithy` | Ferreiro de Carpinelli |
| AT-003 | `bank` | Banco de Carpinelli |
| AT-004 | `shopInterior` | Loja de Carpinelli |
| AT-005 | `village` | Vila Carpinelli |
| AT-006 | `village2` | Vila Carpinelli — Área Oeste |
| AT-007 | `entrance` | Entrada da Caverna |
| AT-008 | `cave1` | Caverna — Galeria dos Morcegos |
| AT-009 | `cave2` | Caverna — Galeria dos Lobos |
| AT-010 | `cave3` | Caverna — Covil do Lobo Gigante |
| AT-011 | `witchyard` | Passagem da Bruxa |
| AT-012 | `darkforest` | Floresta Obscura |
| AT-013 | `spiderlair` | Covil da Aranha Gigante |
| AT-014 | `mushroomforest` | Floresta dos Cogumelos |

O código da tela atual também aparece junto ao nome da localização na interface. No console, `CRPG.world.getMapCode(area)` retorna o código de uma área.


## Ajustes da v39

- Nova tela `AT-014` — Floresta dos Cogumelos, conectada ao sul de `AT-007`.
- 2 Carvalhos, 2 pontos de Cogumelo, Gnomo Júlio e 2 Capivaras.
- Cogumelo recupera 10 HP e concede imunidade a Envenenado por 5 minutos.
- Missão do Gnomo Júlio: entregar 10 Cogumelos para receber Livro Arcano Tier 1 (+5% dano mágico, mão esquerda).
- Capivaras têm 10% de chance de soltar Semente de Tomate; tomate pode ser plantado, colhido, consumido e cozido.

## Ajustes da v37

- A Armadura de Ferro de Jordan é o mesmo `ironArmor` equipável produzido pela Ferraria.
- Durante batalha, nenhuma ação externa à interface de combate é aceita; alimentos são consumidos somente pelo botão `Comer`.
- Tooltips de comida informam a recuperação de HP em verde e negrito.
- HUD fixo à direita exibe HP, MP, progresso de XP do nível e moedas de ouro.
- Milho Cozido usa um ícone alaranjado próprio, sem a parte verde do emoji de milho.
- Banco ganhou menus de contexto para guardar/retirar uma unidade ou todas.
- Banco físico agora possui balcão e os banqueiros Carlos, Cecília e Clóvis, sem baús no cenário.

## Ajustes da v35

- Mensagens de restrição de ações passam a usar borda vermelha no aviso e no balão acima do personagem.
- Minério de Mithril da Caverna 2 reposicionado para um footprint 2×2 sem tile de pedra.
- Milho Cozido recebeu um tom amarelo mais alaranjado para diferenciá-lo do Milho Verde.
- Coleta de lã tem 5% de chance de disparar um encontro aleatório com um Bode, sempre precedido por aviso com confirmação `OK` e mensagem bem-humorada.
- O Dragão Ancestral também usa o fluxo unificado de aviso para encontros aleatórios.
- Tela de vitória considera o gênero configurado do inimigo (`derrotada` / `derrotado`).
- Banco ganhou menu contextual no clique direito do inventário com `Guardar Item` e `Guardar Todos os Itens`, incluindo suporte a pilhas.
- `saveVersion: 35`, mantendo o mesmo prefixo de saves para preservar os personagens existentes.

## Ajustes da v34

- Painel lateral de Níveis mantém 3 colunas, mas os cards deixam de ser quadrados e passam a usar formato retangular compacto.
- O texto `Nv. X` foi ampliado para melhorar a leitura rápida.
- As interfaces laterais Personagem, Níveis e Inventário não exibem barras de rolagem horizontais ou verticais; quando necessário, a rolagem vertical continua disponível por mouse/toque.
- `saveVersion: 34`, mantendo o mesmo prefixo de saves para preservar os personagens existentes.

## Ajustes da v33

- Painel lateral de Níveis compactado para 3 colunas, com três Skills por linha e Artesanato sozinho à esquerda na quarta linha.
- O nome da Skill foi removido dos cards laterais para reduzir altura e ruído visual.
- No hover do card lateral, o nome da Skill aparece acima de XP atual / XP para upar / XP total.
- A tela “Ver todos os níveis” permanece com nomes e descrições completas.
- `saveVersion: 33`, mantendo o mesmo prefixo de saves para preservar os personagens existentes.

## Ajustes da v32

- O painel lateral direito de Níveis agora usa a mesma hierarquia dos cards: ícone + `Nv. X`, nome abaixo e barra de progresso.
- A ordem do painel lateral foi unificada com a tela completa: Combate, Arquearia, Magia / Mineração, Corte de Árvore, Pesca / Culinária, Plantação, Ferraria / Artesanato.
- A tela “Ver todos os níveis” ganhou uma descrição curta em cada Skill explicando sua função.
- `saveVersion: 32`, mantendo o mesmo prefixo de saves para preservar os personagens existentes.

## Ajustes da v31

- Tela detalhada de Níveis mantém 3 colunas e passa a usar a hierarquia: ícone + `Nv. X` na primeira linha, nome da Skill abaixo e barra de XP no rodapé.
- Ordem fixa da grade: Combate, Arquearia, Magia / Mineração, Corte de Árvore, Pesca / Culinária, Plantação, Ferraria / Artesanato sozinho à esquerda.
- Cards tiveram ícone, nível e nome ampliados para melhorar a leitura.
- `saveVersion: 31`, preservando o mesmo prefixo de saves para manter os personagens existentes.

## Ajustes da v30

- Árvores ativas bloqueiam todo o footprint 2×2; o toco libera passagem após o corte.
- Proteção de layout impede árvores de compartilharem espaço com NPCs ou inimigos; um spawn de slime da Vila 2 foi reposicionado.
- A tela de Níveis usa cards quadrados grandes em 3 colunas: ícone, nome, `Nível X` e barra de XP. O hover continua mostrando XP atual, XP restante e XP total.
- Restrições de ações no mundo (ferramenta/nível de mineração, corte, pesca e portão mágico) aparecem também em um balão acima do personagem.
- Tiles de Plantação não podem mais ser atravessados. Clique/interação calcula caminho até um tile adjacente.
- Recompensas da tela final de batalha ficam alinhadas à esquerda.
- O ícone de Milho Cozido recebeu tratamento visual mais escuro que o Milho Verde.
- `saveVersion: 30`, preservando o prefixo de saves atual para manter os personagens existentes.

## Testes

```bash
python tests/static-check.py
node tests/smoke-runtime.js
node tests/functional-check.js
node tests/v24-check.js
node tests/v25-check.js
node tests/v26-check.js
node tests/v27-check.js
node tests/v28-check.js
node tests/v29-check.js
node tests/v30-check.js
node tests/v31-check.js
node tests/v32-check.js
node tests/v33-check.js
node tests/v34-check.js
node tests/v35-check.js
node tests/v36-check.js
node tests/v37-check.js
node tests/v38-check.js
node tests/v39-check.js
node tests/v40-check.js
node tests/v41-check.js
node tests/v42-check.js
node tests/v43-check.js
node tests/v44-check.js
node tests/v45-check.js
node tests/v46-check.js
node tests/v47-check.js
node tests/v48-check.js
node tests/v49-check.js
node tests/v50-check.js
node tests/v51-check.js
node tests/v52-check.js
node tests/v53-check.js
node tests/v54-check.js
node tests/v55-check.js
node tests/v56-check.js
node tests/adjustments-check.js
```

### v00100 — offline e controles de plataforma
Após a primeira visita com o service worker instalado, os arquivos essenciais da versão ficam disponíveis offline. Os caches são separados por build e caches antigos de Terrópia são removidos durante a ativação. Tela cheia é opcional; em celulares em portrait o jogo recomenda paisagem sem impedir o uso vertical. Controles compatíveis com a Gamepad API podem mover o personagem, interagir, abrir painéis e executar ações de batalha, com prompts contextuais na tela.

### Saves (v00110)
Os saves continuam em `localStorage`, agora atrás de `SaveStorage`. O painel do personagem permite exportar/importar JSON. Antes de migrar saves antigos ou sobrescrever um personagem via importação, Terrópia cria um backup timestampado recuperável no armazenamento local. A API também oferece métodos Promise-first para permitir a troca futura do backend por IndexedDB sem acoplar gameplay ao mecanismo de persistência.
