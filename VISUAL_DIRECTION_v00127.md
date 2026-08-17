# Direção visual — v00127

## Ambient Animation System

O mundo ambientalmente animado usa poucos clocks globais e nunca cria timers por objeto.

### Clocks
`slow`, `breeze`, `flicker` e `drift` são calculados a partir de um único relógio global.

### Pool
Partículas ambientais usam pool fixo de 36 entradas reutilizáveis. Não há crescimento de arrays por tempo de jogo.

### Atlas
Bandeiras, brilhos e brasas reutilizam frames pixel-art pré-renderizados em atlas/cache.

### Contexto
- Atenaria: folhas, insetos e poeira leve.
- Altaria: poeira, bandeiras e pequenos brilhos.
- Mornaqua: brilho costeiro, insetos e bandeiras.
- Calindra: folhas e insetos mais presentes.
- Solácia: poeira e bandeiras esparsas.
- Blazíria: fumaça, brasas e poeira.
- Necrovícia: névoa, poeira e brilhos frios.

Chaminés só emitem fumaça onde há chaminés declaradas. Fogueiras e forja alimentam emissões locais. Bandeiras são ancoradas somente em assinaturas regionais compatíveis.

A opção **Ambiente animado** controla exclusivamente animação ambiental. VFX de combate/coleta continuam sob a opção de partículas. `prefers-reduced-motion` e Redução de movimento desligam movimento ambiental.
