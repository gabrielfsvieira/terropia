# Terrópia — Direção Visual v00057

> **HISTÓRICO.** Este documento registra uma etapa anterior e não é mais referência normativa. Para as regras vigentes, consulte `VISUAL_BIBLE.md`.

Esta é a referência única para arte de gameplay a partir da v00057. Mudanças futuras devem seguir estas regras antes de criar exceções. O objetivo é fazer personagem, criatura, recurso, construção e efeito parecerem parte do mesmo mundo sem alterar lógica, hitbox ou colisão.

## 1. Câmera e linguagem de forma

- Perspectiva-base: **lateral/3/4**. Personagens e animais leem primeiro como perfil/lateral, mas exibem uma face superior ou frontal curta para comunicar volume.
- Construções usam fachada 3/4 simplificada: telhado em degraus, face frontal dominante e pequenas superfícies laterais quando necessárias.
- Evitar círculos, elipses, curvas antialiasadas e formas com aparência vetorial em arte de gameplay. Preferir degraus de pixels e retângulos inteiros.
- UI pode usar cantos arredondados e tipografia normal; a restrição é para sprites, mundo e VFX dentro do jogo.

## 2. Grid, proporções e silhueta

- Toda arte é desenhada em **pixels lógicos inteiros**. Não introduzir detalhes menores que 1 px lógico.
- Jogador/NPC adulto: referência de aproximadamente **46–50 px lógicos de altura** em escala 1; cabeça 15–18 px, torso 14–16 px e pernas 10–12 px.
- Personagens menores reduzem a silhueta inteira; não encurtar apenas braços/pernas de forma isolada.
- Animais quadrúpedes mantêm o eixo principal horizontal para leitura de perfil; cabeça, corpo e patas devem formar uma única silhueta clara.
- Equipamentos de um mesmo tipo mantêm a mesma geometria entre tiers. Tier/material muda cor e pequenos detalhes, não hitbox visual nem tamanho funcional.

## 3. Iluminação

- Fonte de luz global: **canto superior esquerdo**.
- Highlights: topo e arestas esquerdas.
- Sombras do material: base, lado direito e faces inferiores.
- Sombra projetada/de contato: deslocamento visual para **baixo/direita**.
- Não inverter a direção da luz para “embelezar” um sprite isolado.

## 4. Outlines

- Sprite pequeno: outline de **1 px lógico** em tom neutro profundo ou no tom mais profundo do material.
- Objetos maiores podem modular a borda em blocos maiores para manter peso visual, sem blur.
- Bordas internas usam o deep/shadow do próprio material; o outline mais escuro fica prioritariamente na silhueta externa.
- Contorno laranja/vermelho de inimigo é uma exceção funcional de leitura de estado e pode ficar externo à paleta do sprite.

## 5. Cor e rampas

Cada material deve partir de uma rampa de **4 tons**:

1. `deep` — cavidades/arestas internas mais escuras;
2. `shadow` — faces inferiores/direitas;
3. `base` — cor dominante;
4. `highlight` — topo/esquerda.

O outline é adicional. Assim, um material completo usa no máximo **5 cores locais**. Elementos minúsculos podem usar menos tons, mas não devem inventar tons extras sem função. Transparência branca/preta para “fabricar” highlight em sprites deve ser evitada; derive o tom da própria paleta.

## 6. Sombras

- Personagens, itens e recursos usam **sombra de contato em dois níveis**: bloco escuro menor + bloco suave maior, ambos pixelados.
- Sem blur, radial gradient ou elipse suavizada em arte de gameplay.
- A sombra comunica assentamento no chão, não uma fonte de luz independente.

## 7. Materiais e tiers

Famílias metálicas/gemas devem ser compartilhadas entre minério, equipamento e detalhes de mundo:

- Ferro: cinza neutro frio.
- Mithril: azul metálico.
- Platina: cinza claro frio.
- Ouro: amarelo-ocre metálico.
- Rubi: vermelho mineral.
- Diamante: azul-cinza muito claro.
- Ônix: carvão quase preto.

Ao criar um novo objeto do mesmo material, reutilize a família existente antes de adicionar uma nova cor.

## 8. Construções, recursos e interiores

- Fachadas: telhado em degraus + parede em rampa de 4 tons + base sombreada + porta/janelas com outline.
- Entrada de caverna: rocha em blocos, cavidade profunda e luz na aresta superior-esquerda.
- Minérios: aglomerados facetados em degraus, usando a mesma rampa do tier correspondente.
- Cercas: travessas e postes inteiros, outlines/deep nas bordas inferiores/direitas; versão quebrada continua reconhecível sem strokes diagonais suavizados.
- Interiores: móveis e estações de trabalho seguem os mesmos volumes em blocos; forja/fogão/bigorna/cofre/prateleira não usam elipses vetoriais.
- Itens dropados: ícones pixelados por família; não usar emoji como sprite de mundo.

## 9. VFX e marcadores

- Impactos e auras de batalha usam anéis/estouros feitos por blocos de pixels, não `arc()`/elipses suavizadas.
- Marcadores de missão no mundo usam geometria pixelada.
- Texto de dano/XP pode ser tipográfico, mas deve usar fonte de leitura nítida/monoespaçada e contorno quando necessário.

## 10. Regra de segurança de gameplay

**Arte nunca redefine lógica.** Ao redesenhar um elemento:

- não alterar coordenadas lógicas `x/y`;
- não alterar footprint `w/h` usado pelo mapa;
- não alterar `walkable`, `oreOccupies`, movimento, interação ou gatilhos;
- não alterar dados de mapas/recursos/receitas/equipamento para resolver um problema apenas visual;
- a arte pode ultrapassar visualmente a célula quando isso já é compatível com a câmera, mas a colisão permanece a existente.

A v00057 valida essa separação comparando hashes de dados e de rotinas críticas contra a v56.
