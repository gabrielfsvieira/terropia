# Direção visual — v00118

## Gathering VFX

A v00118 diferencia visualmente a resolução de ações de coleta sem alterar duração, drops ou regras de gameplay.

- Corte: lascas de madeira e folhas compactas no ponto de impacto.
- Mineração: fragmentos de pedra/minério com queda mais pesada.
- Pesca: splash pixelado curto na água.
- Colheita: folhas, palha e pequenas partículas de terra.
- Coleta: partículas vegetais leves.
- Recursos raros recebem apenas um accent adicional breve, nunca glow permanente.

Os efeitos usam um pool fixo de 72 partículas reutilizáveis em `js/gathering-vfx.js`. Não existem timers individuais por partícula nem crescimento ilimitado de arrays. `prefers-reduced-motion` reduz a emissão.

## Banco

No banco, cada `type` ocupa exatamente um slot visual. Quantidades iguais são somadas em `qty`, mesmo para itens que não são empilháveis no inventário. O inventário mantém suas regras próprias.
