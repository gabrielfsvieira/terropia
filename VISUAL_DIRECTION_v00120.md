# Direção visual — v00120

## Textos ingame e Damage Numbers 2.0

A v00120 centraliza textos flutuantes em `js/floating-text.js`.

Hierarquia:
- dano normal: claro, compacto;
- crítico: maior, dourado e com duração levemente superior;
- cura: verde;
- bloqueio/defesa: azul claro;
- miss: cinza neutro;
- XP: dourado;
- item obtido: bege claro;
- status: violeta, com dano periódico identificado.

No mundo, a camada `ingameText` é a única responsável por desenhar esses textos. Na batalha, o mesmo manager é reutilizado pelo battle canvas.

Eventos próximos usam lanes e offsets alternados; eventos iguais em uma janela curta são agrupados. Todos os textos usam posições arredondadas para pixel snapping e animações breves de entrada, subida e fade.
