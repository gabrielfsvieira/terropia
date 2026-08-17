# Auditoria de acessibilidade visual — Terrópia v00131

## Resultado
A v00131 reforça acessibilidade sem substituir a identidade pixel art.

### Contraste de amostras críticas
- Texto principal: **16.19:1** (#f2f4f5 sobre #111820)
- Texto secundário reforçado: **10.77:1** (#c2cad1 sobre #111820)
- Foco: **13.85:1** (#f7d774 sobre #0a0d10)
- Painel alto contraste: **16.10:1** (#e5ebef sobre #0a0e12)
- Desabilitado: **6.22:1** (#8e9aa4 sobre #111820)

As combinações acima superam 4.5:1 para texto normal nas superfícies auditadas.

### Controles e teclado
- controles base: mínimo de 40 px no desktop;
- em telas <=620 px: mínimo de 44 px para botões/selects;
- `:focus-visible` usa contorno amarelo de 3 px + separação escura;
- controles desabilitados também usam borda tracejada, não somente cor.

### Estados sem dependência exclusiva de cor
- raridade: símbolo + rótulo + moldura; slots recebem marcas · / ◆ / ✦ / ★ / ✹;
- equipado/novo: E/N quando diferenciação de estados está ativa;
- dano: `−`; crítico: `‼`; cura: `+`; bloqueio: `▣`; miss: `×`; status: `!`;
- status de batalha já combina emoji + nome textual + duração;
- barras recebem textura quando diferenciação de estados está ativa.

### Movimento e efeitos
- Redução de movimento já existente permanece integrada a `prefers-reduced-motion`;
- partículas e ambiente continuam com intensidade configurável;
- sparks/pulsos decorativos são removidos em reduced-motion;
- nova opção **Texto ingame reforçado** pode desligar os prefixos redundantes se desejado.

### Contraste aumentado
O modo anterior aplicava `filter: contrast()` no `body`, afetando também o canvas. A v00131 substitui isso por reforço localizado de painéis, textos, bordas e controles. O mundo pixel art não é recolorido pelo modo.

### Telas pequenas
O painel de opções usa `100dvh`, controles de 44 px e textos secundários reforçados em <=620 px.
