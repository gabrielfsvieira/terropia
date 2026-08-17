# V00154 — Expansão estrutural do mundo de Terrópia
## Etapa 9/10 — QA visual, performance, câmera, colisões e save

### Escopo
Nenhuma tela, região, ID ou população de gameplay foi adicionada. O overworld permanece em 105 telas.

### Traversal e conteúdo
- T1–T7: 15/15 cada.
- reachableOverworldScreens=105; totalOverworldScreens=105; unreachable=0.
- Content Validator: OK (292 conexões).
- No-population: OK.

### QA determinístico representativo
Foram gerados 14 artefatos PNG em `tests/world-qa-v00154/`, dois por região (uma tela interna e uma fronteira).
Seleção: T1 AT-019/AT-017; T2 AT-031/AT-024; T3 AT-047/AT-052; T4 AT-061/AT-054; T5 AT-077/AT-069; T6 AT-091/AT-096; T7 AT-106/AT-099.

**Limitação importante:** o ambiente de execução desta etapa bloqueia navegação do Chromium tanto para `file://` quanto para servidor localhost. Portanto, os 14 PNGs são renders determinísticos da topologia física 16×10 (tiles/água/obstáculos/passagens) usados para inspeção de colisão e conectividade, e não capturas do canvas final da engine. Não foram inventados resultados de FPS, flicker, layering ou pixel snapping que exigem o browser real.

### Colisão, saídas e pontes
`tests/v00154-world-qa-check.js` verifica nas 14 telas representativas que as saídas físicas declaradas estão abertas. A revisão geográfica v000151 continua verificando as 105 matrizes e seus componentes navegáveis. Nenhuma ponte funcional nova foi criada pela expansão; travessias continuam submetidas à matriz lógica existente.

### Water 2.0 / Vegetation 2.0 / câmera
Os módulos existentes foram preservados. Water e Vegetation continuam no renderer em camadas existente. `camera-polish.js` mantém snap imediato para deslocamentos >150 px e reset/fade de troca de área; nenhuma arquitetura paralela foi criada.

### Performance e cache
Foi encontrado um risco real: os caches estáticos de terreno e cenário eram `Map()` sem limite, permitindo reter canvases de todas as áreas visitadas. Corrigido em v00154:
- criação continua lazy, somente no primeiro render da área;
- terreno e cenário continuam em static layer cache;
- cada cache de área agora tem limite de 12 entradas;
- eviction FIFO reutiliza `render-cache.boundedSet`;
- `CRPG_WORLD_CACHE_STATS()` expõe contagem e bytes aproximados para QA.
No limite, 24 canvases de 1280×720 RGBA representam aproximadamente 84.4 MiB de pixels brutos. 

Mapas inativos permanecem dados declarativos; `layerRenderer.draw` recebe apenas `state.area` e `currentMap()`.

### Medições
Não foi possível medir honestamente tempo de troca, construção de cache ou FPS porque o browser é bloqueado por política do sandbox. Esses valores ficam explicitamente como **não medidos**, em vez de estimados/inventados. O limite de memória acima é cálculo teórico de pixels, não medição de heap.

### Save
- `v00110-save-storage-check`: PASS
- `v00133-save-compat-check`: PASS
- `v00135-save-migration-check`: PASS
- `functional-check`: PASS
Nenhum campo novo de save foi necessário e os IDs antigos permanecem preservados.

### Testes históricos
O teste `v00128-camera-check.js` ainda contém uma asserção histórica baseada em marcador textual da versão antiga e não é uma prova funcional da câmera atual. `tests/static-check.py` também contém snapshots textuais históricos e falha em uma string de implementação já refatorada. Eles não foram afrouxados artificialmente. Os checks funcionais/estruturais atuais passam.

### Resultado
A expansão permanece 105/105 conectada. A regressão técnica concreta encontrada nesta etapa — cache estático de áreas sem eviction — foi corrigida.
