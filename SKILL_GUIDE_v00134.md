# Skill Guide & Unlock Registry — v00134

A tela de habilidades agora usa `data/unlocks.js` como registro central de progressão.

O registry consolida desbloqueios reais já existentes:
- tiers de Mineração, Ferraria e Combate;
- peixes e Culinária;
- receitas de gemas, amuletos, arcos e flechas;
- requisitos de Arquearia;
- Safira em Mineração 5;
- Portão da Bruxa em Magia 10;
- habilidades de batalha;
- plantações;
- Alquimia.

Conteúdo que não é desbloqueado por nível não é falsamente apresentado como milestone. Árvores, por exemplo, permanecem relacionadas à skill com nota de ferramenta/tier.

A ficha mostra:
- nível/cap;
- XP atual;
- XP restante;
- XP total;
- próximo desbloqueio;
- milestones completos;
- recursos;
- receitas;
- equipamentos;
- áreas/atividades;
- Masteries.

Estados visuais:
- `✓` desbloqueado;
- `◆` próximo;
- `○` futuro.

Level-up emite os desbloqueios consultando o mesmo registry e o Reward Presentation exibe exatamente esses títulos.
