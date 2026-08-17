## V00187
- Corrige o jogo quebrado no GitHub Pages com `index.html` standalone.
- Corrige o 404 do World Editor com `editor.html` standalone na raiz.
- Corrige links internos Mobile/Desktop do editor.
- Remove dependência do service worker no runtime standalone e limpa caches antigos.
- Mantém jogo, editor e fontes completos no mesmo ZIP.

# V00187

- Repositório unificado: jogo e World Editor passam a ser entregues no mesmo ZIP e podem coexistir no mesmo GitHub Pages.
- World Editor canônico em `/editor/`, com detecção automática Mobile/Desktop e links internos corrigidos.
- Corrigido service worker para não redirecionar navegação do editor para o HTML do jogo.
- Sincronizada a matriz oficial de 8 tiers regionais de minérios, gemas, árvores e peixes; IDs internos legados permanecem para compatibilidade de saves.
- Rótulos de contratos, questlines e conteúdo foram atualizados para os novos nomes de recursos.
- Regra persistente de entrega consolidada: futuras alterações retornam um único `VNNNNN.zip`.

# V00184

- Reestruturados os 8 tiers oficiais de minério, gema, árvore e peixe por região.
- World Map sincronizado com a matriz regional de recursos.
- Minérios: Cobre, Ferro, Níquel, Mithril, Prata, Ouro, Blazirite e Necrite.
- Gemas: Safira, Água-marinha, Rubi, Esmeralda, Diamante, Ônix, Obsidiana e Necrostone.
- Árvores: Carvalho, Coqueiro, Cedro, Salgueiro, Pinheiro, Acácia, Árvore de Cinzas e Árvore Necrótica.
- Peixes: Lambari, Atum, Truta, Carpa, Salmão, Dourado, Peixe-Lava e Peixe Abissal.
- Obsidiana usa visual preto com detalhes vermelhos; Ônix passa a cinza escuro; Necrostone roxa.
- IDs internos legados preservados para compatibilidade de save.
- World Editor unificado incorporado ao pacote.

## v00182
- World Editor passa a ter entrada unificada responsiva: interface Mobile simplificada no iPhone e interface Desktop completa em telas maiores.
- `world-editor/index.html` detecta o dispositivo; `?mode=mobile` e `?mode=desktop` permitem seleção manual.
- Mobile e Desktop passam a usar a mesma base `world-editor/data.js`, o mesmo schema e a mesma chave local `terropia-world-editor-v1`, preservando dados avançados quando a edição é feita no mobile.
- Adicionado `WORLD_EDITOR_UNIFIED_v00182.md` documentando arquitetura e a limitação de sincronização entre aparelhos em hospedagem estática.
- Adicionada regra persistente `CHATGPT_VERSIONING_RULE.md`: toda alteração futura feita pelo ChatGPT deve gerar um ZIP com uma versão acima da recebida.
- `WORLD_EDITOR_CHATGPT_INSTRUCTIONS.md` passa a incorporar explicitamente a regra obrigatória de release.
- Build/PWA/metadados avançam para v00182; schema de save do jogo permanece inalterado.

## v00181
- Aplicadas integralmente as alterações exportadas pelo World Editor Mobile v10 para AT-005, AT-006, AT-022 e AT-023.
- AT-005 renomeada para `Vila Carpinelli - Entrada`.
- AT-022 renomeada para `Vila Carpinelli - Área Sul` e reclassificada como `town`; AT-023 renomeada para `Vila Carpinelli - Área Sudoeste` e reclassificada como `town`.
- Geometria/conexões reconciliadas com as observações autorais: AT-006 apenas leste/sul; AT-022 apenas norte/oeste; AT-023 apenas norte/leste. Aberturas físicas incompatíveis foram fechadas nos mapas.
- Conteúdo já existente da AT-022 (Elis, loja de Frasco Vazio, Girassol ×3, Cabana/interior, mistura com água e Poção de Ataque +5% por 10 ataques, menu contextual de NPC) foi preservado e validado.
- World Editor incorporado ao novo estado-base, sem alterações pendentes; runtime library e planilha de World Map ressincronizados.
- Build/PWA/exportação passam a v00181; schema de save permanece inalterado.

## v00180
- World Editor — Etapa 3 implementada com schema 4 e migração compatível da base v00179.
- Event Builder por tela com triggers estruturados, páginas/estados ordenáveis, condições `flag/quest/skill/item/layer/custom` e ações de diálogo, flags, quests, itens, câmera, spawn, camadas e teleporte.
- Quest Graph global gerado a partir das 41 quests detectadas no runtime, com criação de novas quests, pré-requisitos estruturados, vínculos de tela, conclusão e recompensas.
- Camadas de mundo de primeira classe, com camada Base obrigatória, condições de ativação e associação por tela, entidade individual e estado de evento.
- Progression View unifica progression locks de conexões, pré-requisitos de quests e 88 marcos profissionais/endgame detectados no runtime.
- Validação RPG passa a detectar ciclos de quests, referências quebradas, layers inexistentes, locks inválidos, skills não catalogadas, flags exigidas sem produtor e câmera focada sem restauração.
- Critérios de aceite automáticos passam a fazer parte do Change Set e podem ser exportados como `WORLD_EDITOR_ACCEPTANCE.json`.
- Gerador de testes cria `WORLD_EDITOR_GENERATED_TESTS.js` a partir dos critérios automatizáveis para auditoria após implementação.
- Auditoria Editor ↔ runtime compara mapa, definições, quests e hash do manifesto; mudanças autorais pendentes aparecem separadamente como pendências de reconciliação, com indicador automático no cabeçalho.
- Biblioteca do runtime passa a catalogar 120 telas, 41 quests e 88 marcos de progressão, além do catálogo visual/técnico da Etapa 2.
- Overlays do mapa ganham Eventos, Camadas e Progressão; progression locks das conexões passam a ser estruturados além do texto legível.
- `WORLD_EDITOR_CHANGES.json`, Snapshot e Prompt passam a carregar Quest Graph, Camadas, eventos/estados, locks, critérios e validação de progressão.
- Build/PWA/exportação passam a v00180; gameplay e schema de save permanecem inalterados.

## v00179
- World Editor — Etapa 2 implementada com schema 3 e migração compatível da base v00178.
- Blueprint 16:9 em cada tela com posições percentuais exportáveis e drag-and-drop de conteúdo.
- Entradas/saídas N/L/S/O visuais ligadas à metadata de conexão existente.
- Templates built-in (Coleta, Encontro, Quest Giver, Loja e Interior pequeno) e templates customizados salvos no projeto do Editor.
- Multi-seleção de telas (Shift/Ctrl) para templates em lote e multi-seleção de conteúdo para movimentação agrupada no blueprint.
- Overlays do mapa para conteúdo, NPCs, recursos, inimigos, construções, quests, interiores e alterações.
- Nova biblioteca de runtime gerada por `tools/generate-world-editor-runtime-library.js`; manifesto inclui NPCs, recursos, inimigos, localizações/mecânicas e catálogo técnico de registries/funções.
- Busca “Onde isto é usado?” cruza ocorrências do Editor e instâncias detectadas no runtime.
- `WORLD_EDITOR_CHANGES.json`/Snapshot/Prompt passam a carregar a semântica de posição visual; instrução persistente atualizada.
- Build/PWA/exportação passam a v00179; gameplay e schema de save permanecem inalterados.

## v00178
- World Editor — Etapa 1 implementada com schema 2 e migração compatível da base v00177.
- NPCs, Recursos, Inimigos e Construções passam de texto livre para cards estruturados com IID, status EXISTENTE/NOVO, ID de definição, quantidade e propriedades específicas.
- Adicionados metadados editáveis às conexões automáticas: ativa/desativada, mão única, bloqueio, requisito, transição, spawn e observações.
- Adicionados Interiores/Subáreas vinculáveis a Construções, sem exigir novo tile no mapa-múndi. AT-022 passa a representar `interior_alchemist_hut` explicitamente no estado-base.
- Adicionado Controle de Design por tela (Exato / Estruturado / Direção criativa) e restrições explícitas de câmera, conexões, NPCs, quests, dificuldade e layout.
- Adicionados Diff visual, Validador estrutural e Undo/Redo de sessão.
- Exportação separada em `WORLD_EDITOR_CHANGES.json`, `WORLD_EDITOR_SNAPSHOT.json` e `WORLD_EDITOR_PROMPT.md`; instrução persistente atualizada para priorizar Changes + Snapshot.
- Build/PWA/exportação passam a v00178; schema de save do jogo permanece inalterado.

## v00177
- Implementado o `WORLD_EDITOR_PROMPT.md` pendente da v00176 na AT-022 (Clareira dos Carvalhos).
- AT-022 recebe três Girassóis coletáveis (`girassol1`, `girassol2`, `girassol3`) distribuídos pela tela.
- Adicionada a Cabana da Alquimista como construção funcional vinculada à AT-022, com interior próprio e decoração de frascos, ervas, bancada e utensílios de alquimia.
- Adicionada Elis, alquimista posicionada dentro da cabana, com diálogo que explica o preparo da Poção de Ataque.
- Loja da Elis adicionada: vende Frasco Vazio por 5 ouro. Frascos são empilháveis.
- Novo fluxo de Alquimia nível 1: usar Frasco Vazio em água cria Frasco com Água; combinar Frasco com Água + Girassol cria Poção de Ataque (+6 XP de Alquimia).
- Poção de Ataque aumenta em 5% o dano causado pelas próximas 10 ações ofensivas (físicas, à distância, mágicas e habilidades ofensivas), com contador visível durante batalha.
- Botão direito sobre NPCs passa a abrir menu contextual com `Falar`, `Abrir Loja` quando o NPC possui comércio, e `Cancelar`; o comportamento bancário especializado existente é preservado para banqueiros.
- Editor de Mundo sincronizado com a implementação: AT-022 passa a fazer parte do estado-base v00177 e `WORLD_EDITOR_PROMPT.md` fica sem alterações pendentes.
- Biblioteca do Editor ampliada com Elis, Girassol, Cabana da Alquimista, menu contextual de NPC e Poção de Ataque.
- Build/PWA/exportação passam a v00177; schema de save permanece 55.

## v00176
- Inventário: a borda base da grade deixa de usar amarelo/dourado; apenas slots preenchidos com item recém-obtido recebem o stroke amarelo de item novo. Slots vazios permanecem neutros.
- Alvo de interação: removida a linha preta desenhada sob árvores/objetos quando o alvo amarelo de proximidade aparece; permanecem somente os cantos amarelos.
- Adicionado `world-editor.html`, um Editor de Mundo interativo no navegador com as 120 telas atuais, painel de edição por tela (NPCs, Recursos, Inimigos, Construções, Mecânicas/Funções e observações), biblioteca lateral do conteúdo existente, criação de novas telas e drag-and-drop de posicionamento.
- O Editor recalcula automaticamente conexões ortogonais N/L/S/O a partir da posição dos tiles e inclui essas conexões nos artefatos exportados.
- Editor exporta `world-editor-project.json` e `WORLD_EDITOR_PROMPT.md`, incluindo diferenças (modified/created/deleted), estado completo das telas e instruções para implementação futura.
- Adicionada instrução persistente `WORLD_EDITOR_CHATGPT_INSTRUCTIONS.md`: futuras edições de mundo devem verificar o estado/export do Editor antes de alterar o runtime e reconciliar Editor ↔ jogo.
- Menu inicial passa a oferecer acesso direto a `🗺️ Editor de Mundo` em nova aba.
- Build/PWA/exportação passam a v00176; schema de save permanece 55.

## v00175
- Dock inferior redistribuído para 50% Registro/Histórico, 20% Comando e 30% HP/MP/Gold, permitindo que o registro preencha mais da largura do canvas e compactando os vitais.
- Removido o placeholder `tp 005` do campo de comando; o comando continua funcional.
- Placeholders dos slots vazios de equipamento recentralizados e reduzidos para 30% de opacidade, mantendo tratamento monocromático.
- Marcadores de quest preservam a lógica de cores por estado, mas passam a usar um ponto de exclamação branco em todos os estados visíveis.
- Interface de Personagem remove o nome do cabeçalho, move Ouro para baixo das barras e acima dos stats, e adiciona Ataque Mágico e Evasão com ícones. Evasão passa a ter suporte funcional a bônus de equipamento, com base atual de 0% para preservar o balanceamento.
- Build/PWA/exportação passam a v00175; schema de save permanece 55.

## v00174
- Rodapé do gameplay redistribuído pela largura total do canvas: 40% Registro, 20% Comando e 40% HP/MP/Gold.
- Corrigida a interface de Equipamento: sprites dos itens equipados voltam a aparecer; slots vazios mantêm seus símbolos centralizados, monocromáticos e com 50% de opacidade.
- Recuperada a cena de primeira entrada no AT-006 com a Anciã Mira: zoom e acompanhamento temporários focam a NPC durante a ação e retornam à câmera fixa ao final. Fora de cenas que habilitem câmera roteirizada, o gameplay permanece sem follow/zoom.

## v00173
- Passagem da Bruxa: removida a faixa de colisão abaixo/à frente da cabana de Selene; muro e portão central agora têm uma única linha de profundidade.
- Registro passa a ocupar aproximadamente 80% do rodapé, mantendo a mesma altura; comando e HP/MP/Gold ficam compactos à direita.
- Fogueira mantém a base fixa e anima apenas o desenho da chama, eliminando o efeito de fogo flutuante.
- Tela de Personagem não exibe mais região/local/código da tela.
- Adicionado botão ⚙️ Configurações ao menu fixo superior; o menu principal também expõe as mesmas configurações.
- Marcador de nova missão usa ponto de exclamação em vez de sinal de mais.
- Removidos checkmarks avulsos: tanto o desenhado sobre projetos concluídos no mundo quanto o marcador injetado pela acessibilidade abaixo do painel de níveis.
- Equipamento passa a usar nove slots menores e quadrados, somente com ícones; nomes e informações permanecem no hover.

## v00172
- Caixa de registro ampliada e caixa de comando alargada no dock inferior.
- Teleporte de desenvolvimento simplificado: `tp 005` abre diretamente a tela `AT-005` (com `/teleport` mantido por compatibilidade).
- Inventário agora permite reorganização por arrastar e soltar, com troca entre slots ocupados e movimento para slots vazios; a posição persiste no save.
- Cabana da Bruxa Selene movida para encostar na primeira linha superior da tela.
- Textos flutuantes de recompensas no mundo agora usam linhas verticais separadas, evitando sobreposição entre itens, gemas e XP.

# v00171 — Limpeza de interações adiadas e UI inferior compacta

- Arqueologia, museu, tesouros e eventos dinâmicos ficam suspensos: sem sprites, tiles clicáveis, interação por tecla/clique/uso de item ou pistas acionáveis.
- Nome do personagem removido debaixo do sprite no mundo.
- Registro inferior ampliado e sem scroll horizontal; textos passam a quebrar linha quando necessário.
- Barra de comando e bloco HP/MP/Gold reduzidos verticalmente; rótulo visível “Comando” removido.
- Contorno preto dos olhos dos personagens afinado para evitar efeito de maquiagem pesada.
- Slots/ícones do inventário ficam totalmente quadrados, sem caixas arredondadas por item; stroke amarelo de item novo permanece.
- Build/PWA/exportação passam a v00171; schema de save permanece 54.

# v00170 — Interações recuperadas, pesca imediata e dock inferior

- Tooltips de item deixam de exibir a seção `CADEIA`; a informação de cadeia continua disponível nas telas de produção/receitas.
- Destaque de interação mantém o contorno do tile, mas remove textos flutuantes como `CLIQUE Pescar`, `TOCAR Interagir` e equivalentes.
- Fogueira e todos os objetos interativos já registrados voltam à camada visual: árvores, minérios, arbustos, baús, canteiros, arqueologia, museu, tesouros, eventos dinâmicos, entrada da caverna e cercados/ovelhas. Microdecoração sem gameplay continua desligada.
- Corrigido o escopo de `added` em `fish()`: o Lambari de Atenaria e demais capturas agora disparam `updateUI()` no mesmo ciclo e aparecem no inventário imediatamente.
- Petrúquio deixa de existir como pet seguidor; a missão/entidade narrativa de Clarisse permanece preservada.
- HUD rápido remove XP e vira uma única linha `HP > barra > valor • MP > barra > valor • ouro > valor`, com tipografia maior.
- Registro, comando e HP/MP/Gold saem de cima do canvas e passam para um dock inferior de 96 px; comando fica entre registro e status.
- Inventário remove o selo `NOVO`; itens inéditos recebem stroke amarelo claro, removido no primeiro hover ou clique.
- Grade 4×7 do inventário passa a usar divisórias explícitas por célula, corrigindo a terceira linha vertical que desaparecia por arredondamento.
- Build/PWA/exportação passam a v00170; schema de save permanece 54.

# v00169 — Tela 24×12, interiores e correções de interação

- Todas as áreas passam de 24×15 para **24×12 tiles**, mantendo TILE=60 e reduzindo o canvas lógico de 1440×900 para **1440×720**. Saves v00165–v00168 migram automaticamente as coordenadas verticais para a nova grade.
- Corrigida a galinha que podia nascer sobre a cerca; galinhas fora da área interna são reposicionadas para dentro do cercado.
- Mantido livre o corredor interno do portão das ovelhas após a redução vertical, evitando que uma ovelha bloqueie a passagem.
- Entradas das construções passam a usar **um único tile interativo**; a saída dos interiores também usa um tile.
- Galinhas aparecem menores na tela de batalha.
- Tooltip de itens e menus contextuais agora ficam em layer global acima de canvas, overlays e painel; `Guardar` / `Guardar todos` no Banco volta a ficar visível e funcional.
- Interiores de Casa, Ferraria, Banco e Loja voltam à camada de cenário, recuperando objetos, props estéticos, balcão, cofres/caixas de segurança e storytelling visual.
- Build/PWA e exportação atualizados para v00169; schema de save sobe para 54.

# v00168 — Entradas dos cercados e recursos do mundo restaurados

- Corrigidas as entradas dos cercados de **galinhas** e **ovelhas**: o gate agora é ancorado à borda inferior efetiva depois da conversão 32×20 → 24×15, liberando passagem também na colisão.
- Restaurada visualmente a **Cabana da Bruxa Selene** na Passagem da Bruxa, reutilizando o perfil histórico `witchHut` e o footprint estrutural já existente no mapa.
- Restaurados os veios de **Ferro** e **Mithril** com seus estados ativo/esgotado e animação de mineração existentes.
- Restauradas as **árvores** em todas as áreas que já possuem nodes de madeira.
- Restaurados os arbustos de **Framboesa** comum, preservando coleta e respawn existentes.
- Restaurados os **tiles de plantação/canteiros**, incluindo visual de solo vazio, culturas em crescimento e colheita.
- O restante das props/microdecorações removidas na v00162 continua oculto. Save schema permanece em 53; build/PWA e exportação passam a v00168.

# v00167 — Menu 4+3, construções/cercados restaurados e HUD corrigido

- **Missões, Equipamento e Diário** saíram da aba Personagem e agora ficam no menu fixo superior, formando 4 botões na primeira linha e 3 na segunda.
- Restauradas visualmente em Carpinelli as construções funcionais de **Casa, Ferraria, Banco e Loja**, reaproveitando os footprints, portas e perfis visuais já existentes.
- Restauradas a **cerca das galinhas** (incluindo o estado quebrado/reparado da missão) e a **cerca das ovelhas**; as ovelhas também voltam a ser renderizadas para a coleta de lã permanecer legível.
- O restante do cenário removido na v00162 continua oculto; a restauração é pontual para não reintroduzir props/decor antigos por acidente.
- HUD de **HP, MP, XP e Ouro** reconstruído como uma faixa horizontal estável no canto superior direito do canvas, sem `display: contents` nos grupos principais.
- Build/PWA e exportação de save atualizados para v00167.

# v00166 — Inventário 4×7, equipamento 3×3 e HUD horizontal

- Painel lateral ampliado para 220px e inventário reorganizado em **4 colunas × 7 linhas**, mantendo os 28 slots com ícones menores.
- Botões, retrato, textos e controles do menu lateral recalibrados para a nova largura.
- Tooltips dos botões laterais agora usam uma layer fixa global (`z-index: 10000`), sobrepondo canvas e demais camadas sem serem cortados pelo scroll do painel.
- Equipamento reorganizado em matriz 3×3: Amuleto/Cabeça/Flecha; Mão Esquerda/Armadura/Mão Direita; Bota/Luvas/Anel.
- Arcos passam a equipar na Mão Direita; saves antigos com o slot `bow` são migrados automaticamente sem perder o item. Novo slot de Anel incluído no estado.
- Mão esquerda fica preparada para Escudo, Livro e Adaga; mão direita para Espada, Cajado, Arco e Besta.
- HUD de HP/MP/XP/Ouro movido para o canto superior direito em uma única linha, com barras mais curtas.
- Registro/Histórico ampliado no canto inferior esquerdo e barra de comando movida para o canto inferior direito.
- Schema de save atualizado para 53 e build/PWA para v00166.

# v00165 — Tela fixa 24×15 e layout 1600×900

- Mundo lógico alterado para **24×15 tiles** com `TILE=60`, totalizando **1440×900**.
- Removidos follow, pan e zoom de apresentação do overworld: cada área agora é uma composição fixa inteira.
- Mapas-fonte legados 16×10 passam por reamostragem nearest-neighbour determinística para 24×15.
- Coordenadas de conteúdo da grade 32×20 da v00164 são migradas para a nova grade, incluindo NPCs, inimigos, recursos, conexões e saves.
- Interiores foram reposicionados para caber integralmente na nova tela fixa.
- Canvas atualizado para 1440×900 e proporção 24:15 (8:5), preservando pixel-art sem smoothing.
- Painel lateral passa a 160px; inventário usa duas colunas e ícones maiores. Mundo (1440px) + painel (160px) formam exatamente **1600×900**.
- Saves anteriores até a v00164 migram coordenadas persistentes para 24×15, incluindo player, drops, árvores, plantações e trilha de pet; schema sobe para `SAVE_VERSION=52`.
- Opção de zoom de câmera foi substituída por enquadramento fixo.

# v00164 — Escala visual e legibilidade (+15%)

- Mundo renderizado 15% maior, mantendo coordenadas, colisões e tiles lógicos intactos.
- Câmera acompanha a posição do jogador dentro da tela para acomodar o novo enquadramento.
- Personagens, terreno, efeitos e textos desenhados no canvas ganham maior presença visual.
- Tipografia da interface e textos ingame aumentados em aproximadamente 15% para melhorar legibilidade.
- Nenhuma alteração em world map, tiers, recursos ou progressão nesta versão.

# v00162 — Mundo visual limpo para construção narrativa

- Todas as camadas de objetos colocados foram retiradas da apresentação dos mapas: microdecoração, props regionais, construções/fachadas, projetos concluídos e recursos visuais.
- A camada de terreno permanece intacta, preservando chão, paredes/obstáculos estruturais, água e demais texturas/autotiles de região.
- Registries, save, quests, NPCs e regras de gameplay foram preservados para não destruir conteúdo enquanto os objetos do mundo são redefinidos futuramente.
- Build/PWA atualizado para v00162; schema de save permanece compatível.

# v00161 — Loja pelo inventário, banco quantitativo e mundo ampliado

- Loja simplificada: a vitrine exibe somente os itens disponíveis para compra; ao abrir a loja, o painel lateral muda automaticamente para o Inventário.
- Enquanto a loja está aberta, botão direito em um item do inventário abre o menu contextual temporário `Vender`, `Vender tudo` e `Cancelar`. Ao fechar a loja, o menu normal de itens é restaurado.
- Banco corrigido para preservar `qty` de qualquer tipo de item, inclusive tipos não empilháveis no inventário. Itens iguais ocupam um único slot no banco com contador e voltam ao inventário como múltiplas unidades.
- Marcador de clique/seta movido para a camada anterior às entidades, ficando visualmente por baixo do personagem ao chegar ao destino.
- Moldura dos mapas expandidos reduzida de dois tiles para um tile, preservando aberturas de transição.
- Apresentação do mundo em janelas estreitas recebe um piso de largura aproximadamente 20% maior; quando não há espaço, a página prefere rolagem a reduzir novamente o canvas.
- Menu lateral permanece sempre na lateral, inclusive em viewports menores.
- Inventário redesenhado com uma única borda externa e linhas de grid, removendo caixas/bordas individuais dos slots.
- Salvar, Exportar, Importar, Reiniciar e Tela cheia permanecem em uma única linha com botões compactos.
- Build/PWA e metadado de exportação atualizados para v00161; schema do save permanece compatível.

# v00160 — Tooltips ingame e viewport responsivo máximo

- Botões do painel direito agora usam tooltip ingame instantâneo (`data-tooltip`), sem o tooltip nativo atrasado do navegador.
- Cards de Níveis exibem somente ícone + número do nível, removendo o prefixo visual `Nv.`.
- Inventário lateral não exibe mais o nome do item sob o ícone; o nome permanece no tooltip detalhado.
- Tooltip dos itens passa a ficar ancorado ao slot em posição estática enquanto o mouse se move sobre o item.
- Escala de apresentação do canvas deixou de usar degraus 1/2, 1/3 etc. e agora ocupa continuamente o maior retângulo 16:9 disponível.
- Layout do gameplay reserva o espaço da janela antes de calcular o tamanho do canvas, permitindo crescer novamente após redimensionamentos.
- Mapa do Mundo passa a ser fixado ao viewport e limitado simultaneamente por largura e altura, garantindo exibição integral em janelas menores.
- Build/PWA e metadado de exportação de save atualizados para v00160, sem mudança de schema.

# v00159 — Interface compacta e feedback de movimentação

- Registro / Histórico perde o título, usa fonte menor e passa a ter altura equivalente a quatro linhas.
- A faixa inferior foi dividida em duas colunas: histórico à esquerda e HP / MP / XP / Gold à direita; o HUD deixa de cobrir o canvas.
- Painel lateral desktop reduzido para 248 px; abaixo de 981 px o layout responsivo volta a dar a largura inteira ao jogo. Botões ficam quadrados, somente por ícone, com identificação no hover via `title`/acessibilidade.
- Marcador de clique válido mantém a seta amarela animada em 2 ciclos, agora sem o retângulo de brilho ao redor.
- Cliques cujo destino/pathfinding fica bloqueado trocam imediatamente o marcador por um X vermelho.
- A barra de desenvolvimento não revela mais `/teleport AT-008` no placeholder; o comando continua implementado para uso do desenvolvedor.
- Build/PWA e metadado de exportação de save atualizados para v00159, sem mudança de schema.

# v00158 — Tela fixa, HUD compacto e identidade regional reforçada

- HUD de HP / MP / XP / Gold movido para o canto superior direito e reduzido para ocupar menos área útil do gameplay.
- Câmera de acompanhamento desativada nas telas externas; cada mapa agora é exibido inteiro e permanece fixo. A implementação de follow foi preservada no código atrás de `CAMERA_FOLLOW_ENABLED`.
- Entrada por pointer/click recalibrada para o novo enquadramento fixo, incluindo o offset lateral do mapa.
- Tiles e microdecoração agora respeitam o bioma regional: Altaria rochosa, Mornaqua arenosa/litorânea, Calindra densa, Solácia árida, Blazíria basáltica com lava e Necrovícia cinza/roxo devastada sem grama verde.
- Hitboxes de transição entre telas recebem aura amarelo-clara para indicar exatamente as zonas de saída.
- Clique no chão cria seta amarelo-clara com animação de sobe/desce por 2 ciclos.
- Corrigido o selo `NOVO` para não ser cortado visualmente como `OVO` em slots estreitos.
- Build/PWA atualizado para v00158, sem alteração de schema de save.

# v00157 — HUD, condições globais, localização no mapa e console de desenvolvimento

- Barra de HP / MP / XP / Gold reorganizada horizontalmente no rodapé da tela de jogo, com adaptação para mobile.
- Ciclo global de horário, clima, iluminação climática e agenda horária de NPCs neutralizado; o mundo permanece em condição diurna/ensolarada estável até a futura implementação por tela.
- Retrato do jogador reposicionado à esquerda das barras de HP / MP / XP na interface Personagem.
- Mapa do Mundo passa a exibir um pin amarelo com contorno preto, animado e vinculado à tela atual; interiores e dungeons legadas usam a entrada correspondente como âncora.
- Adicionada barra de comandos de desenvolvimento abaixo de Registro / Histórico.
- Implementado `/teleport AT-XXX` para teleporte direto de teste a qualquer código registrado, com validação do código e busca de posição caminhável segura.
- Build/PWA atualizado para v00157, sem alteração de schema de save e sem bibliotecas externas.

# v00156 — Interface Mapa do Mundo

- Novo botão quadrado 🗺️ ao lado de Inventário, sem transformar o mapa em side-view.
- Novo overlay `worldMapOverlay`, registrado no `UIStateManager`, com abertura, Fechar e cancel/Escape pela pilha existente.
- Geometria estática 20×17 derivada de `Overworld!A5:T21`: 105 células terrestres, 15 por região, vazios preservados como água.
- Visual de mapa-múndi RPG/pixel art com sete identidades regionais, costa, textura discreta e nomes únicos por região.
- Layout responsivo para desktop/mobile, com safe areas e sem scroll horizontal.
- Nenhuma mudança em save schema, progressão, combate, mapas locais, transições ou regras de gameplay.

# v00153 — V00146 Etapa 8: Content Validator e testes formais do mundo

- Adicionados `v00146-world-count-check`, `v00146-world-connectivity-check`, `v00146-region-layout-check` e `v00146-no-population-check`.
- Content Validator central agora valida também registry de mapas, 15 telas por região, 105 OVERWORLD, reciprocidade, layout macro e BFS 105/105.
- Diagnóstico por região: T1–T7 = 15/15; unreachable = 0.
- AT-001…AT-014 têm área e função original verificadas automaticamente.
- AT-015…AT-113 são auditadas contra NPCs, inimigos, TREE_NODES, minérios, plantas, baús, quests e tipos funcionais de mapa; população nova = 0.
- Corrigido efeito colateral real: existência geográfica de T2–T7 não libera mais progressão profissional sem conteúdo funcional da região.
- `v00146-overworld-plan-check` atualizado do estado planning para as telas já implementadas.
- Nova suíte agregada: `tests/v00146-world-suite.js` — 6/6 PASS.
- Versionamento do pacote/PWA atualizado para v00153.

# v000151 — V00146 Etapa 6: revisão geográfica global

- Mantidas exatamente 105 telas OVERWORLD e todos os IDs existentes.
- BFS global validado em 105/105; diagnóstico 15/15 para T1–T7.
- Transições do registry de planejamento sincronizadas com o runtime após os reroutes legados de Atenaria.
- 21 landmarks visuais curados (3/região) adicionados pelo `regionalSignaturePlan`, reutilizando `region-props` e static cache.
- 14 assinaturas visuais de fronteira misturam props das regiões adjacentes nas 7 costuras continentais.
- Validação física cobre todas as saídas das 105 telas e documenta a única assimetria de spawn legado AT-005↔AT-007.
- Nenhum NPC, inimigo, recurso, quest, construção, dungeon, baú ou recompensa novo.
- Novo teste: `tests/v000151-geography-review-check.js`.

# v000150 — Expansão estrutural v00150 / Etapa 5

- Implementadas as 15 telas OVERWORLD de Blazíria/T6 (AT-084…AT-098).
- Implementadas as 15 telas OVERWORLD de Necrovícia/T7 (AT-099…AT-113).
- Fronteiras continentais ativadas: AT-072 ↔ AT-096 (T5/T6) e AT-087 ↔ AT-099 (T6/T7).
- AT-072 recebeu somente a abertura norte necessária para a fronteira previamente planejada; restante de Solácia preservado.
- Registry central, locations, mapa físico, service worker e harness de testes atualizados.
- Nenhum NPC, inimigo, recurso coletável, minério, planta coletável, construção, dungeon, baú, quest ou recompensa novo foi criado.
- BFS global: 105/105 telas alcançáveis; 0 inalcançáveis. Content Validator: OK. Save compatibility: OK.

## v00147 — V00146 Etapa 2: expansão geográfica de Atenaria
- Implementa AT-015…AT-023 como 9 novas telas OVERWORLD T1, fechando Atenaria em 15.
- Preserva AT-001…AT-014 e todas as rotas legadas; corrige conflito do plano com a borda AT-012→AT-013.
- Reutiliza mapsLegacy, Terrain/Water/Vegetation 2.0, renderer, câmera, cache e mapConnections existentes.
- Prepara fronteiras AT-015→T3 e AT-017→T2 sem referências runtime para mapas ainda inexistentes.
- Adiciona validação automática `tests/v00147-atenaria-expansion-check.js`.

## v00106 — input abstrato, UI state e eventos internos
- `InputManager` unifica dispositivos em ações de gameplay.
- `UIStateManager` padroniza stack, fechamento e reset de overlays/contextos.
- `EventBus` publica eventos de progressão, quests, combate, exploração, coleta e drops raros; Diário/Achievements assinam os eventos.
- Testes `v00106-check.js` cobrem contratos e integrações.

## v00103 — modularização incremental, renderer por camadas e entidades centrais
- Criados módulos de domínio para `State/Save`, `World`, `Renderer`, `Input`, `Inventory`, `Quest`, `Gathering`, `Crafting`, `Battle` e `UI`, carregados antes de `main.js` e disponíveis por `CRPG.systems`.
- Persistência básica foi movida para `state-save.js`; operações centrais de inventário foram movidas para `inventory.js`. Os demais domínios possuem contratos registrados para migração gradual sem big-bang.
- Renderer reorganizado em sete camadas explícitas: terreno, cenário, recursos, entidades, efeitos, textos ingame e UI. Terreno e cenário possuem caches separados e dirty flags.
- Adicionado `entities.js`, com IDs estáveis, área, posição, sprite, footprint, interação, estado e origem. Player, NPCs, inimigos, árvores, minérios, arbustos e baús já são sincronizados na camada central.
- Novos testes `v00103-check.js` validam módulos, ordem das camadas, dirty flags, footprint de entidades e integração com cache offline.

# v00091 — Mobile contextual, HiDPI e cache de mapa

- Botão contextual inteligente no mobile, reutilizando `interact()`.
- Alvos touch maiores em batalha, inventário, overlays e controles.
- Canvas principal com backing store HiDPI e coordenadas lógicas estáveis em 1280×720.
- Escala de apresentação inteira/recíproca com letterbox controlado.
- Cache estático por área/estação para terreno, paredes, interiores e decoração imóvel.

# v00090 — Mobile UI 2.0

- Layout mobile próprio: canvas prioritário e painel inferior para Personagem, Skills e Inventário.
- Inventário vira bottom sheet em telas pequenas e pode expandir para fullscreen.
- Touch: toque seleciona item; toque longo ou botão Ações abre menu grande. Clique direito permanece no desktop.
- Controle móvel configurável entre D-pad e joystick virtual.
- Joystick usa Pointer Events, feedback visual, zona morta e converte entrada em passos tile-based.

# v00089 — Câmera responsiva 2.0

- Perfis responsivos calculados por tamanho/orientação de tela.
- Dead zone e look-ahead sutil sem alterar a posição lógica do jogador.
- Zoom configurável: Automático, 100%, 125%, 150% e 200%.
- Mundo 32×20 e TILE=60 preservados.
- Cutscene da Anciã Mira continua usando sua câmera especial.

# v00088 — Equipamentos, corpos de NPC e retrato procedural

- Equipamentos preservam silhueta-base por categoria e recebem microacabamentos internos por Tier (rebites, placas e highlights), sem alterar hitbox.
- NPCs recebem presets visuais reutilizáveis de criança, idoso, fazendeiro, mago, comerciante, guerreiro e compacto; transformações são ancoradas nos pés.
- A tela de Personagem agora mostra retrato procedural do jogador usando a mesma raça, pele, cabelo, roupa e equipamentos do mapa.
- TILE=60, grade 72×96, colisão, alcance e profundidade permanecem inalterados.

# v00087 — Personalização 2.0

- 8 estilos de cabelo: Curto, Comprido, Moicano, Careca, Cacheado, Preso, Raspado Lateral e Desarrumado, com leitura nas 4 direções.
- Cor de cabelo separada do estilo, com paletas raciais e default histórico preservado.
- Roupa-base ganha modelos Camiseta, Camiseta curta, Túnica e Camisa simples; Sem camiseta continua disponível.
- Botas recebem cano, highlight e sola contrastante; tiers mantêm silhueta e mudam paleta.
- Cache de ator inclui hairColor e shirtStyle; saves antigos migram para defaults seguros.

# v00086 — Silhuetas raciais 2.0

- Sete raças passam a usar perfis geométricos próprios sem alterar TILE/hitbox/âncora dos pés.
- Aviário: cabeça de ave, bico projetado em perfil, moicano de penas e braços emplumados.
- Reptiliano: focinho curto, narinas, olhos preservados e highlights de escamas.
- Orc: ombros/torso mais largos, cabeça/mandíbula maiores e postura pesada.
- Gnomo: corpo visualmente mais baixo/compacto, cabeça maior e passos menores.
- Goblin e Elfo recebem orelhas raciais que participam da silhueta frontal e de perfil.
- Roupas e equipamentos continuam usando as camadas existentes e a mesma âncora de equipamento.

## v00085 — Animações reais de atores e ações direcionais

- Caminhada do player agora usa 4 poses discretas por direção, com alternância real de pernas e braços, mantendo posição lógica e hitbox em tiles.
- Idle discreto para player e NPCs com respiração/postura lenta e piscada ocasional; redução de movimento congela esses micro-movimentos.
- Ataques corpo a corpo possuem preparação, golpe e recuperação; arma e braço compartilham a pose em vez de depender apenas de um slash sobreposto.
- Mineração e corte usam três poses por ação e respeitam frente, costas e perfis para posicionamento da ferramenta.
- Cache 72×96 foi ampliado para distinguir 4 frames de caminhada, idle e 3 frames de ação sem recompor durante redraw estável.
- `TILE=60`, colisão, alcance e timing lógico continuam inalterados.

## v00084 — Atores em alta densidade e cache de composição

- Formalizada grade lógica de autoria 72×96 para player/NPC, independente da hitbox de 60×60.
- Âncora visual nos pés, overflow documentado e ordenação por profundidade baseada na coordenada dos pés.
- Player/NPC passam a usar superfície composta fora da tela; redraw reutiliza frames em cache.
- Chave do cache do jogador considera aparência, direção, equipamento e frame de animação/ação.
- `TILE` permanece 60; colisão, interação e alcance não foram ampliados.

# TERROPIA v00082

- Arqueologia baseada em sítios de exploração, com artefatos e fragmentos de lore.
- Coleção/Museu físico simples em Carpinelli para registrar descobertas especiais.
- Mapas do tesouro como drops raros, com pistas textuais e baús que só surgem ao resolver a localização.
- Compatibilidade defensiva com saves anteriores.

# TERROPIA v00081

- Arquitetura futura de estações: calendário, paletas, tags de culturas e conteúdo sazonal desacoplados; sem destruição de plantações ou bloqueio de progresso.
- Alquimia: nova Skill com 4 elixires iniciais usando cogumelos, peixes, plantas e minerais.
- Encantamento: Safira, Esmeralda, Rubi, Diamante e Onyx lapidados aplicam um único bônus controlado por equipamento; pode remover/substituir.
- Magia: escolas Arcana, Gelo e Vital; novos feitiços de dano, controle e suporte, com runas para magia avançada.

## v00083 — Eventos, Dungeons e Pets
- Eventos dinâmicos opcionais em ciclos controlados: Slimes, minério enriquecido, árvore rara, mercador e criatura especial.
- Infraestrutura de dungeon estruturada com salas manuais, papéis distintos e pequena variação de rota na Expedição da Caverna.
- Pets cosméticos persistentes que seguem o jogador sem colisão; Petrúquio e Slimezinho inauguram a coleção.

## v00097 — performance, input e PWA
- Atlas/cache global expandido: inimigos, árvores, arbustos/recursos, minérios e baús estáveis são pré-renderizados e recompostos com `drawImage`; estados animados continuam dinâmicos.
- `OffscreenCanvas` progressivo via `js/render-cache.js`: microbenchmark local só escolhe o backend offscreen quando há ganho mensurável; canvas DOM permanece como fallback.
- Canvas principal migrado para Pointer Events unificados (mouse, toque e caneta), com clique primário, botão secundário e long-press; teclado preservado.
- Política de `touch-action`: jogo/D-pad/joystick bloqueiam gestos do navegador; painéis, listas e menus mantêm `pan-y` e scroll natural.
- PWA instalável com manifest, ícones 192/512, modo standalone e service worker com cache do shell e fallback de navegação.

## v00100 — offline, fullscreen/orientação e gamepad
- Cache offline essencial atômico e versionado por build (`terropia-v00100-*`), com remoção de caches Terrópia anteriores na ativação para evitar mistura entre versões.
- Navegação inicia offline após a primeira instalação bem-sucedida do service worker; assets essenciais usam cache-first e assets adicionais ficam em runtime cache da mesma versão.
- Tela cheia opcional com API padrão e fallback WebKit; ausência da API não impede o jogo.
- Recomendação móvel de orientação landscape em portrait, dispensável e sem bloquear portrait; lock só é tentado após ação explícita e possui fallback textual.
- Gamepad API opcional: analógico/D-pad para movimento, A para interação, atalhos para inventário/níveis/equipamento e mapeamento dedicado de ações/abilidades em batalha.
- Prompts contextuais de gamepad aparecem apenas enquanto um controle é detectado.

## v00109 — conteúdo declarativo, validação e mobile
- NPCs, inimigos/drops, nós de árvores/minérios/berries/baús e metadados do registro de quests migrados gradualmente para `data/content.js`; `main.js` interpreta/clona esses dados e mantém callbacks de gameplay.
- Conexões de mapa dirigidas foram declaradas para permitir validação de retorno bidirecional e acessibilidade de saídas.
- Novo `tests/content-validator.js` detecta IDs duplicados, NPC sobre recurso, inimigo em objeto/tile bloqueado, saída inacessível, item inexistente, quest com NPC inexistente, conexão sem retorno e recurso fora dos limites.
- Novos testes mobile cobrem 360×800, 390×844, 412×915, 768×1024, 1280×720 e 1600×1000, verificando overflow, ações cortadas, overlays, D-pad, escala/proporção do canvas e smoke de runtime.
- Corrigido overflow do canvas/D-pad em 1280×720 com ponteiro coarse.

## v00110 — SaveStorage preparado para crescer
- Persistência de saves passa por `CRPG.systems.stateSave.createSaveStorage`, mantendo `localStorage` como backend atual e um contrato assíncrono compatível com futura adoção de IndexedDB.
- Exportação manual de save em JSON com envelope versionado; importação aceita envelope Terrópia ou save JSON cru validado.
- Toda migração de versão cria backup recuperável antes de transformar o estado; importações que sobrescrevem um personagem também preservam a cópia anterior.
- Backups têm timestamp, origem, motivo e payload cru, evitando migrações destrutivas sem recuperação.


## v00111 — Hierarquia visual do mundo
- Microdecorações recuam de recursos, NPCs, inimigos e áreas interativas.
- Alpha ambiental reduzido para preservar contraste local.
- Jogador recebe grounding/edge neutro discreto.
- Outline de inimigos foi normalizado: fino para comuns, reforçado para bosses.
- Adicionados testes de hierarquia e documentação visual v00111.


## v00112 — Iluminação ambiental e hora do dia
- Perfis visuais de manhã, dia, entardecer e noite ligados ao relógio existente.
- Interiores, cavernas e regiões especiais recebem tratamento próprio.
- Luzes locais leves para fogueiras, fogão, forja e janelas à noite.
- Iluminação usa faixas/halos pixelados sem blur ou filtros caros.
- Textos ingame e UI permanecem fora do tratamento ambiental.


## v00113 — Água 2.0
- Profundidade visual rasa/média/profunda inferida apenas da vizinhança.
- Ondas e highlights animados com offsets determinísticos por tile.
- Espuma contextual nas margens expostas.
- Frames de overlay reutilizados em cache e desenho restrito à viewport.
- Colisão, pesca e water tiers permanecem inalterados.


## v00114 — Vegetação com mais vida
- Árvores recebem variações determinísticas sutis de tonalidade mantendo as quatro silhuetas existentes.
- Grama decorativa ganha pequenas variações determinísticas de inclinação/altura.
- Copa, arbustos, grama e flores recebem movimento ambiental mínimo via frames compartilhados.
- Tocos não animam; dano e estados de recurso permanecem visualmente claros.
- Novo `js/vegetation-visuals.js` com cache/atlas compacto e respeito a reduced motion.


## v00115 — Terreno 2.0
- Novo `js/terrain-visuals.js` para variantes e detalhes determinísticos.
- Grama, terra, pedra e terreno denso recebem microdetalhes esparsos e contextuais.
- Bordas do autotile ganham pequenas variações determinísticas sem alterar máscaras/conectividade.
- Caminhos permanecem mais limpos para preservar entradas e leitura de navegação.
- Tudo permanece integrado ao cache estático de terreno; gameplay e colisões não mudam.


## v00116 — Sombras 3.0, batalha desktop e interiores fixos
- Sombras padronizadas com contato mais firme e projeção pixelada leve para objetos altos.
- Batalha desktop-first com card amplo e botões com ícone + texto visível.
- Interiores passam a palco fixo 1280×720 sem movimento de câmera.
- Casa, ferreiro, banco e loja tiveram objetos/NPCs reposicionados para o novo crop.


## v00117 — Indicador contextual e correção de árvores
- Um único alvo prioritário recebe destaque contextual discreto.
- Prompt adapta-se ao último dispositivo do InputManager: teclado, touch, pointer, D-pad/joystick ou gamepad.
- Itens no chão podem ser coletados pelo `interact` abstrato quando adjacentes.
- Árvores 2×2 tiveram copa, tronco, sombra e atlas realinhados; coqueiros também foram corrigidos.
- Footprints, colisões e gathering permanecem inalterados.


## v00118 — Gathering VFX e banco
- VFX específicos para corte, mineração, pesca, colheita e coleta.
- Pool fixo de 72 partículas reutilizáveis, com redução de movimento.
- Recursos raros recebem accents curtos e discretos.
- Banco normaliza itens por tipo: cada tipo ocupa um único slot com quantidade acumulada.
- Migração de saves preserva quantidades agrupadas no banco.


## v00119 — Combat VFX 2.0
- Linguagens visuais distintas para físico, ranged, magia, defesa, cura e status.
- Antecipação e recoil leves, sem alterar balanceamento.
- Críticos recebem burst ampliado e hit-stop visual curto.
- Habilidades importantes recebem telegraph reforçado.
- Pool de 64 partículas e suporte a reduced motion.
- Implementado `telegraph()` que já era chamado pelo fluxo de inimigos especiais.


## v00120 — Damage Numbers 2.0
- FloatingTextManager central para dano, crítico, cura, bloqueio, miss, XP, itens e status.
- Agrupamento temporal e lanes evitam sobreposição excessiva.
- Pixel snapping em todos os textos flutuantes.
- Mundo desenha textos exclusivamente na camada ingameText; batalha reutiliza o mesmo manager.

## v00121 — UI Design System
- Criada camada normativa `css/v00121.css` com tokens centrais de cor, espaçamento, bordas, sombras, tamanhos e tipografia.
- Painéis, headers, botões, tabs, tooltips, scrollbars, slots e subpainéis foram padronizados.
- Inventário, banco, loja, quests, crafting, níveis, equipamentos, diário e batalha agora compartilham a mesma linguagem visual.
- Estados hover, focus-visible, pressed, selected/active e disabled foram unificados.
- Desktop permanece referência; mobile conserva o mesmo design system com spacing menor e tabs roláveis.


## v00122 — HUD 2.0
- HUD permanente reduzido para HP/MP primários e faixa secundária compacta.
- XP/nível e ouro deixam de ocupar espaço no HUD mobile.
- Buffs e imunidades aparecem somente enquanto ativos.
- Safe areas aplicadas ao HUD e controles touch.
- Removidos anéis grandes e backdrop blur do HUD permanente.


## v00123 — Inventário e itens 2.0
- Estados visuais unificados entre inventário, banco, equipamento, loja e crafting.
- Quantidade padronizada como ×N; raridade continua usando símbolo + texto.
- Estados NOVO, EQUIP., SELECT, INDISP. e BLOQ. não dependem apenas de cor.
- Tooltips de equipamentos passam a mostrar comparação curta com o item equipado.


## v00124 — Diálogos 2.0
- Hierarquia unificada de retrato, nome, função, texto e ações.
- Banco passa a usar retrato do NPC e linguagem comum de diálogo.
- NPCs importantes recebem moldura/acento discreto; linha principal ganha identificação sutil.
- Balões no mundo mostram nome do falante e indicador de continuidade.
- Entrada/saída discretas com fallback e reduced-motion.
- Mobile limita altura do diálogo e ancora ações sem esconder toda a área jogável.


## v00125 — Identidade regional
- Perfis declarativos para as sete regiões: materiais, vegetação, terreno, arquitetura, props, iluminação e composição.
- Paletas de terreno passam a responder à região sem alterar IDs ou colisões.
- Props da biblioteca regional v00068 são usados deterministicamente na camada estática, respeitando zonas de respiro.
- Densidade e silhuetas diferem por região; a diferenciação não depende apenas de recolor.


## v00126 — Construções e interiores 3.0
- Fachadas reforçadas por materiais, silhueta e sinalização pictográfica sem texto.
- Perfil visual de guilda preparado para uso futuro, sem criar mapa/gameplay.
- Storytelling dos quatro interiores reposicionado para o palco fixo 1280×720 da v00116.
- Casa, ferraria, banco e loja recebem props ambientais mais funcionais, todos visual-only.
- Footprints, colisões, entradas, NPCs e lógica permanecem intactos.


## v00127 — Ambient Animation System
- Sistema ambiental central com quatro clocks globais compartilhados.
- Pool fixo de 36 partículas e atlas de frames para bandeiras/brilhos/brasas.
- Perfis regionais contextuais para fumaça, poeira, insetos, folhas, névoa e brasas.
- Chaminés, fogueiras, forja e props regionais alimentam âncoras reais.
- Nova opção Ambiente animado: desligado, reduzido ou normal.
- Água, vegetação e fogo respeitam a opção e reduced-motion.


## v00128 — Camera Polish
- Smoothing discreto sobre a dead-zone existente, com snap para deslocamentos grandes.
- Transições pixeladas curtas ao entrar em outra área.
- Foco temporário para conclusão de quest e bosses, sem alterar coordenadas de gameplay.
- Micro-impacto limitado em bosses/drops raros; sem shake contínuo.
- Interiores permanecem rigidamente fixos no crop 1280×720.
- Todos os efeitos respeitam reduced-motion e pixel snapping.


## v00129 — Battle Presentation 2.0
- Battle scene recebe região/bioma além da área de origem.
- Fundo, arena e combatentes passam a ter planos visuais mais separados.
- Grounding, turno ativo, defesa e status ficam legíveis diretamente no palco.
- Habilidades importantes e especiais de bosses recebem staging curto.
- Ações/abilities têm seleção e disponibilidade mais claras no desktop-first layout.
- Regras, dano, turnos, cooldowns e balanceamento permanecem intactos.


## v00130 — Reward Presentation
- Fila visual não-modal para rare drops, quests, nível, skills, descobertas e conquistas.
- Raridade comunicada por moldura, símbolo, rótulo e efeito curto — não apenas cor.
- Rare drop só interrompe com modal quando o item ficou no chão por falta de espaço.
- Descobertas comuns agora usam feedback curto e registro no Diário em vez de modal obrigatório.
- Antigo popup separado de skill level deixa de ser disparado para evitar duplicação.


## v00131 — Acessibilidade visual
- Auditoria de contraste, foco, controles, movimento, telas pequenas e estados dependentes de cor.
- Focus-visible de alto contraste e área mínima de controles (40 px desktop / 44 px mobile).
- Contraste aumentado agora é localizado na UI e não filtra/recolore o canvas inteiro.
- Raridade, equipado/novo, disabled, barras e reward status recebem sinais redundantes.
- Floating text ganhou prefixos semânticos para dano, crítico, cura, bloqueio, miss, XP, item e status.
- Nova opção Texto ingame reforçado.
- Reduced-motion remove sparks/pulsos adicionais; intensidades de partículas/ambiente permanecem configuráveis.


## v00132 — Visual Regression Suite
- 72 baselines determinísticos: 12 cenas × 6 viewports.
- Cobertura de mundo, interiores, batalha, inventário, banco, loja, quests, crafting, diálogo e criação.
- Comparação por pixel com tolerância de 3,5% e threshold de canal 28.
- Checks estruturais para clipping, escala/proporção do canvas, pixel rendering, HUD e D-pad.
- Baselines só mudam com `--update`; filtro por cena disponível com `--scene`.
- A suíte identificou clipping pré-existente de três botões da loja em 360×800 e 390×844; o problema permanece explicitamente sinalizado em vez de ser mascarado pelo baseline.


## v00133 — Progression Foundation
- Definições das 11 skills centralizadas em `data/skills.js` com cap, categoria, curva de XP, milestones e relações.
- Novo `RequirementSystem` para skill, quest, item, área, equipamento, mastery e flags; suporta all/any/not e explicações legíveis.
- Curva de XP atual permanece exatamente `15 + level * 5`; nenhum rebalanceamento nesta versão.
- Tiers Ferro → Mithril → Platina → Ouro → Rubi → Diamante → Onyx preservados integralmente.
- Primeiras migrações para a API: mineração, pesca, ferraria, equipamento, entrada de áreas e quest de Geraldo.
- Save schema de skills/mastery preservado; teste explícito de compatibilidade com save v132 adicionado.


## v00134 — Skill Guide & Unlock Registry
- Novo `data/unlocks.js` centraliza desbloqueios reais por skill/nível.
- Tela de skills virou guia de planejamento com XP, próximo unlock, milestones, recursos, receitas, equipamentos, áreas/atividades e Masteries.
- Conteúdo que depende de ferramenta, e não de nível, aparece como relacionado sem inventar requisito.
- Alquimia passa a aparecer na lista completa de habilidades.
- Habilidades de combate, Farming e Alquimia registram seus unlocks no registry em runtime, junto às definições existentes.
- Level-up usa o mesmo Unlock Registry e informa exatamente os desbloqueios obtidos.


## v00135 — Progressão de XP 2.0
- Curva linear substituída por curva progressiva suave: `round(16 + 2.1*level + 0.75*level^1.62)`.
- XP até 60 passa de ~9,7k para ~17,4k, mantendo escala apropriada para single-player.
- Tabela declarativa estima ~58–81 ações representativas por faixa de 10 níveis.
- Save version passa a 44; migração preserva nível e percentual exato de progresso da barra anterior.
- Backup pré-migração existente continua ativo.
- Nenhum tier, requisito, recurso, receita ou milestone foi alterado.


## v00136 — Gathering Requirements 2.0
- Requisitos de Mineração, Corte, Pesca e Plantação centralizados em `data/gathering-requirements.js`.
- Skill level passa a ser a trava de conteúdo; tier da ferramenta passa a ser eficiência/recomendação.
- Mineração e Corte não exigem mais ferramenta do mesmo tier do recurso; qualquer ferramenta válida do tipo correto funciona quando o nível atende.
- Woodcutting recebe progressão declarada 1/5/10/15/20/30/40 para os sete recursos existentes.
- Pesca e Plantação usam a mesma API de requisitos.
- Mensagens bloqueadas mostram recurso, nível necessário/atual e ferramenta recomendada.
- Skill Guide passa a refletir os novos milestones reais de Corte.


## v00137 — Cadeias de produção 2.0
- Novo `ProductionChainRegistry` formaliza origem → processamento → uso para metal, madeira, pesca, farming e gemas.
- Tooltips e cards de Ferraria/Artesanato/Alquimia mostram a cadeia produtiva de forma compacta.
- Plantação passa a alimentar Alquimia: Tomate no Elixir de Defesa e Milho no Elixir de Coleta.
- Níveis continuam deliberadamente escalonados; gathering normalmente antecede production e uso.
- Resource sinks avançados já existentes passam a ter testes: lã em arcos, penas em flechas, Mithril em amuletos finais e Platina em barras especiais.
- Nenhum tier ou conteúdo existente foi removido.


## v00138 — Skill Mastery 2.0
- Mastery mantém cap 20 e passa a usar milestones declarativos M5/M10/M15/M20.
- Bônus contínuos antigos de XP/yield por nível foram substituídos por recompensas pequenas e legíveis.
- Gathering recebe XP, rendimento, perfect/qualidade e especialização contextual.
- Mastery 20 de Plantação pode recuperar a semente em 1%; Mineração/Corte recebem +1% de descoberta contextual.
- Skill Guide mostra próximo benefício e benefícios ativos por Mastery.
- Milestones disparam feedback específico no log/notice.


## v00139 — Skill Perks 2.0
- Milestones de pontos permanecem em 10, 25 e 40.
- Todas as 11 skills passam a ter exatamente três perks comportamentais.
- Bônus genéricos antigos deixam de dirigir os perks; `perkBonus()` permanece apenas como fallback neutro de compatibilidade.
- Mineração recebe momentum de Ação Perfeita, gemologia e preservação de veio.
- Pesca recebe leitura de ecossistema, preservação de isca e interação com clima.
- Culinária recebe porção extra, ritmo de preparo e buffs mais duradouros.
- Ferraria/Artesanato ganham ritmo, recuperação pequena de material e especialização de Mastery.
- Combate/Arquearia/Magia recebem comportamentos situacionais em defesa, munição, runas e habilidades.
- Primeiro reset por skill é gratuito; seguintes custam 100 ouro.
- Saves antigos convertem picks antigos para os novos IDs de forma determinística.

- Save version passa a 45 para preservar/migrar escolhas antigas e contagem de resets.


## v00140 — Skill Checks em quests
- Novo `data/quest-skill-checks.js` com checks declarativos ligados ao `RequirementSystem`.
- Diálogo de proposta mostra opções no formato `[Skill nível] ação`, incluindo checks bloqueados discretamente.
- Rotas de skill podem reduzir objetivos secundários sem remover a rota narrativa normal.
- Missão inicial da Anciã Mira ganha atalho opcional de Culinária 3: 2 slimes em vez de 3.
- Sidequest da Bruxa aceita Magia 10 ou rota alternativa selecionada de Alquimia 10.
- Alfredo, Joaquim, Jordan e Gnomo Júlio recebem rotas que reduzem quantidades de coleta de forma moderada.
- Heitor, Clarisse e Geraldo recebem checks narrativos sem substituir seus objetivos principais.
- Jordan e Bruxa passam a usar `RequirementSystem` nas verificações de skill.
- `questSkillRoutes` é persistido; save version passa a 46.


## v00141 — Linhas de sidequests de habilidades
- Novo `data/profession-quests.js` define carreiras opcionais para 8 skills de gathering/production.
- Cada carreira possui mentor e 4 estágios: Aprendiz, Praticante, Especialista e Mestre.
- Progressão usa milestones amplos (5, 15–20, 30–35, 45–50), sem quest por nível.
- Progresso de gathering conta recursos coletados após aceitar; produção conta receitas efetivamente concluídas.
- Quest log recebe seção de Carreiras Profissionais com mentor, região, requisito, progresso e recompensa.
- Etapas de regiões ainda não implementadas aparecem bloqueadas e não inventam acesso ao conteúdo futuro.
- Conclusões concedem XP temático e unlock profissional persistente; Mestre concede título cosmético.
- Carreiras não entram em requisitos da campanha principal.
- Save version passa a 47 e persiste `professionQuests`, `professionStats`, `professionUnlocks` e `professionTitles`.


## v00142 — Projetos permanentes do mundo
- Novo `data/world-projects.js` define 6 projetos opcionais declarativos com skill, quest, recursos e ouro.
- Conclusão consome recursos imediatamente, salva em `completedProjects` e registra unlock em `worldProjectUnlocks`.
- Event Bus emite `worldProjectCompleted` e o projeto chama `save()` imediatamente via SaveStorage.
- Quest log recebe seção de Projetos do Mundo com requisitos, recursos, ouro e recompensa.
- Projetos concluídos alteram visualmente o mapa com overlays pixel-art permanentes sem modificar colisões.
- Moinho reparado reduz preparo culinário em 5%; Ferraria melhorada reduz forja em 5%; cais concede +3% de captura em Atenaria.
- Mentores reconhecem projetos concluídos em diálogo.
- Save version passa a 48; projetos permanecem totalmente opcionais para a campanha.

## v00143 — Contratos profissionais
- Novo `data/professional-contracts.js` define 24 contratos curtos: 3 por cada uma das 8 skills de gathering/production.
- Contratos são divididos em conjuntos de 8; concluir 4 renova o conjunto sem exigir todas as profissões.
- Renovação usa progresso narrativo/conclusão de conjunto, nunca relógio real ou daily reset.
- Objetivos suportam entrega, gathering após aceite e produção após aceite.
- Recompensas concedem XP da própria skill, ouro moderado e item útil ocasional.
- Repetições pagam 70% do XP e 85% do ouro e não repetem o item bônus, evitando farm universal dominante.
- Event Bus recebe `professionalContractAccepted`, `professionalContractCompleted` e `professionalContractSetRenewed`.
- Estado persiste em `professionalContracts`; aceitar/cancelar/concluir usam o SaveStorage existente.
- Save version passa para 49.


## v00144 — Economia das skills e Resource Sinks
- Novo `data/economy.js` audita 58 recursos/materiais com fonte, requisito, XP, receitas, quests, venda, usos permanentes, contratos e tier.
- Relatório `ECONOMY_AUDIT_v00144.md` diferencia fonte ausente de conteúdo regional futuro.
- Auditoria final: 0 recursos sem fonte declarada, 0 sem uso e 0 sem sink; 14 dependem de fontes/regiões futuras e 8 permanecem como alerta de uso único.
- Cenoura passa a integrar o Elixir Antídoto.
- Fazenda Oeste passa a consumir Cenoura e Batata; Ruína da Floresta passa a consumir Seda de Aranha, Asa de Morcego, Núcleo de Slime e Pó Arcano.
- Teste de grafo detecta ciclos de produção impossíveis.
- Tiers Ferro → Mithril → Platina → Ouro → Rubi → Diamante → Onyx preservados.
- Save version passa a 50; nenhum campo destrutivo novo é exigido.


## v00145 — Conteúdo de mestre e endgame das skills
- Novo `data/skill-endgame.js` com 56 conteúdos opcionais de nível 40–60.
- Suporte declarativo a quests de mestre, áreas opcionais, receitas especiais, encontros profissionais, ferramentas avançadas, cosméticos, coleções, achievements e Mastery Challenges.
- Integração com Unlock Registry/Skill Guide.
- Todos os conteúdos possuem `mainCampaignRequired:false` e `powerBudget:'sidegrade'`.
- Receitas de mestre reutilizam recursos de tiers anteriores para reduzir obsolescência.
- Diamante e Onyx permanecem tiers finais existentes; nenhum Tier 8 foi criado.
- Testes específicos protegem campanha principal, variedade de endgame e power creep.
- Save version 51.


## v000148 — v00146 Etapa 3/10
- Implementadas Altaria T2 (AT-024–AT-038) e Mornaqua T3 (AT-039–AT-053), 15 OVERWORLD cada.
- Fronteiras AT-017↔AT-024 e AT-015↔AT-052 ativadas.
- Registry central, locations, conexões, cache PWA e planejamento atualizados.
- Nenhum gameplay/população nova nas regiões.
- Adicionado teste de traversal parcial das 45 telas T1–T3.

## v000149 — v00146 Etapa 4/10
- Implementadas Calindra/T4 (`AT-054`…`AT-068`) e Solácia/T5 (`AT-069`…`AT-083`), 15 OVERWORLD cada.
- Ativadas fronteiras T3↔T4 (`AT-042`↔`AT-054`), T2↔T4 (`AT-036`↔`AT-068`) e T4↔T5 (`AT-057`↔`AT-069`).
- Total parcial T1–T5: 75 OVERWORLD; T6 permanece sem link runtime.

## v000152 — Etapa 7/10 — Planilha de mapeamento v41
- Gera `Mapa_Mundo_COMMON_RPG_v41.xlsx` a partir da v40, sincronizada com as 105 telas OVERWORLD atuais.
- Preserva Construções/Dungeons e o conteúdo legado AT-001…AT-014.
- Atualiza Catálogo até AT-113 e próximo código livre para AT-114.
- Nenhuma alteração de gameplay ou de IDs.


## v00154 — World Expansion Etapa 9
- QA técnico das 105 telas; 14 renders determinísticos de topologia em `tests/world-qa-v00154/`.
- Static terrain/scenery cache agora é lazy e limitado a 12 áreas por camada com eviction.
- Novo `tests/v00154-world-qa-check.js` e `CRPG_WORLD_CACHE_STATS()`.
- SaveStorage/migração e traversal 105/105 validados.


## v00146 — Expansão estrutural do mundo de Terrópia — entrega final
- Auditoria final aprovada: 7 regiões × 15 telas = 105 OVERWORLD; BFS 105/105.
- Planilha final sincronizada como `Mapa_Mundo_COMMON_RPG_v41.xlsx`; correção documental AT-012 → AT-013 na direção Leste.
- Relatório consolidado `WORLD_EXPANSION_v00146.md`.
- Metadados de release (`index.html`/service worker) alinhados à versão final v00146.

## v00163 — Invérnia / novo Tier 4
- Adiciona Invérnia (15 telas, AT-114…AT-128) ao norte de Altaria.
- Insere Prata, Jade, Pinheiro Gelado e Peixe-Espada como recursos T4.
- Adiciona equipamentos/armaduras de Prata via sistema de gear por material.
- Desloca Calindra/Níveis posteriores para T5–T8.
- World Map passa a ter 8 regiões / 120 telas.
- Planilha do World Map passa a ser artefato obrigatório dentro do ZIP.
