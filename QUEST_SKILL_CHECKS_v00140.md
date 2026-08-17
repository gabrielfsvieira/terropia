# Skill Checks em Quests — v00140

## Arquitetura

`data/quest-skill-checks.js` adiciona skill checks declarativos sem obrigar a reescrita imediata de todas as quests.

Cada check pode declarar:

- `id`
- `label`
- `requirement` — consumido pelo `RequirementSystem`
- `route`
- `objectiveCount`
- `description`
- `satisfiesOffer`
- `lockedVisible`

Exemplo:

```js
{
  id: 'repairFence',
  label: 'Reaproveitar partes boas da cerca',
  requirement: { type: 'skill', skill: 'crafting', level: 5 },
  route: 'repairFence',
  objectiveCount: 6,
  description: 'Artesanato reduz a madeira necessária.'
}
```

## Interface

A proposta de missão mostra uma seção **Opções de habilidade**.

Formato:

`[Artesanato 5] Reaproveitar partes boas da cerca`

Checks disponíveis podem ser selecionados. Checks bloqueados aparecem discretamente com o requisito atual, criando objetivo sem impedir a rota normal.

## Rotas implementadas

- Campanha / Anciã Mira — Culinária 3 pode concentrar os slimes e reduzir 3 derrotas para 2. A rota normal continua disponível.
- Alfredo — Corte 8 reduz sementes de milho de 20 para 14.
- Joaquim — Artesanato 5 reduz lenha de 10 para 6.
- Jordan — Mineração 5 reduz minério de ferro de 15 para 10.
- Gnomo Júlio — Culinária 6 reduz cogumelos de 10 para 7.
- Heitor — Alquimia 5 fornece uma pista narrativa adicional.
- Clarisse — Artesanato 8 registra preparação de reforços para a exploração, sem substituir o resgate.
- Geraldo — Artesanato 5 ajuda a reconhecer a assinatura da Safira, sem substituir a obtenção do item.
- Bruxa Selene — a sidequest do Dragão aceita **Magia 10** pela rota normal ou **Alquimia 10** como preparação alternativa. O Dragão continua precisando ser derrotado.

## Filosofia

Skill checks não são usados como grind obrigatório da campanha principal. Quando alteram uma missão principal, funcionam como atalho ou pequena conveniência.

Sidequests podem usar níveis maiores e alternativas mais especializadas.

As rotas selecionadas são persistidas em `questSkillRoutes` e o save version passa a 46.
