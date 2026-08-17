# Conteúdo de Mestre e Endgame das Skills — v00145

## Objetivo

A v00145 cria uma camada declarativa para conteúdo opcional de nível 40–60. Diamante e Onyx continuam sendo tiers existentes de domínio, mas nenhum conteúdo registrado nesta camada é requisito da campanha principal.

## Estrutura

`data/skill-endgame.js` registra quests de mestre, áreas opcionais, receitas especiais, encontros ligados a profissão, ferramentas avançadas, cosméticos como recompensa, coleções, achievements e Mastery Challenges.

O registry integra esses conteúdos ao `Unlock Registry`, permitindo que a Skill Guide apresente objetivos de alto nível junto dos demais milestones.

## Filosofia de progressão

O endgame usa `powerBudget: sidegrade`. Ferramentas de mestre priorizam qualidade de vida, perfect actions, consistência e especialização. Receitas especiais priorizam exploração, coleções, projetos e buffs utilitários. Não há novo tier acima de Onyx.

Receitas de mestre reutilizam materiais anteriores — por exemplo Ferro, Mithril, Ouro, Carvalho, Safira, Rubi, cultivos e peixes intermediários — para impedir que o endgame torne todo o conteúdo antigo irrelevante.

## Objetivos 40–60

Cada profissão recebe múltiplos vetores de domínio em vez de apenas “subir o número”:

- quest de mestre;
- desafio de Mastery distribuído;
- coleção ou achievement;
- área ou encontro opcional;
- ferramenta/receita utilitária;
- recompensa cosmética ou título.

Combate, Arquearia e Magia também recebem desafios opcionais que valorizam matchups, estilos, posicionamento e escolas, reduzindo a pressão para resolver endgame apenas com stats maiores.

## Segurança da campanha

Todos os registros possuem `optional: true` e `mainCampaignRequired: false`. Os testes verificam que a camada não introduz dependência obrigatória da campanha em conteúdo 40–60.

## Power creep

O teste `v00145-power-creep-check.js` exige que todo conteúdo novo permaneça classificado como sidegrade e limita bônus percentuais declarados das ferramentas avançadas a no máximo 5%.

Diamante e Onyx continuam fortes e especiais, mas o sistema foi preparado para objetivos horizontais de domínio, não para criar um Tier 8.
