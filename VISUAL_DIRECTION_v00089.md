# Direção visual — v00089

## Câmera responsiva 2.0
O mundo permanece 32×20 com `TILE=60`. A câmera altera apenas o viewport lógico mostrado dentro do canvas 1280×720.

### Zoom
- Automático: escolhe 100%, 125% ou 150% conforme largura, altura e orientação; telas muito pequenas podem usar enquadramento mais próximo.
- Manual: 100%, 125%, 150% e 200%.
- `imageSmoothingEnabled=false` permanece ativo durante o transform da câmera.

### Seguimento
A câmera usa uma dead zone pequena em torno do jogador. Movimento dentro dela não recenteriza o quadro. Durante caminhada existe look-ahead sutil na direção atual, amortecido e limitado pelas bordas do mapa.

### Cutscene
A câmera especial da Anciã Mira mantém precedência sobre zoom/dead-zone normais, preservando o comportamento cinematográfico existente.
