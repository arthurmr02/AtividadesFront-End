# 07 — Testes, revisão e correções

## Revisão que fiz até agora
Depois de ver as capturas do site, considerei que a estrutura e as imagens estavam boas. A mudança que pedi foi na seção “Arquivos”: queria curiosidades reais sobre a Sonserina e explicações mais completas ao clicar nos cartões.

- [x] Revisei visualmente a página pelas capturas de tela.
- [x] Decidi manter a estrutura e as imagens.
- [x] Decidi mudar “Arquivos” para “Curiosidades da Sonserina”.
- [x] Defini que os cartões deveriam revelar explicações mais completas.
- [x] Registrei fontes para os assuntos das curiosidades em `03-pesquisas-e-fontes.md`.

## Testes técnicos que ainda preciso fazer
Ainda preciso abrir o projeto no meu ambiente e conferir estes pontos. Não marquei como concluídos porque preciso observar o resultado na prática.

- [ ] `npm install` termina sem erros.
- [ ] `npm run dev` inicia a página.
- [ ] `npm run build` termina sem erros.
- [ ] Os links de navegação levam para as seções corretas.
- [ ] Os cartões de curiosidades abrem e fecham como esperado.
- [ ] Consigo usar os cartões pelo teclado.
- [ ] O menu para telas menores funciona.
- [ ] As imagens externas carregam.
- [ ] A página continua organizada em desktop e celular.
- [ ] Links e botões mostram o foco quando navego pelo teclado.

## Como vou testar
Na pasta onde está o `package.json`, vou abrir o terminal e executar:

```bash
npm install
npm run dev
```

Depois, vou abrir o endereço local mostrado pelo Vite e conferir a navegação, o menu e os cartões. Também vou executar:

```bash
npm run build
```

Se encontrar algum erro, vou anotar aqui o que aconteceu, o que alterei e se o problema foi resolvido.

## Correção de conteúdo
**O que não estava como eu queria:** a seção “Arquivos” não explicava curiosidades específicas da Sonserina.

**O que pedi para mudar:** transformar a seção em “Curiosidades da Sonserina”, mantendo a estrutura visual e as imagens.

**Complemento que pedi:** fazer cada cartão abrir uma explicação mais completa, para que o visitante entenda o assunto sem sair da página.

**Como vou confirmar:** testar os cartões no navegador e verificar se cada um mostra e esconde a explicação corretamente.
