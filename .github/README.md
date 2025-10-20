# 🚀 GitHub Actions CI/CD Setup

O Vertex Toolkit agora utiliza **GitHub Actions** para automação completa de CI/CD, proporcionando um processo de desenvolvimento mais profissional e seguro.

## 🔄 Workflows Configurados

### 1. **CI Pipeline** (`.github/workflows/ci.yml`)
**Executa em**: Todos os pushes e PRs para `main`

- ✅ **Testes em múltiplas versões** do Node.js (16, 18, 20)
- ✅ **Build do projeto** e verificação de tipos
- ✅ **Auditoria de segurança** automática
- ✅ **Lint e formatação** (quando configurado)
- ✅ **Upload de artifacts** da build

### 2. **Release & Publish** (`.github/workflows/release.yml`)
**Executa em**: Tags de versão (ex: `v1.0.5`)

- 🏷️ **Cria release automático** no GitHub
- 📦 **Publica no NPM** automaticamente
- 📝 **Extrai changelog** da versão
- 🔗 **Gera links** e informações da release

### 3. **Auto Version** (`.github/workflows/version.yml`)
**Executa em**: Manualmente via GitHub UI

- 🎯 **Interface amigável** para escolher tipo de versão
- 📊 **Bump automático** de versão (patch/minor/major)
- 📝 **Atualiza CHANGELOG.md** automaticamente
- 🏷️ **Cria tag** e dispara o workflow de release

### 4. **Maintenance** (`.github/workflows/maintenance.yml`)
**Executa em**: Semanalmente (segundas-feiras)

- 🔍 **Verifica dependências** desatualizadas
- 🛡️ **Auditoria de segurança** automática
- 📋 **Cria issues** para manutenção necessária
- 🏥 **Health check** da build

### 5. **Dependabot** (`.github/dependabot.yml`)
**Executa em**: Semanalmente

- 🔄 **Atualiza dependências** automaticamente
- 🔧 **Atualiza GitHub Actions** para versões mais recentes
- 📬 **Cria PRs** organizados e rotulados

## 🎯 Como Usar o Novo Sistema

### Para Desenvolver:

```bash
# Desenvolvimento local (como sempre)
npm run dev          # Watch mode
npm run build        # Build local
npm run check        # Verificar se está pronto
```

### Para Publicar uma Nova Versão:

#### Método 1: Via GitHub UI (Recomendado) 🌟

1. **Acesse**: [Actions > Auto Version & Release](https://github.com/jhonbergmann/vertex-toolkit/actions/workflows/version.yml)
2. **Clique**: "Run workflow"
3. **Escolha**:
   - **Version type**: `patch` (bugfix), `minor` (features), `major` (breaking)
   - **Release notes**: Descreva as mudanças (opcional)
4. **Execute**: O workflow vai:
   - ✅ Fazer bump da versão
   - ✅ Atualizar CHANGELOG.md
   - ✅ Criar commit e tag
   - ✅ Disparar publicação automática

#### Método 2: Via Git Tags (Tradicional)

```bash
# Commit suas mudanças
git add .
git commit -m "feat: adicionar nova funcionalidade"

# Criar tag de versão
git tag v1.0.5
git push origin main --tags

# O GitHub Actions automaticamente:
# 1. Criará release no GitHub
# 2. Publicará no NPM
# 3. Enviará notificações
```

### Para Contribuir:

1. **Fork** e clone o repositório
2. **Crie branch**: `git checkout -b feature/minha-feature`
3. **Faça as mudanças** e commit
4. **Push**: `git push origin feature/minha-feature`
5. **Abra PR**: Use o template automático
6. **CI roda automaticamente** ✅
7. **Após aprovação**: Merge automático

## 🔧 Configuração Necessária

### Secrets do GitHub (Para Maintainers)

```bash
# 1. Gerar token do NPM
npm login
npm token create --read-only=false

# 2. Adicionar secret no GitHub:
# Settings > Secrets and variables > Actions > New repository secret
# Name: NPM_TOKEN
# Value: [seu-token-npm]
```

### Configuração Local (Para Desenvolvimento)

```bash
# Clone o repositório
git clone https://github.com/jhonbergmann/vertex-toolkit.git
cd vertex-toolkit

# Instale dependências
npm install

# Configure git (se necessário)
git config user.name "Seu Nome"
git config user.email "seu.email@example.com"

# Desenvolvimento
npm run dev
```

## 📊 Vantagens do Novo Sistema

### ✅ **Automação Completa**
- Zero intervenção manual para releases
- Processo consistente e confiável
- Reduz erros humanos

### ✅ **Qualidade Garantida**
- Testes automáticos em múltiplas versões
- Verificação de tipos TypeScript
- Auditoria de segurança contínua

### ✅ **Manutenção Proativa**
- Dependências sempre atualizadas
- Issues automáticos para manutenção
- Monitoramento de vulnerabilidades

### ✅ **Experiência Profissional**
- Releases bem documentados
- Changelog automático
- Templates para issues e PRs

### ✅ **Transparência Total**
- Todos os processos visíveis no GitHub
- Histórico completo de builds
- Status claro de cada etapa

## 🎛️ Controles Disponíveis

### Via GitHub Interface:

- **Manual Release**: Crie releases quando quiser
- **Dependabot**: Configure frequência de updates
- **Branch Protection**: Configure regras de merge
- **Required Reviews**: Configure aprovações obrigatórias

### Via Código:

- **Workflows**: Modifique `.github/workflows/`
- **Templates**: Customize `.github/ISSUE_TEMPLATE/`
- **Dependabot**: Configure `.github/dependabot.yml`

## 🚨 Troubleshooting

### Build Failing?
1. Check o log no Actions tab
2. Rode `npm run check` localmente
3. Verifique se tipos TypeScript estão corretos

### NPM Publish Failing?
1. Verifique se `NPM_TOKEN` está configurado
2. Confirme se versão não existe ainda
3. Check se build está gerando arquivos corretos

### Workflow Não Executando?
1. Verifique se está na branch `main`
2. Confirme se tag tem formato correto (`v1.0.0`)
3. Check permissões do repositório

## 📈 Próximos Passos

### Melhorias Futuras:
- [ ] **Testes unitários** (Jest/Vitest)
- [ ] **ESLint + Prettier** configuration
- [ ] **Codecov** integration
- [ ] **Performance benchmarks**
- [ ] **E2E testing** em diferentes ambientes
- [ ] **Automated changelog** generation
- [ ] **Slack/Discord** notifications

---

## 🎉 Resultado

Agora você tem um sistema de CI/CD **enterprise-grade** que:

1. **🔄 Automatiza todo o processo** de desenvolvimento → produção
2. **🛡️ Garante qualidade** com testes e validações
3. **📦 Simplifica releases** com interface amigável
4. **🔧 Mantém dependências** sempre atualizadas
5. **📊 Fornece visibilidade** total do processo

**Para publicar uma nova versão agora**: Apenas vá em Actions → Auto Version & Release → Run workflow! 🚀