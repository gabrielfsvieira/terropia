# Cadeias de Produção 2.0 — v00137

## Cadeias formalizadas

A v00137 cria `data/production-chains.js` como registro declarativo de **origem → processamento → uso**.

### Metal
Mineração → Ferraria → Combate

Exemplo:
`⛏ Minério de Ouro (Mineração 15) → ⚒ Barra de Ouro (Ferraria 20) → ⚔ Equipamentos de Ouro (Combate 30)`

### Madeira
Corte de Árvore → Artesanato → Arquearia

Exemplo:
`🪓 Cedro Dourado (Corte 15) → 🛠 Arco/Flecha de Ouro (Artesanato 20) → 🏹 uso (Arquearia 30)`

### Pesca
Pesca → Culinária → exploração/combate

Os tiers superiores mantêm a ordem de acesso antes do processamento: Pesca 20 → Culinária 30, Pesca 30 → Culinária 40, Pesca 40 → Culinária 50.

### Plantação
Plantação → Culinária e Plantação → Alquimia.

Milho/Tomate continuam sendo alimentos e agora participam diretamente de elixires já existentes:
- Tomate entra no Elixir de Defesa.
- Milho entra no Elixir de Coleta.

### Gemas
Mineração/gemas → Artesanato → amuletos, encantamentos, magia/utilidade.

## Visualização

Tooltips de itens e cards de Ferraria/Artesanato/Alquimia mostram uma faixa compacta:

`origem → processamento → uso`

A faixa usa forma, ícone e texto; não depende apenas de cor.

## Resource sinks básicos

Recursos antigos permanecem úteis em receitas avançadas já existentes:
- todos os arcos usam lã;
- todas as flechas usam penas;
- Amuleto de Onyx usa 5 Barras de Mithril;
- Barra de Onyx usa 8 Barras de Platina;
- Barra de Diamante usa 4 Barras de Platina.

Essas relações são testadas para evitar obsolescência acidental em refactors futuros.

## Níveis

O registry preserva diferenças deliberadas de nível. Ele não exige que gathering, production e uso possuam o mesmo requisito.

Nenhum tier foi adicionado ou removido.
