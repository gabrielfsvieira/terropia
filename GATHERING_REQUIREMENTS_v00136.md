# Gathering Requirements 2.0 — v00136

## Regra central

Acesso e eficiência agora são separados:

- **nível da skill = acesso ao recurso**
- **tier da ferramenta = eficiência**

Mineração e Corte continuam exigindo uma ferramenta do tipo correto, mas não exigem mais ferramenta do mesmo tier do recurso. Uma Picareta de Ferro pode minerar Ouro quando o nível de Mineração permitir; uma ferramenta melhor apenas reduz duração e aumenta rendimento/perfect actions.

Pesca continua exigindo vara, enquanto Vara Reforçada melhora eficiência/quantidade. Plantação não exige ferramenta.

## Níveis dos sete tiers

| Tier | Mineração | Corte | Pesca |
|---|---:|---:|---:|
| Ferro / T1 | 1 | 1 | 1 |
| Mithril / T2 | 5 | 5 | 5 |
| Platina / T3 | 10 | 10 | 10 |
| Ouro / T4 | 15 | 15 | 15 |
| Rubi / T5 | 20 | 20 | 20 |
| Diamante / T6 | 30 | 30 | 30 |
| Onyx / T7 | 40 | 40 | 40 |

Esses marcos não criam novos recursos; apenas formalizam o acesso aos sete tiers já existentes.

## Dados

`data/gathering-requirements.js` centraliza:
- mineração;
- corte de árvore;
- pesca;
- plantação;
- nível exigido;
- nome do recurso;
- tier;
- ferramenta recomendada.

## Feedback

Tentativas bloqueadas informam:
- recurso;
- nível exigido;
- nível atual;
- ferramenta recomendada;
- ausência de ferramenta válida, quando aplicável.

Exemplo:

`Cedro Dourado • ✕ Corte de Árvore 15 — atual 12 • ℹ Ferramenta recomendada: Machado de Ouro`

## Eficiência

A fórmula já existente continua sendo usada para ferramentas:
- velocidade;
- double yield;
- perfect action.

Assim, ferramenta superior continua valiosa sem funcionar como segunda trava de acesso.
