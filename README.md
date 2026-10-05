# Malu Hair Studio

Site institucional e portfólio do Malu Hair Studio, salão de beleza em Botucatu (SP), com apresentação do trabalho de Marcinha e Lucy, contato direto, Instagram, localização e mapa.

## Desenvolvimento

```bash
npm install
npm run dev
```

O site abre em `http://127.0.0.1:5173` no ambiente de desenvolvimento.

## Qualidade

```bash
npm run quality
npm run test:e2e
npm run knip
npm run build
```

O projeto usa ESLint + Biome, ArchContract, Commitlint, Knip, Vitest, Playwright, Axe, Stryker e Codecov.

## Observabilidade

Sentry, Datadog RUM, New Relic Browser e OpenTelemetry são inicializados apenas quando suas variáveis estão configuradas. Copie `.env.example` para `.env.local` e preencha somente os provedores que serão usados. Nenhum token deve ser commitado.

## Conteúdo visual

Os espaços de imagens são intencionais. Quando as fotos reais estiverem disponíveis, substitua cada bloco mantendo suas proporções e texto alternativo descritivo.

## Fluxo de contribuição

As alterações são feitas diretamente na `main`: valide o projeto, crie um commit Conventional Commits e envie com `git push origin main`. Issues e Pull Requests são usados apenas quando solicitados.
