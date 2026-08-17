# Visual Regression Suite — v00132

## Cobertura

A suíte gera 72 baselines: 12 cenas × 6 viewports.

Cenas:
- mundo — Carpinelli e caverna;
- interiores — casa e ferraria;
- batalha;
- inventário;
- banco;
- loja;
- quests;
- crafting;
- diálogo;
- criação de personagem.

Viewports:
`360×800`, `390×844`, `412×915`, `768×1024`, `1280×720`, `1600×1000`.

## Uso

Comparar com os baselines:

```bash
python3 tests/visual-regression.py
```

Atualizar diferenças **intencionais**:

```bash
python3 tests/visual-regression.py --update
```

Executar uma família isolada:

```bash
python3 tests/visual-regression.py --scene battle
```

O modo normal nunca atualiza baselines automaticamente.

## Determinismo

- viewport e deviceScaleFactor fixos;
- `reduced_motion=reduce`;
- animações CSS pausadas;
- caret e notices transitórios ocultos;
- semente pseudoaleatória fixa;
- screenshot da viewport com DPR 1.

O harness visual usa HTML/CSS determinístico. Comportamento JS/gameplay continua coberto pelos smoke/functional tests existentes.

## Comparação

- tolerância global: 3,5% dos pixels;
- diferença por pixel só é contabilizada acima de 28 níveis de canal;
- mudança de dimensões reprova imediatamente;
- comparação usa Pillow/ImageChops para evitar loops lentos.

A tolerância absorve pequenas diferenças de rasterização do canvas/fontes sem aceitar mudanças grandes de composição.

## Checks estruturais

Além do diff visual, a suíte verifica:
- corte horizontal de controles/cards;
- canvas com proporção/escala inesperada;
- `image-rendering` incompatível com pixel art;
- HUD fora da viewport;
- sobreposição D-pad × ação contextual;
- raiz da cena invisível.

## Baseline inicial

A v00132 inclui 72 imagens em `tests/visual-baselines/`.

A própria suíte detectou um problema real já existente na loja em `360×800` e `390×844`: os botões `sellAllFishBtn`, `sellAllMithrilBtn` e `sellAllCutGemBtn` ultrapassam horizontalmente a viewport. O baseline pode registrar a imagem, mas o check estrutural continua reprovando esse caso; `--update` não mascara o warning estrutural.

Isso separa diferenças intencionais de regressões reais: imagens mudam apenas com atualização explícita, enquanto problemas geométricos continuam sendo reportados.
