# Linhas de sidequests de habilidades — v00141

## Objetivo

A v00141 cria uma arquitetura opcional de carreiras profissionais para todas as skills de gathering e production:

- Mineração
- Corte de Árvore
- Pesca
- Plantação
- Ferraria
- Artesanato
- Culinária
- Alquimia

Cada carreira possui:
- mentor;
- quatro estágios;
- região sugerida;
- requisito de nível;
- desafio temático;
- XP da própria skill;
- recompensa profissional;
- estado persistente.

## Estágios

Cada linha tem exatamente quatro momentos significativos:

1. **Aprendiz**
2. **Praticante**
3. **Especialista**
4. **Mestre**

Não existe quest a cada nível.

Os níveis foram distribuídos aproximadamente em:
- Aprendiz: nível 5;
- Praticante: nível 15–20;
- Especialista: nível 30–35;
- Mestre: nível 45–50.

O estágio Mestre pode envolver Mastery 15, mas toda a linha é opcional e nunca entra nos requisitos da campanha principal.

## Mentores atuais

- Mineração — Jordan
- Corte — Joaquim
- Pesca — Clarisse
- Plantação — Alfredo
- Ferraria — Jordan
- Artesanato — Gnomo Júlio
- Culinária — Anciã Mira
- Alquimia — Bruxa Selene

A arquitetura aceita mentores diferentes no futuro sem alterar o runtime.

## Regiões

O registro já associa estágios a regiões da progressão de Terrópia, incluindo Atenaria e regiões futuras.

Somente etapas cuja região já existe ficam iniciáveis. As demais aparecem como conteúdo futuro bloqueado, sem criar mapas falsos ou atalhos artificiais.

## Progresso real

Gathering usa eventos `resourceGathered`.

Produção é registrada no momento em que a receita termina.

Isso significa que:
- comprar um item pronto não conta como produção;
- recursos coletados antes de aceitar a etapa não contam;
- ao aceitar, o sistema salva um baseline e passa a medir somente ações posteriores.

## Recompensas

Toda conclusão concede XP da skill correspondente.

Além disso, cada estágio registra um unlock profissional declarativo:
- Aprendiz — utilidade/conhecimento;
- Praticante — contrato/acesso profissional;
- Especialista — receita/projeto profissional;
- Mestre — título cosmético.

Esses unlocks ficam em `professionUnlocks`.

Títulos de Mestre ficam em `professionTitles`.

## Campanha

Nenhuma carreira profissional é referenciada por requisitos da história principal.

Nível 50/60, Mastery alta e títulos de Mestre são metas opcionais de especialização.
