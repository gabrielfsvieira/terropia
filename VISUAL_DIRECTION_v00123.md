# Direção visual — v00123

## Inventário e linguagem visual de itens 2.0

Inventário, banco, equipamento, loja e crafting compartilham a mesma linguagem de estado.

- raridade: símbolo + nome e borda/acento, nunca somente cor;
- quantidade: selo `×N` no canto inferior direito;
- equipado: selo textual `✓ EQUIP.`;
- novo: selo `NOVO` durante a sessão até o item ser manipulado;
- selecionado: outline + selo `SELECT`;
- indisponível/bloqueado: redução de saturação + selo `⨯ INDISP.` ou `🔒 BLOQ.`.

Tooltips mantêm nome, raridade e descrição curta. Equipamentos mostram somente deltas relevantes contra o slot atualmente equipado (ATQ, DEF, DIST, MAG), com sinais `+/-`.

Ícones preservam pixel snapping e devem continuar reconhecíveis em escala pequena.
