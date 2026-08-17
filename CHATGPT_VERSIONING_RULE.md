# Regra persistente de versionamento — Terrópia

Esta regra é **obrigatória para toda edição futura feita pelo ChatGPT no projeto Terrópia**.

1. Ao receber um ZIP do jogo e realizar qualquer ajuste que altere arquivos, o ChatGPT deve identificar a versão atual do projeto e gerar a entrega com **uma versão acima**.
2. Exemplo: entrada `v00182` + qualquer alteração = saída `v00183`. Nunca devolver o ZIP final com a mesma versão da entrada.
3. Atualizar de forma coerente, no mínimo: `index.html`, build/cache do `service-worker.js`, `CHANGELOG.md`, metadados do World Editor e qualquer arquivo de release que declare a versão atual.
4. O nome do ZIP final deve incluir a nova versão: `VNNNNN.zip`.
5. A nova entrada deve ser adicionada no topo do `CHANGELOG.md`, explicando objetivamente o que mudou.
6. Não reutilizar uma versão já entregue para uma nova alteração. Se houver nova rodada de ajustes, incrementar novamente.
7. A regra vale também para mudanças exclusivas de documentação, World Editor, UI, dados, testes, assets ou ferramentas.
8. Arquivos históricos cujo nome contém uma versão anterior (relatórios/testes de releases antigas) não devem ser renomeados apenas por causa do bump; somente os metadados da release atual devem avançar.

**Contrato de entrega:** sempre que o ChatGPT modificar o projeto, o ZIP devolvido deve ser reconhecível como uma release nova e numericamente superior à recebida.


## Regra de nome do arquivo a partir da V00184
O ZIP devolvido deve se chamar somente pela versão, no formato `V00185.zip`, `V00188.zip`, etc. Não prefixar com TERROPIA nem adicionar descrições ao nome do ZIP.


## Regra de repositório unificado — V00188+
- A entrega oficial deve conter o projeto inteiro: jogo + World Editor + dados + testes + documentação.
- O ZIP final deve ser somente `VNNNNN.zip`.
- A raiz do repositório GitHub Pages abre o jogo (`/terropia/`).
- O World Editor canônico fica em `/terropia/editor/`.
- Nunca entregar o World Editor como pacote separado quando a solicitação envolver o projeto completo.
- Alterações feitas pelo World Editor devem ser reconciliadas no mesmo projeto antes da próxima release.


## Editor canônico
- Leia `WORLD_EDITOR_CURRENT.json` primeiro.
- A versão em `canonicalEditor` é a única runtime oficial.
- Runtimes antigos devem ser removidos antes de qualquer ZIP de entrega.
- O editor mais recente sempre prevalece.
