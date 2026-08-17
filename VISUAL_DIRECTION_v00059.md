# Terrópia — Direção visual v00059

> **HISTÓRICO.** Este documento registra uma etapa anterior e não é mais referência normativa. Para as regras vigentes, consulte `VISUAL_BIBLE.md`.

## Escala de tela

- Resolução do canvas preservada em **960×600 px**.
- Tile visual aumentado de **30×30 para 40×40 px**.
- Viewport passa a exibir **24×15 tiles** por tela, em vez de 32×20.
- O mapa lógico continua **32×20 tiles**; uma câmera acompanha o jogador e revela o restante do cenário.

## Itens

- Grade lógica dos ícones aumentada de **24×24 para 32×32 px**.
- Todo item usa a mesma biblioteca entre inventário, banco, equipamentos, crafting, tooltips e mundo.
- O desenho continua pixelado, mas com maior densidade, micro-highlights e melhor leitura de silhueta.
- Itens dropados ocupam mais área visual dentro do tile e permanecem centralizados.

## Personagens

- Player e NPCs foram ampliados para acompanhar o novo tile.
- Caixas retangulares grandes foram substituídas por volumes com **cantos em degraus**, reduzindo a sensação de blocos quadrados.
- Rosto, roupa e highlights recebem pixels adicionais de detalhe.
- Inimigos também foram ampliados proporcionalmente para não perder presença visual.

## Regras preservadas

- Perspectiva lateral/3/4.
- Luz principal superior-esquerda.
- Sem alteração de mapas lógicos, colisões, hitboxes, quests, stats ou schema de save.
- Coordenadas de clique são convertidas da viewport para o mundo usando o offset da câmera.
