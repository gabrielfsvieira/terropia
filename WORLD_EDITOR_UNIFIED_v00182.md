# World Editor unificado — v00182

O projeto agora possui **uma base de dados e um schema compartilhados** para as duas interfaces:

- `world-editor/index.html` — entrada automática; escolhe Mobile ou Desktop.
- `world-editor/mobile.html` — interface simplificada para iPhone/touch.
- `world-editor/desktop.html` — interface completa com Blueprint, Event Builder, Quest Graph, Layers, Progression, biblioteca, validação e ferramentas técnicas.
- `world-editor/data.js` — mesma base autoral para ambas.
- `localStorage: terropia-world-editor-v1` — mesma chave de projeto nas duas interfaces quando executadas no mesmo domínio/navegador.

## O que significa “centralizado”

As duas interfaces usam o **mesmo formato de projeto**. A interface mobile edita apenas os campos simples, mas preserva quests, layers, eventos, interiors, blueprint, propriedades avançadas e outras estruturas que não mostra. A interface desktop lê o mesmo estado e oferece o conjunto completo de ferramentas.

### Limitação de GitHub Pages

GitHub Pages é estático. O `localStorage` pertence ao navegador/aparelho, portanto um iPhone e um computador **não compartilham automaticamente** alterações locais só por abrirem a mesma URL. O ZIP/pacote exportado continua sendo a fonte portátil autoritativa entre aparelhos e para o ChatGPT.

Para sincronização automática em tempo real entre iPhone e desktop será necessário, em uma etapa futura, adicionar um backend/autenticação (por exemplo Supabase, Firebase ou API do GitHub). Não armazenar tokens privados diretamente no HTML público.

## Publicação no GitHub Pages

Para hospedar o editor unificado, publique o conteúdo da pasta `world-editor/` mantendo os arquivos juntos. O `index.html` detectará automaticamente o dispositivo. Também é possível forçar:

- `?mode=mobile`
- `?mode=desktop`

