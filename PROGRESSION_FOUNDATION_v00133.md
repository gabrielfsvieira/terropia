# Progression Foundation — Terrópia v00133

## Objetivo

A v00133 reorganiza a fundação de progressão sem rebalancear o jogo.

Nenhuma skill, tier, recurso, receita ou requisito existente foi removido. A curva de XP permanece exatamente:

`15 + level * 5`

Os tiers continuam:

**Ferro → Mithril → Platina → Ouro → Rubi → Diamante → Onyx**

## Skill Definitions

`data/skills.js` passa a ser a fonte declarativa para as 11 skills.

Cada definição contém:

- `id`
- `name`
- `icon`
- `cap`
- `category`
- `xpCurve`
- `milestones`
- `relations`

Categorias usadas:

- `gathering`
- `production`
- `combat`

Relações descrevem cadeias conceituais entre skills sem impor novo balanceamento.

## RequirementSystem

`js/requirements.js` avalia:

- `skill`
- `quest`
- `item`
- `area`
- `equipment`
- `mastery`
- `flag`

Também suporta composição:

- `all`
- `any`
- `not`

E formato declarativo compacto, por exemplo:

```js
{
  skill: { mining: 20, smithing: 15 },
  item: { ironOre: 5 },
  quest: "slimeInvasion"
}
```

O retorno contém:

```js
{
  ok: false,
  results: [...],
  text: "✓ Mineração 20\n✕ Ferraria 15 — atual 12"
}
```

## Primeiras migrações

Sem alterar comportamento, a API já é usada gradualmente em:

- requisito de Mineração para minérios;
- requisito de Pesca para espécies/ecossistemas;
- desbloqueio de tiers de Ferraria;
- fabricação de barras/equipamentos;
- requisito de Combate/Arquearia ao equipar;
- recomendação de Combate para entrada em áreas perigosas;
- requisito de Mineração da quest de Geraldo.

O restante pode migrar progressivamente em versões futuras.

## Compatibilidade

A estrutura persistida de `state.skills` e `state.mastery` não mudou.

A v00133 não exige migração destrutiva. Saves antigos continuam usando seus níveis e XP atuais.

Testes adicionados:

- `v00133-requirements-check.js`
- `v00133-progression-foundation-check.js`
- `v00133-save-compat-check.js`
