# 🚀 GitHub Actions CI/CD Setup

Vertex Toolkit now uses **GitHub Actions** for complete CI/CD automation, providing a more professional and secure development process.

## 🔄 Configured Workflows

### 1. **CI Pipeline** (`.github/workflows/ci.yml`)
**Runs on**: All pushes and PRs to `main`

- ✅ **Multi-version testing** with Node.js (16, 18, 20)
- ✅ **Project build** and type checking
- ✅ **Automated security audit**
- ✅ **Lint and formatting** (when configured)
- ✅ **Build artifacts upload**

### 2. **Release & Publish** (`.github/workflows/release.yml`)
**Runs on**: Version tags (e.g., `v1.0.5`)

- 🏷️ **Creates automatic release** on GitHub
- 📦 **Publishes to NPM** automatically
- 📝 **Extracts changelog** from version
- 🔗 **Generates links** and release information

### 3. **Auto Version** (`.github/workflows/version.yml`)
**Runs on**: Manually via GitHub UI

- 🎯 **User-friendly interface** to choose version type
- 📊 **Automatic version bump** (patch/minor/major)
- 📝 **Updates CHANGELOG.md** automatically
- 🏷️ **Creates tag** and triggers release workflow

### 4. **Maintenance** (`.github/workflows/maintenance.yml`)
**Runs on**: Weekly (Mondays)

- 🔍 **Checks outdated dependencies**
- 🛡️ **Automated security audit**
- 📋 **Creates issues** for necessary maintenance
- 🏥 **Build health check**

### 5. **Dependabot** (`.github/dependabot.yml`)
**Runs on**: Weekly

- 🔄 **Updates dependencies** automatically
- 🔧 **Updates GitHub Actions** to newer versions
- 📬 **Creates organized** and labeled PRs

## 🎯 How to Use the New System

### For Development:

```bash
# Local development (as always)
npm run dev          # Watch mode
npm run build        # Local build
npm run check        # Verify if ready
```

### To Publish a New Version:

#### Method 1: Via GitHub UI (Recommended) 🌟

1. **Access**: [Actions > Auto Version & Release](https://github.com/jhonbergmann/vertex-toolkit/actions/workflows/version.yml)
2. **Click**: "Run workflow"
3. **Choose**:
   - **Version type**: `patch` (bugfix), `minor` (features), `major` (breaking)
   - **Release notes**: Describe the changes (optional)
4. **Execute**: The workflow will:
   - ✅ Bump the version
   - ✅ Update CHANGELOG.md
   - ✅ Create commit and tag
   - ✅ Trigger automatic publication

#### Method 2: Via Git Tags (Traditional)

```bash
# Commit your changes
git add .
git commit -m "feat: add new functionality"

# Create version tag
git tag v1.0.5
git push origin main --tags

# GitHub Actions will automatically:
# 1. Create release on GitHub
# 2. Publish to NPM
# 3. Send notifications
```

### To Contribute:

1. **Fork** and clone the repository
2. **Create branch**: `git checkout -b feature/my-feature`
3. **Make changes** and commit
4. **Push**: `git push origin feature/my-feature`
5. **Open PR**: Use the automatic template
6. **CI runs automatically** ✅
7. **After approval**: Automatic merge

## 🔧 Required Configuration

### GitHub Secrets (For Maintainers)

```bash
# 1. Generate NPM token
npm login
npm token create --read-only=false

# 2. Add secret on GitHub:
# Settings > Secrets and variables > Actions > New repository secret
# Name: NPM_TOKEN
# Value: [your-npm-token]
```

### Local Configuration (For Development)

```bash
# Clone the repository
git clone https://github.com/jhonbergmann/vertex-toolkit.git
cd vertex-toolkit

# Install dependencies
npm install

# Configure git (if necessary)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Development
npm run dev
```

## 📊 Advantages of the New System

### ✅ **Complete Automation**
- Zero manual intervention for releases
- Consistent and reliable process
- Reduces human errors

### ✅ **Guaranteed Quality**
- Automatic tests on multiple versions
- TypeScript type checking
- Continuous security auditing

### ✅ **Proactive Maintenance**
- Dependencies always updated
- Automatic issues for maintenance
- Vulnerability monitoring

### ✅ **Professional Experience**
- Well-documented releases
- Automatic changelog
- Templates for issues and PRs

### ✅ **Complete Transparency**
- All processes visible on GitHub
- Complete build history
- Clear status of each step

## 🎛️ Available Controls

### Via GitHub Interface:

- **Manual Release**: Create releases whenever you want
- **Dependabot**: Configure update frequency
- **Branch Protection**: Configure merge rules
- **Required Reviews**: Configure mandatory approvals

### Via Code:

- **Workflows**: Modify `.github/workflows/`
- **Templates**: Customize `.github/issue_template/`
- **Dependabot**: Configure `.github/dependabot.yml`

## 🚨 Troubleshooting

### Build Failing?
1. Check the log in the Actions tab
2. Run `npm run check` locally
3. Verify TypeScript types are correct

### NPM Publish Failing?
1. Check if `NPM_TOKEN` is configured
2. Confirm if version doesn't exist yet
3. Check if build is generating correct files

### Workflow Not Running?
1. Check if you're on the `main` branch
2. Confirm tag has correct format (`v1.0.0`)
3. Check repository permissions

## 📈 Next Steps

### Future Improvements:
- [ ] **Unit testing** (Jest/Vitest)
- [ ] **ESLint + Prettier** configuration
- [ ] **Codecov** integration
- [ ] **Performance benchmarks**
- [ ] **E2E testing** in different environments
- [ ] **Automated changelog** generation
- [ ] **Slack/Discord** notifications

---

## 🎉 Result

Now you have an **enterprise-grade** CI/CD system that:

1. **🔄 Automates the entire process** from development → production
2. **🛡️ Ensures quality** with tests and validations
3. **📦 Simplifies releases** with user-friendly interface
4. **🔧 Keeps dependencies** always updated
5. **📊 Provides complete visibility** of the process

**To publish a new version now**: Just go to Actions → Auto Version & Release → Run workflow! 🚀