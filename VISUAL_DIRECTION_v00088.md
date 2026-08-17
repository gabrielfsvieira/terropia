# Direção visual — v00088

## Progressão visual de equipamento
A silhueta externa continua fixa por categoria. Tiers podem acrescentar apenas microdetalhes internos: rebites, pequenas placas, linhas de acabamento e highlights. Nenhum detalhe altera hitbox, alcance ou footprint.

## Presets corporais de NPC
Presets alteram largura, altura e postura visual ao redor da âncora dos pés. Crianças são menores, idosos levemente curvados, fazendeiros mais largos, magos mais esguios, comerciantes um pouco mais cheios, guerreiros mais robustos e personagens compactos menores. A lógica de colisão permanece tile-based.

## Retrato procedural
O retrato do jogador deve derivar do mesmo conjunto `race + appearance + equipment` usado no mundo. Ele é uma composição maior e recortada do mesmo renderer, preparada para reutilização em telas de personagem e cenas futuras.
