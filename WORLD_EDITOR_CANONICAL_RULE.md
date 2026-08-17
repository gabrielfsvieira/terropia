# WORLD EDITOR — REGRA CANÔNICA

Existe apenas um World Editor runtime oficial por versão.

1. Leia `WORLD_EDITOR_CURRENT.json` primeiro.
2. O arquivo em `canonicalEditor` sempre prevalece.
3. Antes de gerar um ZIP novo, remova runtimes antigos/duplicados do editor.
4. Remova pacotes `CHATGPT/WORLD_EDITOR_PACKAGE_*.json` anteriores.
5. Insira somente o editor canônico atual e o pacote de alterações atual.
6. `editor/index.html` deve ser cópia da versão canônica.
7. `world-editor.html` deve ser apenas redirect para `editor.html`.
8. A pasta `world-editor/` é fonte de desenvolvimento e deve ser sincronizada pelo ChatGPT ao devolver a próxima versão.
9. Toda entrega incrementa a versão.

Objetivo: nunca permitir que uma versão anterior do World Editor seja republicada ou prevaleça.
