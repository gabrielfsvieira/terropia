# Direção visual — v00113

## Água 2.0

A v00113 preserva tile lógico, colisão e regras de pesca. A profundidade é exclusivamente visual e inferida da vizinhança imediata:

- água cercada por água: leitura mais profunda/escura;
- água próxima de margens: leitura mais rasa/clara;
- espuma aparece somente nas bordas expostas;
- ondas e highlights usam fases determinísticas diferentes por tile.

A base da água continua na camada estática/cacheável. O overlay animado fica na camada de efeitos e usa frames pré-renderizados compartilhados em `js/water-visuals.js`.

Não usar blur, filtros ou ruído aleatório por redraw. A animação deve ser sutil e nunca comprometer pesca, colisões, entidades ou leitura da UI.
