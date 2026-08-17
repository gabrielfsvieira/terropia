# Terrópia — Construções, interiores e Sombras 2.0 — v00069

> Documento de implementação da v00069. A referência normativa continua sendo `VISUAL_BIBLE.md`.

## Geometria congelada

A v00069 não altera footprints, entradas, posições ou colisões. Snapshot efetivo preservado da v00068:

| Construção/objeto | Footprint/posição efetiva | Entrada/interação preservada |
|---|---|---|
| Casa do jogador | `x=4 y=12 w=4 h=4` | porta `6,15` |
| Ferraria (fachada) | `x=10 y=12 w=4 h=4` | porta `12,15` |
| Banco (fachada) | `x=24 y=12 w=4 h=4` | porta `26,15` |
| Loja | mesmos `SHOP_HOUSE_TILES` da v00068 | `SHOP_DOOR` preservada |
| Forja interior | `x=9 y=7 w=4 h=4` | footprint interativo preservado |
| Bigorna | `x=21 y=9 w=2 h=2` | footprint interativo preservado |
| Fogão | `x=27 y=5 w=2 h=2` | footprint interativo preservado |
| Balcão do banco | `x=2 y=7 w=28 h=1` | serviço bancário preservado |

## Vocabulário de fachada

- `playerHouse`: telha pintada + traves + janelas quentes + floreira.
- `smithyHouse`: metal escuro + base pétrea + exaustão + janela de calor + ferramenta.
- `bankHouse`: ardósia + pedra cortada + pilastras + grades + latão.
- `shopHouse`: madeira + toldo listrado + vitrines + caixa/saco de mercadoria.
- `witchHut`: telhado assimétrico + madeira escura + vãos irregulares + ervas.
- `caveEntrance`: arco rochoso em degraus + abertura profunda.

Nenhum perfil depende de `fillText`, fonte, emoji ou placa para ser identificado.

## Storytelling interior

- Casa: livros, caneca/utensílios, tecido/tapete, recipientes e ervas.
- Ferraria: rack de ferramentas, carvão, lingotes, têmpera e calor.
- Banco: ledgers, caixas de segurança, divisores de latão e runner organizado.
- Loja: frascos, sacos, caixas, tecidos, bundles e mercadorias.

Todos esses elementos são desenho puro: sem colisão, interação, estado persistido ou mudança de rota.

## Sombras 2.0

Perfis: `actor`, `npc`, `enemy`, `flying`, `small`, `object`, `resource`, `tree`, `building`. Todos usam dois retângulos/degraus de contato, pixels inteiros e projeção baixo/direita. Construções possuem a maior largura proporcional; voadores usam contato menor.

São proibidos no módulo de sombra: blur, filtros, `shadowBlur`, elipses/arcos e aleatoriedade.
