# Direção visual — v00091

## Mobile e interação
O botão contextual mobile apenas descreve o alvo adjacente e chama `interact()`, preservando uma única fonte de regras. Os rótulos incluem Falar, Minerar, Cortar, Pescar, Abrir, Entrar, Plantar, Colher e Coletar.

## HiDPI
A resolução lógica do mundo permanece 1280×720. O backing store do canvas é multiplicado pelo `devicePixelRatio` (limitado defensivamente), enquanto o contexto recebe o transform de DPR. Câmera, clique, hitbox e UI continuam em coordenadas lógicas.

## Escala de apresentação
A apresentação prefere fatores inteiros quando há espaço. Em telas menores usa recíprocos inteiros controlados (1/2, 1/3, 1/4...) e centralização/letterbox, evitando escalas arbitrárias. `image-rendering: pixelated` permanece obrigatório.

## Cache estático
Cada área/estação possui um canvas de 1920×1200 para terreno, paredes, interiores, fachadas e microdecoração imóvel. Água animada, recursos, baús, NPCs, inimigos, pets e efeitos continuam na camada dinâmica. `CRPG_INVALIDATE_STATIC_MAP_CACHE(area)` permite invalidar explicitamente a camada quando conteúdo estático mudar.
