# Contratos Profissionais — v00143

## Objetivo

A v00143 adiciona contratos curtos e opcionais para as oito profissões de gathering/production:

- Mineração;
- Corte de Árvore;
- Pesca;
- Plantação;
- Ferraria;
- Artesanato;
- Culinária;
- Alquimia.

Eles existem para oferecer direção entre capítulos da campanha sem substituir exploração, sidequests, carreiras profissionais ou treinamento normal.

## Sem daily quests

O sistema não usa data, horário real, intervalo de 24 horas ou cooldown diário.

A renovação depende de **progresso**:

1. o quadro começa no Conjunto 1;
2. concluir 4 dos 8 contratos disponíveis renova o quadro;
3. o Conjunto 2 exige progresso da campanha;
4. o Conjunto 3 exige avanço narrativo adicional/caverna;
5. depois do terceiro conjunto, o quadro pode ciclar novamente por novas conclusões.

O jogador não precisa treinar todas as profissões para renovar: quatro contratos bastam.

## Tipos de objetivo

### Entrega

Ex.: entregar Minério de Ferro, Carvalho, peixes ou colheitas.

O item só é consumido ao concluir o contrato.

### Gathering

Ex.: pescar determinada espécie, minerar Mithril ou colher Cenouras.

O sistema salva um baseline ao aceitar. Recursos obtidos antes do contrato não contam.

### Production

Ex.: forjar barras, lapidar gemas, preparar refeições ou elixires.

Também usa baseline. Comprar um item pronto não equivale a produzi-lo.

## Recompensas

Recompensas iniciais ficam deliberadamente abaixo das grandes sidequests profissionais:

- 21–62 XP da própria skill;
- aproximadamente 21–47 ouro;
- item útil apenas em alguns contratos.

A menor recompensa da linha profissional Aprendiz é 90 XP, portanto contratos não substituem as quests de carreira como principal fonte temática.

Depois da primeira conclusão de um contrato específico:

- XP repetido cai para 70%;
- ouro repetido cai para 85%;
- o item bônus especial não é concedido novamente.

Isso mantém contratos úteis como objetivo de treino sem incentivar farm infinito como estratégia universal.

## Eventos

Event Bus recebe:

- `professionalContractAccepted`;
- `professionalContractCompleted`;
- `professionalContractSetRenewed`.

## Persistência

O estado fica em `professionalContracts`:

- `rotation`;
- `accepted`;
- `completed`;
- `lifetimeCounts`;
- `totalCompleted`.

Aceitar, cancelar e concluir salvam pelo SaveStorage existente.

`saveVersion` passa para 49.
