# Direção visual — v00117

## Feedback contextual de interação

Somente um alvo interativo pode ser destacado por vez. A prioridade visual acompanha a prioridade de `interact()` e nunca transforma todos os objetos do cenário em elementos destacados.

O indicador usa:
- cantos pixelados discretos ao redor do alvo;
- pequena marca de grounding;
- prompt curto adaptado ao último dispositivo do InputManager;
- teclado: `E`;
- gamepad: `A`;
- touch/pen: `TOCAR`;
- mouse/pointer: `CLIQUE`;
- D-pad/joystick: `AÇÃO`.

O indicador é desenhado em `ingameText`, depois da iluminação ambiental, preservando legibilidade sem alterar sprites ou regras de interação.

## Árvores corrigidas

Árvores de footprint 2×2 devem ocupar visualmente o footprint completo:
- copa no terço superior;
- tronco alcança o chão;
- sombra coincide com a base;
- toco permanece claramente separado do estado saudável;
- coqueiros seguem a mesma regra de grounding;
- atlas de árvore usa padding para evitar recorte de copa e sombra direcional.

Nenhuma alteração em colisão, footprint, drops ou tempo de respawn.
