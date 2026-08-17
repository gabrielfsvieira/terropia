# Terrópia — Estado-base do Editor de Mundo

Editor: v00186
Schema: 4
Mapa-base: v00163
Revisão: 0

## Estado de implementação

As alterações exportadas pelo World Editor Mobile v10 em 2026-08-17 foram aplicadas ao runtime e incorporadas ao estado-base.

- AT-005 renomeada para **Vila Carpinelli - Entrada**.
- AT-006 mantém saída somente para **leste (AT-005)** e **sul (AT-023)**; norte/oeste fechados.
- AT-022 passa a **Vila Carpinelli - Área Sul**, tipo `town`, com saídas somente para **norte (AT-005)** e **oeste (AT-023)**. Elis, loja, Girassol ×3, Cabana da Alquimista, interior, frascos e Poção de Ataque permanecem implementados.
- AT-023 passa a **Vila Carpinelli - Área Sudoeste**, tipo `town`, com saídas somente para **norte (AT-006)** e **leste (AT-022)**.

Não há mudanças de mundo pendentes após esta reconciliação.


## V00186 — matriz regional obrigatória
Use `REGIONAL_RESOURCES_V00186.md` como fonte autoritativa para os 8 tiers de minério, gema, árvore e peixe.
