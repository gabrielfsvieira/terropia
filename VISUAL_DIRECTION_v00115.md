# Direção visual — v00115

## Terreno 2.0

A v00115 reduz repetição do chão sem alterar IDs, colisões, geometria ou regras do mapa.

### Regras
- Variantes e detalhes são determinísticos por área + coordenada.
- Grama pode receber tufos, pequenas manchas e pontos de cor em baixa densidade.
- Terra/caminhos usam pedrinhas, marcas e manchas com densidade ainda menor para preservar rotas e entradas.
- Pedra/caverna pode receber chips e rachaduras esparsas.
- Bordas do autotile mantêm a máscara lógica existente, mas pequenos segmentos de transição variam deterministicamente.
- Não existe aleatoriedade por redraw.

### Hierarquia
Detalhes ocupam somente pequenas partes do tile e nunca substituem a cor-base. Caminhos, thresholds e áreas de acesso devem permanecer mais limpos que áreas naturais.

### Performance
Todos os detalhes são desenhados durante a construção da camada `terrain`, portanto entram no cache estático por área/estação. Não há custo adicional contínuo por frame.
