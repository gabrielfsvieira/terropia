# Direção visual — v00116

## Sombras e grounding 3.0
A luz permanece no canto superior esquerdo. Sombras de contato deslocam-se para baixo/direita, sem blur ou filtros. Atores usam sombra compacta; recursos, árvores e construções podem receber pequena projeção direcional pixelada além do contato.

## Batalha desktop-first
Em navegador desktop, o card de batalha usa até 1040 px e ações exibem ícone + rótulo. Tooltips não são necessários para reconhecer comandos. Em viewports menores, os rótulos recolhem para preservar espaço.

## Interiores em crop fixo
`home`, `smithy`, `bank` e `shopInterior` usam palco interno de 21×12 tiles dentro do mundo lógico e câmera fixa em 1280×720, zoom 1. Não há dead-zone, look-ahead ou deslocamento de câmera nesses mapas. Objetos, balcões, estações e NPCs foram reposicionados para o novo palco.
