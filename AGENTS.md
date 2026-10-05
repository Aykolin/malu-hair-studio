# Malu Hair Studio — instruções permanentes do projeto

## Fluxo obrigatório de trabalho

Toda alteração deve começar por uma Issue no GitHub, classificada como uma destas categorias:

- `correction`: correção de comportamento, conteúdo ou regressão;
- `improvement`: melhoria de experiência, performance, acessibilidade ou manutenção;
- `feature`: nova função, integração, página ou capacidade.

Depois da Issue:

1. crie uma branch no padrão `tipo/numero-resumo` (ex.: `feature/12-galeria-real`);
2. faça commits no padrão Conventional Commits;
3. abra um Pull Request para `main`;
4. mencione a Issue na descrição com `Closes #<número>`;
5. aguarde lint, arquitetura, testes e build passarem;
6. faça deploy somente a partir do PR revisado/aprovado ou após seu merge, nunca por mudança solta em `main`.

Não faça push direto em `main`. Mudanças emergenciais continuam exigindo Issue e PR.

## Design e motion

- A identidade é preto, branco e dourado metálico com brilho/degradê; mantenha o visual profissional, minimalista e sofisticado.
- Use a skill `design-motion-principles` quando estiver disponível.
- Para esta landing page, priorize a lente de Jakub Krehel (polimento de produção), use Jhey Tompkins seletivamente em momentos editoriais e aplique a restrição de Emil Kowalski em interações frequentes.
- Toda animação precisa ter propósito, usar preferencialmente `transform`, `opacity` ou `filter`, ser interrompível quando interativa e respeitar `prefers-reduced-motion`.
- Não use loops de atenção, pulso contínuo, bounce chamativo, `scale(0)` ou easing CSS genérico.
- Toda nova interface deve incluir estados coerentes de loading/skeleton, vazio, erro, sucesso e progresso quando aplicáveis.
- Imagens reais serão adicionadas depois; preserve os blocos de proporção e não substitua fotografias por SVGs ou ilustrações artificiais.

## Qualidade obrigatória

Antes de concluir qualquer tarefa, execute os checks proporcionais à mudança:

- `npm run lint`
- `npm run typecheck`
- `npm run arch:check`
- `npm test`
- `npm run test:e2e` para mudanças de interface ou fluxo
- `npm run build`

Mantenha cobertura no Codecov, Biome e ESLint sem erros, contratos de arquitetura válidos, análise Knip revisada e testes de mutação Stryker para módulos com lógica relevante.

## Observabilidade

Preserve a inicialização condicional e sem PII de Sentry, Datadog RUM, New Relic Browser e OpenTelemetry. Nunca grave tokens ou DSNs no repositório; use variáveis de ambiente conforme `.env.example`.

<!-- arch-contract-agent-contract:start -->
After changes, run `npm run arch:check` and fix every architecture violation before completion.
<!-- arch-contract-agent-contract:end -->
