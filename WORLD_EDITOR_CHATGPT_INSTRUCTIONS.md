# Instrução persistente — Editor de Mundo Terrópia

Esta regra deve ser aplicada em **TODA edição futura recebida como ZIP**, independentemente do tema principal. O Editor de Mundo deve ser auditado antes da implementação; mudanças pendentes devem ser implementadas na mesma entrega, salvo instrução explícita do usuário para adiá-las.

1. Verificar nesta ordem: `WORLD_EDITOR_CHANGES.json`, `WORLD_EDITOR_SNAPSHOT.json`, `world-editor/project-state.json`, `WORLD_EDITOR_PROMPT.md`.
2. `WORLD_EDITOR_CHANGES.json` é a fonte autoral preferencial. `WORLD_EDITOR_SNAPSHOT.json` é a referência completa de reconciliação. Preferir a revisão mais alta consistente.
3. Cards **EXISTENTE** reutilizam definição/ID já catalogado. Cards **NOVO** exigem criação da definição.
4. Comparar Editor com `data/world-map-*.js`, `data/map-codes.js`, conteúdo e runtime. Não assumir que o planejado já está implementado.
5. Posição de tiles define intenção de adjacência N/S/L/O. Metadata de conexão e `lock` estruturado têm precedência sobre a adjacência padrão.
6. Em schema 4+, tratar Event Builder como especificação autoral: `trigger`, páginas/estados, `conditions`, `actions`, prioridade e `layerId`.
7. Nunca inferir zoom/follow de câmera. `cameraFocus` só deve existir quando explicitamente definido e deve possuir `cameraRestore` quando o evento exigir retorno ao comportamento normal.
8. Tratar `state.quests`/Quest Graph como fonte autoral de dependências. Preservar IDs, pré-requisitos, telas, giver, conclusão e recompensas. Não quebrar dependências nem criar ciclos.
9. Tratar `worldLayers` como estados condicionais do mundo. A camada `base` é estrutural; camadas adicionais só alteram runtime quando explicitamente vinculadas a telas, entidades individuais ou páginas de evento (`layerId`).
10. Progression locks estruturados (`quest`, `skill`, `flag`, `item`, `custom`) devem ser implementados usando o sistema de requisitos existente quando possível. Não substituir por lógica paralela sem necessidade.
11. Antes de implementar, executar a validação do Editor e considerar `progressionValidation`. Resolver ciclos, referências inválidas, locks sem produtor e outros erros autorais antes de sincronizar a base.
12. `acceptanceCriteria` do Change Set funciona como contrato de entrega. Ao finalizar, validar os critérios e executar/adaptar `WORLD_EDITOR_GENERATED_TESTS.js` quando fornecido.
13. A auditoria **Editor ↔ Runtime** distingue divergência real de mudança pendente. Depois da implementação, regenere `world-editor/runtime-library.js` e elimine divergências reais.
14. Interiores pertencem à tela mundial e podem ser vinculados a construções sem novo tile. Respeitar IDs, vínculo e retorno.
15. `visual.x`/`visual.y` são posições percentuais do blueprint 16:9 e fazem parte da intenção de composição.
16. Respeitar `designControl.freedom` e todas as restrições de câmera, conexões, NPCs, quests, dificuldade e layout.
17. Códigos `AT-###`, IDs de definição, IIDs, IDs de interiores, eventos, quests e layers são permanentes dentro da intenção do Editor.
18. Regenerar `world-editor/runtime-library.js` com `node tools/generate-world-editor-runtime-library.js` quando dados/runtime mudarem.
19. Ao concluir, atualizar `world-editor/data.js`, `world-editor/project-state.json`, `WORLD_EDITOR_PROMPT.md`, changelog e versão; zerar apenas mudanças efetivamente implementadas.
20. Templates customizados são autoria, não conteúdo runtime, até serem aplicados às telas.

Objetivo: o Editor é a **fonte de intenção de design** e o runtime é a **fonte de verdade da implementação**. `CHANGES + SNAPSHOT + CRITÉRIOS + TESTES` formam o protocolo de comunicação preciso entre usuário e ChatGPT.


## Regra de release obrigatória

Além das regras acima, aplicar sempre `CHATGPT_VERSIONING_RULE.md`: **qualquer ajuste feito pelo ChatGPT deve gerar um ZIP com exatamente uma versão de release acima da versão recebida**, atualizar metadados/build/changelog e nunca devolver a mesma versão de entrada.


## V00187 — matriz regional obrigatória
Use `REGIONAL_RESOURCES_V00187.md` como fonte autoritativa para os 8 tiers de minério, gema, árvore e peixe.
