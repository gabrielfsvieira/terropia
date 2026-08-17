# Economia das Skills e Resource Sinks — v00144

## Resumo executivo

A auditoria cobre **58 recursos/materiais** de Mineração, Corte, Pesca, Plantação, gemas, barras e materiais secundários.

Resultado após os ajustes desta versão:

- recursos sem fonte: **0**;
- recursos com fonte declarada futura: **14**;
- recursos sem uso: **0**;
- recursos sem sink: **0**;
- recursos com apenas um uso relevante: **8**.

“Fonte futura” não é tratada como erro estrutural: significa que o recurso já existe nos dados, mas sua região/nó ainda não está disponível nos mapas atuais.

## Ajustes econômicos da v00144

A versão evita resolver problemas apenas aumentando preço de venda.

- **Cenoura** passou a entrar no Elixir Antídoto.
- O projeto **Recuperar a Fazenda Oeste** passou a consumir também **10 Cenouras e 10 Batatas**, criando sink permanente para cultivos intermediários.
- O projeto **Restaurar a Ruína da Floresta** passou a consumir **Seda de Aranha, Asa de Morcego, Núcleo de Slime e Pó Arcano**, conectando drops raros e material mágico a um sink permanente.
- O relatório reconhece sinks já existentes: Museu, presentes de amizade, consumíveis, contratos, projetos, profissões, encantamentos, arcos/flechas e barras especiais.
- Nenhum tier foi removido ou renomeado.

## Catálogo completo

| ID | Recurso | Categoria | Tier | Fontes | Requisitos | XP | Receitas | Quests | Venda | Usos permanentes | Contratos | Diagnóstico |
|---|---|---|---:|---|---|---|---|---|---:|---|---|---|
| `ironOre` | Minério de Ferro | minério | 1 | Disponível: Veios minerais em mapas atuais | Mineração 1 | +5 XP Mineração | Barra de Ferro | Caminho do Minerador — apprentice | 6 | — | — | OK |
| `mithrilOre` | Minério de Mithril | minério | 2 | Disponível: Veios minerais em mapas atuais | Mineração 5 | +15 XP Mineração | Barra de Mithril | — | 18 | — | — | OK |
| `platinumOre` | Minério de Platina | minério | 3 | Disponível: Veios minerais em mapas atuais | Mineração 10 | +25 XP Mineração | Barra de Platina | — | — | — | — | OK |
| `goldOre` | Minério de Ouro | minério | 4 | Fonte futura: Veio regional ainda não implementado | Mineração 15 | +35 XP Mineração | Barra de Ouro | Caminho do Minerador — practitioner | — | — | — | fonte futura |
| `oakWood` | Lenha de Carvalho | madeira | 1 | Disponível: Árvores em mapas atuais | Corte de Árvore 1 | +5 XP Corte base | Arcos/flechas Tier 1 | Caminho do Lenhador — apprentice | 5 | Restaurar a Ponte de Carpinelli; Reparar o Moinho Antigo; Melhorar a Ferraria de Jordan; Reconstruir o Cais de Pesca; Recuperar a Fazenda Oeste | — | OK |
| `arcaneWillowWood` | Lenha de Salgueiro Arcano | madeira | 2 | Fonte futura: Espécie declarada; nó regional futuro | Corte de Árvore 5 | +9 XP Corte base | Arcos/flechas Tier 2 | — | — | Restaurar a Ruína da Floresta | — | fonte futura |
| `coconutWood` | Lenha de Coqueiro | madeira | 3 | Fonte futura: Espécie declarada; nó regional futuro | Corte de Árvore 10 | +13 XP Corte base | Arcos/flechas Tier 3 | — | — | — | — | fonte futura |
| `goldenCedarWood` | Lenha de Cedro Dourado | madeira | 4 | Fonte futura: Espécie declarada; nó regional futuro | Corte de Árvore 15 | +17 XP Corte base | Arcos/flechas Tier 4 | Caminho do Lenhador — practitioner | — | — | — | fonte futura |
| `rubyMapleWood` | Lenha de Bordo Rubro | madeira | 5 | Fonte futura: Espécie declarada; nó regional futuro | Corte de Árvore 20 | +21 XP Corte base | Arcos/flechas Tier 5 | — | — | — | — | fonte futura, uso único |
| `crystalWood` | Lenha de Árvore de Cristal | madeira | 6 | Fonte futura: Espécie declarada; nó regional futuro | Corte de Árvore 30 | +25 XP Corte base | Arcos/flechas Tier 6 | Caminho do Lenhador — specialist | — | — | — | fonte futura |
| `darkEbonyWood` | Lenha de Ébano Sombrio | madeira | 7 | Fonte futura: Espécie declarada; nó regional futuro | Corte de Árvore 40 | +29 XP Corte base | Arcos/flechas Tier 7 | Caminho do Lenhador — master | — | — | — | fonte futura |
| `fishT1` | Peixe Tier 1 | peixe | 1 | Disponível: Pesca em água Tier 1 | Pesca 1 | +5 XP Pesca | Cozinhar Lambari de Atenaria | — | 4 | — | — | OK |
| `cookedFishT1` | Peixe Tier 1 Cozido | alimento | 1 | Produção: Culinária: fishT1 | Culinária 1 | +5 XP Culinária | — | Caminho do Cozinheiro — apprentice | — | Consumível de cura em exploração/combate | — | OK |
| `fishT2` | Truta Azul | peixe | 2 | Disponível: Pesca em água Tier 2 | Pesca 5 | +8 XP Pesca | Cozinhar Truta Azul | Caminho do Pescador — apprentice | 7 | — | — | OK |
| `cookedFishT2` | Truta Azul Cozido | alimento | 2 | Produção: Culinária: fishT2 | Culinária 5 | +8 XP Culinária | — | — | — | Consumível de cura em exploração/combate | — | OK |
| `fishT3` | Carpa Prateada | peixe | 3 | Disponível: Pesca em água Tier 3 | Pesca 10 | +12 XP Pesca | Cozinhar Carpa Prateada | — | 11 | — | — | OK |
| `cookedFishT3` | Carpa Prateada Cozido | alimento | 3 | Produção: Culinária: fishT3 | Culinária 10 | +12 XP Culinária | — | — | — | Consumível de cura em exploração/combate | — | OK |
| `fishT4` | Dourado Solar | peixe | 4 | Disponível: Pesca em água Tier 4 | Pesca 15 | +17 XP Pesca | Cozinhar Dourado Solar | Caminho do Pescador — practitioner | 17 | — | — | OK |
| `cookedFishT4` | Dourado Solar Cozido | alimento | 4 | Produção: Culinária: fishT4 | Culinária 20 | +17 XP Culinária | — | Caminho do Cozinheiro — practitioner | — | Consumível de cura em exploração/combate | — | OK |
| `fishT5` | Salmão Rubro | peixe | 5 | Disponível: Pesca em água Tier 5 | Pesca 20 | +23 XP Pesca | Cozinhar Salmão Rubro | — | 25 | — | — | uso único |
| `cookedFishT5` | Salmão Rubro Cozido | alimento | 5 | Produção: Culinária: fishT5 | Culinária 30 | +23 XP Culinária | — | — | — | Consumível de cura em exploração/combate | — | OK |
| `fishT6` | Peixe-Cristal | peixe | 6 | Disponível: Pesca em água Tier 6 | Pesca 30 | +30 XP Pesca | Cozinhar Peixe-Cristal | Caminho do Pescador — specialist | 36 | — | — | OK |
| `cookedFishT6` | Peixe-Cristal Cozido | alimento | 6 | Produção: Culinária: fishT6 | Culinária 40 | +30 XP Culinária | — | Caminho do Cozinheiro — specialist | — | Consumível de cura em exploração/combate | — | OK |
| `fishT7` | Peixe Abissal | peixe | 7 | Disponível: Pesca em água Tier 7 | Pesca 40 | +40 XP Pesca | Cozinhar Peixe Abissal | Caminho do Pescador — master | 50 | — | — | OK |
| `cookedFishT7` | Peixe Abissal Cozido | alimento | 7 | Produção: Culinária: fishT7 | Culinária 50 | +40 XP Culinária | — | Caminho do Cozinheiro — master | — | Consumível de cura em exploração/combate | — | OK |
| `cornSeed` | Semente de Milho | semente | — | Disponível: Drops/colheitas/progressão de sementes | Plantação 1 | +2 XP ao plantar | — | — | — | Plantio; Recuperar a Fazenda Oeste | — | OK |
| `corn` | Milho Verde | cultivo | — | Disponível: Colheita de Semente de Milho | Plantação 1 | +5 XP ao colher | Milho Cozido; Elixir de Coleta | — | — | Presentes de amizade | — | OK |
| `tomatoSeed` | Semente de Tomate | semente | — | Disponível: Drops/colheitas/progressão de sementes | Plantação 1 | +2 XP ao plantar | — | — | — | Plantio; Recuperar a Fazenda Oeste | — | OK |
| `tomato` | Tomate | cultivo | — | Disponível: Colheita de Semente de Tomate | Plantação 1 | +5 XP ao colher | Tomate Cozido; Elixir de Defesa | — | — | Presentes de amizade | — | OK |
| `carrotSeed` | Semente de Cenoura | semente | — | Disponível: Drops/colheitas/progressão de sementes | Plantação 3 | +3 XP ao plantar | — | — | — | Plantio | — | OK |
| `carrot` | Cenoura | cultivo | — | Disponível: Colheita de Semente de Cenoura | Plantação 3 | +7 XP ao colher | Elixir Antídoto | Caminho do Agricultor — apprentice | — | Recuperar a Fazenda Oeste | — | OK |
| `potatoSeed` | Semente de Batata | semente | — | Fonte futura: Drops/colheitas/progressão de sementes | Plantação 6 | +4 XP ao plantar | — | — | — | Plantio | — | fonte futura |
| `potato` | Batata | cultivo | — | Fonte futura: Colheita de Semente de Batata | Plantação 6 | +10 XP ao colher | — | — | — | Recuperar a Fazenda Oeste | — | fonte futura, uso único |
| `wheatSeed` | Semente de Trigo | semente | — | Fonte futura: Drops/colheitas/progressão de sementes | Plantação 10 | +5 XP ao plantar | — | — | — | Plantio | — | fonte futura |
| `wheat` | Trigo | cultivo | — | Fonte futura: Colheita de Semente de Trigo | Plantação 10 | +14 XP ao colher | — | Caminho do Agricultor — practitioner; Caminho do Agricultor — master | — | Reparar o Moinho Antigo | — | fonte futura |
| `sapphire` | Safira | gema | 1 | Disponível: Descoberta em mineração/loot atual | Artesanato 1 para lapidar | — | Lapidar Safira; Lapidar Safira | — | — | — | — | OK |
| `cutSapphire` | Safira Lapidada | gema lapidada | 1 | Produção: Lapidação de Safira | Artesanato 1 | +8 XP Artesanato | Amuleto de Safira | Caminho do Artesão — apprentice | — | Amuletos/encantamentos; Restaurar a Ruína da Floresta; Doação ao Museu; Encantamentos | — | OK |
| `emerald` | Esmeralda | gema | 2 | Disponível: Descoberta em mineração/loot atual | Artesanato 10 para lapidar | — | Lapidar Esmeralda; Lapidar Esmeralda | — | — | — | — | OK |
| `cutEmerald` | Esmeralda Lapidada | gema lapidada | 2 | Produção: Lapidação de Esmeralda | Artesanato 10 | +12 XP Artesanato | Amuleto de Esmeralda | — | — | Amuletos/encantamentos; Restaurar a Ruína da Floresta; Doação ao Museu; Encantamentos | — | OK |
| `ruby` | Rubi | gema | 5 | Fonte futura: Descoberta de tier/região futura | Artesanato 20 para lapidar | — | Lapidar Rubi; ruby; Lapidar Rubi | — | — | — | — | fonte futura |
| `cutRuby` | Rubi Lapidado | gema lapidada | 5 | Produção: Lapidação de Rubi | Artesanato 20 | +20 XP Artesanato | Amuleto de Rubi | — | — | Amuletos/encantamentos; Doação ao Museu; Encantamentos | — | OK |
| `diamond` | Diamante | gema | 6 | Fonte futura: Descoberta de tier/região futura | Artesanato 30 para lapidar | — | Lapidar Diamante; diamond; Lapidar Diamante | — | — | — | — | fonte futura |
| `cutDiamond` | Diamante Lapidado | gema lapidada | 6 | Produção: Lapidação de Diamante | Artesanato 30 | +30 XP Artesanato | Amuleto de Diamante | — | — | Amuletos/encantamentos; Doação ao Museu; Encantamentos | — | OK |
| `onyx` | Onyx | gema | 7 | Fonte futura: Descoberta de tier/região futura | Artesanato 40 para lapidar | — | Lapidar Onyx; onyx; Lapidar Onyx | — | — | — | — | fonte futura |
| `cutOnyx` | Onyx Lapidado | gema lapidada | 7 | Produção: Lapidação de Onyx | Artesanato 40 | +45 XP Artesanato | Amuleto de Onyx | — | — | Amuletos/encantamentos; Doação ao Museu; Encantamentos | — | OK |
| `feather` | Pena | material | — | Disponível: Galinha / coleta | — | — | Todas as receitas de flechas | — | — | — | — | uso único |
| `wool` | Lã | material | — | Disponível: Animais/loot | — | — | Todos os arcos | — | — | Reconstruir o Cais de Pesca; Presentes de amizade (Clarisse) | — | OK |
| `mushroom` | Cogumelo | material | — | Disponível: Cogumelos no mundo | — | — | Elixir de Cura; Elixir de Defesa; Elixir Antídoto | Pedido do Gnomo Júlio | — | Consumível de cura; Presentes de amizade | — | OK |
| `raspberry` | Framboesa | material | — | Disponível: Arbustos de Framboesa | — | — | Elixir de Coleta | — | — | Consumível de cura | — | OK |
| `blueRaspberry` | Framboesa Azul | material | — | Disponível: Arbusto especial após boss | — | — | — | Pedido de Heitor | — | Presente favorito de Heitor | — | OK |
| `egg` | Ovo | material | — | Disponível: Galinha | — | — | Ovo Cozido | — | — | — | — | uso único |
| `coconut` | Côco | material | 3 | Disponível: Coqueiro (drop bônus) | — | — | — | — | — | Consumível de cura | — | uso único |
| `slimeCore` | Núcleo de Slime | drop raro | — | Disponível: Slime Antigo | — | — | — | — | — | Restaurar a Ruína da Floresta; Doação ao Museu | — | OK |
| `batWing` | Asa de Morcego | drop raro | — | Disponível: Morcegos | — | — | — | — | — | Restaurar a Ruína da Floresta; Doação ao Museu | — | OK |
| `wolfFang` | Presa de Lobo | drop raro | — | Disponível: Lobo Gigante | — | — | — | — | — | Doação ao Museu | — | uso único |
| `spiderSilk` | Seda de Aranha | drop raro | — | Disponível: Aranha Gigante | — | — | — | — | — | Restaurar a Ruína da Floresta; Doação ao Museu | — | OK |
| `ancientScale` | Escama Ancestral | drop raro | 7 | Disponível: Dragão Ancestral | — | — | — | — | — | Doação ao Museu | — | uso único |
| `arcaneDust` | Pó Arcano | material mágico | — | Disponível: Recompensas/loot mágico | — | — | — | — | — | Restaurar a Ruína da Floresta | — | OK |

## Recursos com atenção futura

Os recursos marcados como **fonte futura** já possuem ao menos um uso/sink, mas seus nós/regiões ainda não estão presentes na versão atual. Isso inclui parte das madeiras avançadas, Ouro bruto, cultivos futuros e gemas de alto tier.

Os itens marcados como **uso único** não são necessariamente defeitos. Eles são mantidos como alerta de balanceamento para futuras versões; o teste falha apenas se um recurso ficar totalmente sem fonte, sem uso ou sem sink.

## Progressão e ciclos

Os testes verificam dependências de produção conhecidas para impedir ciclos impossíveis. A regra esperada é:

`fonte/gathering → processamento → uso`

Barras especiais podem reutilizar barras inferiores, mas não podem depender direta ou indiretamente do próprio resultado.

## Princípio econômico

Terrópia é single-player. Portanto, materiais precisam de destinos internos:

- receitas;
- consumíveis;
- quests;
- contratos profissionais;
- projetos permanentes;
- Museu/coleções;
- presentes e relações;
- componentes de tiers posteriores.

O preço de venda permanece secundário e não é usado como solução universal para obsolescência.
