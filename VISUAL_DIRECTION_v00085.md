# Terrópia v00085 — Animação de atores

## Contrato preservado

A grade de autoria continua 72×96 pixels lógicos por frame, ancorada nos pés. A hitbox continua 60×60 (`TILE=60`) e nenhuma animação altera posição lógica, colisão, alcance ou duração de gameplay.

## Caminhada

Cada direção possui quatro estados discretos de pose. Os frames 0 e 2 alternam perna/braço dianteiro e traseiro; 1 e 3 são passagens intermediárias com mudança sutil de centro corporal. O deslocamento no mapa continua interpolado apenas para apresentação; a pose não calcula movimento.

## Idle

Player e NPCs alternam lentamente entre postura neutra e respiração de um pixel, com piscada rara. `prefers-reduced-motion` e a opção interna de redução de movimento mantêm a pose neutra.

## Corpo a corpo

Ataques físicos do jogador usam três poses: preparação, golpe e recuperação. A arma é redesenhada junto da pose do braço durante a ação, suprimindo a espada estática do equipamento nesses frames.

## Mineração e corte

Picareta e machado usam três poses (erguer, impacto, retorno). A ancoragem considera `up`, `down`, `left` e `right`; perfis são espelhados e frente/costas usam pontos de mão próprios.

## Cache

A chave de composição inclui aparência, equipamentos, direção, walkFrame (0–3), actionFrame (0–2), idleFrame e estado de redução de movimento. O redraw comum reutiliza o canvas composto.
