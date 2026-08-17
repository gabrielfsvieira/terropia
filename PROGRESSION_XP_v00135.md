# Progressão de XP 2.0 — v00135

A v00135 substitui a antiga curva linear por uma curva progressiva suave, pensada para RPG single-player.

## Curva

`XP próximo nível = round(16 + 2.1 × nível + 0.75 × nível^1.62)`

A curva é compartilhada pelas skills; o que muda entre elas continua sendo XP concedido por atividade, como já acontecia.

### Pontos de referência

| Nível atual | XP para próximo |
|---:|---:|
| 1 | 19 |
| 5 | 37 |
| 10 | 68 |
| 20 | 154 |
| 30 | 264 |
| 40 | 395 |
| 50 | 545 |
| 59 | 694 |

XP acumulado aproximado:
- nível 10: 343;
- nível 20: 1.390;
- nível 30: 3.409;
- nível 40: 6.626;
- nível 50: 11.238;
- nível 60: 17.424.

A curva anterior exigia aproximadamente 9.735 XP até 60. O crescimento novo é perceptível, mas muito menor que a filosofia de grind prolongado de MMORPGs.

## Estimativa de ações

A tabela usa XP representativo de atividades compatíveis com cada faixa. Não significa repetir literalmente uma única ação; sidequests, combate, gathering e produção se somam ao progresso.

| Faixa | Papel | XP representativo/ação | XP da faixa | Ações aproximadas |
|---|---|---:|---:|---:|
| 1–10 | Introdução rápida | 6 | 343 | 58 |
| 10–20 | Progressão rápida | 14 | 1.047 | 75 |
| 20–30 | Moderada | 25 | 2.019 | 81 |
| 30–40 | Especialização | 40 | 3.217 | 81 |
| 40–50 | Domínio | 60 | 4.612 | 77 |
| 50–60 | Endgame | 80 | 6.186 | 78 |

O objetivo é que tiers melhores, receitas melhores e conteúdo narrativo acompanhem o aumento da curva, evitando centenas de repetições idênticas.

## Migração segura

Saves anteriores a `saveVersion 44` preservam:
1. o nível atual;
2. o percentual de progresso dentro do nível.

Exemplo: um jogador com 50% do caminho de Mineração 20→21 na curva antiga recebe 50% do requisito 20→21 da curva nova.

Jogadores no cap permanecem no cap com XP interno zerado, como antes.

O sistema de backup pré-migração já existente continua salvando uma cópia recuperável antes da conversão.

## Tiers

Nenhum tier foi alterado:

**Ferro → Mithril → Platina → Ouro → Rubi → Diamante → Onyx**
