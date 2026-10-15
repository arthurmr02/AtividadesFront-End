# 05 — Histórico da conversa e dos prompts

Aqui registrei como fui construindo a página com a IA, o que aproveitei e o que decidi mudar. Nem todas as mensagens abaixo são prompts completos copiados palavra por palavra: quando não tenho o texto integral, deixei claro que é um resumo do que pedi.

## 1. Comecei pela proposta da atividade
Expliquei que precisava fazer uma landing page de tema livre para treinar vibecode e que também precisava documentar o processo: prompts, pesquisas, decisões de design, referências visuais e paleta de cores.

**O que defini:** uma página única, em português do Brasil, para rodar localmente, sem precisar publicar.

## 2. Escolhi o tema e a referência visual
Escolhi Harry Potter, com foco na Sonserina, e usei uma referência visual de um dashboard temático que encontrei no Dribbble. O que mais me chamou atenção foi a biblioteca escura, a iluminação verde, o emblema, os cartões e a composição das imagens.

**O que a IA fez com isso:** organizou a ideia como uma landing page chamada **“Sonserina — Sob o Lago Negro”**, aproveitando a atmosfera da referência em vez de copiar a estrutura de dashboard.

## 3. Aprovei a identidade visual
Minha mensagem de aprovação foi:

> “Tipografia: Cormorant Garamond + Inter. Direção de arte: cinematográfica. Emblema: original. Decisão: aprovo e autorizo avançar para a implementação. Observações: Gostei do tema, as imagens estão bem caracteristicas. Siga as escolhas acima e mantenha a documentação do processo.”

**Resultado:** a página seguiu com a tipografia escolhida, o clima cinematográfico e um emblema próprio.

## 4. A primeira versão do site
A página foi montada com React, Vite e CSS próprio. A estrutura tinha banner, apresentação, informações sobre a casa, galeria, uma seção chamada “Arquivos”, chamada final e rodapé.

Depois, olhei as capturas de tela da página pronta para avaliar se o resultado estava de acordo com a ideia inicial.

## 5. Minha avaliação e a mudança mais importante
Eu disse:

> “Gostei da estrutura como esta, e as imagens não são um problema. Eu trocaria a parte de Arquivos e colocaria como curiosidades e colocaria realmente curiosidades sobre a casa e coisas que aconteceram nela.”

Com isso, decidi manter a estrutura e as imagens e mudar o conteúdo daquela seção. Em vez de cartões que pareciam arquivos genéricos, queria curiosidades de verdade sobre a Sonserina e acontecimentos do universo de Harry Potter.

## 6. Pedi que os cartões explicassem as curiosidades
Minha orientação foi:

> “Cada cartão possa ser clicado e revela a explicação mais completa, assim o leitor ira entender melhor sobre a curiosidade”

**Resultado esperado:** clicar em um cartão deve revelar mais detalhes ali mesmo, sem mandar o visitante para outra página. Os temas escolhidos foram a Câmara Secreta, Salazar Slytherin, o basilisco e a sala comunal.

## 7. Pesquisei os fatos e organizei os documentos
Registrei as fontes usadas em `03-pesquisas-e-fontes.md`, as escolhas visuais em `04-identidade-visual.md` e as decisões do projeto em `06-decisoes-de-design.md`. Também deixei uma lista de testes em `07-testes-e-correcoes.md` para conferir a página localmente.

## 8. Prompt de implementação — reconstrução do pedido
O texto abaixo resume o pedido que guiou a implementação; não é uma transcrição literal de uma única mensagem:

> Crie uma landing page de uma única página, em português do Brasil, sobre a casa Sonserina, com o conceito “Sob o Lago Negro”. Quero uma direção de arte cinematográfica, escura, elegante e um pouco gótica, usando verde-escuro, preto, esmeralda, prata e textos claros. Use Cormorant Garamond nos títulos e Inter nos textos. Crie um emblema original, um banner marcante, seções para apresentar a casa, uma galeria e uma seção de conteúdo. Faça o projeto em React com Vite e CSS próprio, mantendo a navegação simples e o layout adaptável a telas diferentes. Organize também a documentação do processo na pasta `docs/`.

## O que aprendi com as revisões
Não precisei refazer a página toda para melhorar o resultado. Depois de ver o site, percebi que a estrutura estava boa, mas a seção “Arquivos” não entregava o conteúdo que eu queria. A mudança para curiosidades e cartões expansíveis foi uma forma de corrigir o que faltava sem abandonar as escolhas visuais que já tinham funcionado.
