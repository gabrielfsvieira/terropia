# Direção visual — v00121

## UI Design System

A v00121 torna `css/v00121.css` a camada normativa final da interface. Estilos históricos permanecem por compatibilidade, mas componentes visuais devem preferir os tokens `--ui-*` desta versão.

### Princípios

- Pixel art também na interface: bordas compactas, sombras duras e tipografia monospace em títulos/ações.
- Três níveis principais de superfície: fundo, painel e painel elevado.
- Estados de interação não dependem apenas de cor: hover muda superfície/borda; pressed desloca 2 px; focus-visible usa outline; disabled perde contraste e sombra.
- Inventário, banco, loja, quests, crafting, níveis, habilidades, equipamentos, diário e batalha compartilham painel, botão, tabs, slots, tooltips e scrollbars.
- Desktop é a referência visual; mobile reduz espaçamento e permite tabs roláveis sem criar uma segunda linguagem de UI.

### Tokens

Cores, espaçamento, raios, alturas de controle, sombras e famílias tipográficas ficam centralizados em `:root` com prefixo `--ui-`.

### Acessibilidade

Todo botão mantém `:focus-visible`; estados selected/active, pressed e disabled são visualmente distintos. Scrollbars permanecem visíveis em overlays e listas longas.
