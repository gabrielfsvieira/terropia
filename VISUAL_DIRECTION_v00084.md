# Terrópia — Direção Visual v00084

## Contrato de atores

A v00084 formaliza o sprite visual de player/NPC como uma camada independente da hitbox. O `TILE` permanece em **60 px** e colisão/interação continuam ocupando um único tile.

A grade lógica de autoria é **72×96 px por frame**. A âncora é definida nos pés (`36,72` dentro da grade lógica), com altura corporal máxima de 92 px. Elementos visuais podem ultrapassar a grade para cabelo, armas, ferramentas e efeitos: até 18 px à esquerda/direita e 8 px acima/abaixo. A superfície técnica de composição inclui esse overflow e não altera gameplay.

### Profundidade

A ordenação visual usa a coordenada dos **pés**. Atores mais ao sul são desenhados depois de atores ao norte; em empate, NPCs, inimigos e jogador usam ordem estável. Altura do cabelo, arma ou qualquer overflow não participa da profundidade.

## Autoria em maior densidade

O espaço de 72×96 deve ser usado para preservar leitura de rosto, cabelo, raça, roupa, mãos e equipamentos. O objetivo não é aumentar novamente o tile, mas permitir silhuetas mais detalhadas sobre o mesmo grid de mundo.

## Cache de composição

O player é composto fora da tela e reutilizado no redraw. A chave considera raça/aparência, direção, equipamento, ação/ferramenta e frame discretizado de animação. Um novo frame só é composto quando uma dessas dimensões muda. O cache é limitado para não crescer indefinidamente.

NPCs usam a mesma infraestrutura de frame composto para reduzir redraw procedural repetido.
