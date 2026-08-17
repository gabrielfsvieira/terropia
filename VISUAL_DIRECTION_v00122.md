# Direção visual — v00122

## HUD 2.0

O HUD permanente deve preservar o máximo possível da área jogável.

### Hierarquia
1. HP e MP são vitais primários e permanecem visíveis.
2. XP/nível e ouro são secundários; aparecem de forma compacta no desktop e são ocultados no HUD mobile.
3. Buffs, imunidades e estados temporários só aparecem enquanto ativos.
4. Informações completas continuam disponíveis no painel lateral, evitando duplicação no mundo.

### Desktop
O HUD usa duas barras compactas no canto superior direito, com uma faixa secundária curta. Não ocupa uma coluna vertical inteira nem compete com o painel lateral.

### Mobile
Somente HP, MP e status realmente ativos ficam visíveis. XP/ouro não ocupam a viewport durante exploração. D-pad e ação contextual respeitam `safe-area-inset-*`.

A UI deve permanecer pixel-oriented: superfícies opacas, bordas duras e sem blur.
