# Direção visual — v00129

## Battle Presentation 2.0

A batalha é tratada como uma extensão do mundo. O `scene` de combate carrega área, região, bioma e screen code do ponto onde o encontro começou.

### Composição
1. Fundo específico da área.
2. Ponte cromática/material da região.
3. Arena/chão de contato e sombras de grounding.
4. Combatentes, estados, VFX e textos.
5. Interface de turno e ações.

O combatente do turno atual recebe um marcador discreto de chão; defesa e status aparecem próximos à silhueta. O painel não precisa depender do log para indicar quem está agindo.

### Staging
Habilidades importantes e especiais de inimigos usam staging rápido: escurecimento leve do palco, linhas direcionais e telegraph. Não há screen shake contínuo, blur ou alteração de timing lógico.

### Interface
Desktop mantém coluna de ações larga com ícone + texto. Habilidades prontas, indisponíveis e importantes têm estados visuais distintos. O nome da região e da área aparece sobre o battle canvas sem competir com combatentes.

Fundos continuam específicos de Carpinelli, entrada, cavernas, floresta obscura, floresta de cogumelos e covil; a ponte regional prepara o sistema para regiões futuras sem duplicar o renderer.
