# Direção visual — v00128

## Camera Polish

A câmera mantém a dead-zone e look-ahead existentes; a v00128 adiciona apenas polish visual.

- Correções externas usam smoothing curto e discreto.
- Diferenças acima de 150 px fazem snap imediato para evitar atraso após teleporte/entrada.
- A posição final da câmera é sempre arredondada antes da transformação (`Math.round`) para preservar pixel snapping.
- Interiores da v00116 continuam com zoom 1 e câmera fixa, sem smoothing/foco.
- Mudança de área dispara um fade pixelado curto de 260 ms.
- Eventos importantes podem usar foco temporário de até ~650 ms e zoom máximo de 1.08.
- Feedback de impacto é limitado a 4 px / 160 ms; usos atuais ficam em 2–3 px.
- Não há blur, filtro ou screen shake contínuo.

`Redução de movimento` / `prefers-reduced-motion` desativam smoothing adicional, transição, foco e impacto.
