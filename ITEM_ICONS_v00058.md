# Terrópia — Sistema de Ícones de Itens v00058

> **HISTÓRICO.** Este documento registra uma etapa anterior e não é mais referência normativa. Para as regras vigentes, consulte `VISUAL_BIBLE.md`.

Em v00058, o emoji deixa de ser a representação primária de itens. `js/item-icons.js` desenha os ícones em Canvas; o campo `emoji` é mantido somente como fallback técnico.

Regras: grid lógico 24×24, pixels inteiros, luz superior-esquerda, outline escuro, highlights no topo/esquerda, sombras na base/direita e paletas compartilhadas por material. O mesmo `type` deve usar a mesma silhueta em todas as interfaces e no chão.

Famílias cobertas: minérios, barras, gemas brutas e lapidadas, espadas, cajados, arcos, flechas, machados, picaretas, varas, armaduras, elmos, luvas, botas, escudos, amuletos, livros, comidas, sementes, madeiras, peixes e itens especiais.
