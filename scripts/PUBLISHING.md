# 🚀 Publishing Guide

This guide explains how to publish new versions of Vertex Toolkit to NPM using the automated scripts.

## 📦 Available Scripts

### Quick Release Commands

```bash
# Patch release (1.0.3 → 1.0.4) - for bug fixes
npm run publish:patch

# Minor release (1.0.3 → 1.1.0) - for new features
npm run publish:minor

# Major release (1.0.3 → 2.0.0) - for breaking changes
npm run publish:major

# Default release (patch)
npm run release
```

### Manual Step-by-Step Commands

```bash
# 1. Clean and build
npm run clean
npm run build

# 2. Check what will be published
npm run check
# or
npm run publish:dry

# 3. Version bump only (without publishing)
npm run version:patch    # or version:minor, version:major

# 4. Publish manually
npm publish
```

## 🔄 Publishing Process

The automated scripts (`npm run publish:*`) perform these steps:

1. **🧹 Clean**: Remove old `dist/` folder
2. **🔨 Build**: Compile TypeScript to JavaScript
3. **✅ Validate**: Run dry-run to check package contents
4. **📊 Version**: Bump version number and create git tag
5. **📝 Changelog**: Add new version entry to CHANGELOG.md
6. **📦 Publish**: Upload package to NPM
7. **📤 Push**: Push changes and tags to git repository

## 📋 Pre-Publishing Checklist

Before running any publish command, ensure:

- [ ] **All changes are committed** to git
- [ ] **Working directory is clean** (no uncommitted changes)
- [ ] **Tests pass** (when available)
- [ ] **Documentation is updated**
- [ ] **CHANGELOG.md is ready** for new entries

## 🏷️ Version Types

### Patch (1.0.3 → 1.0.4)
- Bug fixes
- Documentation updates
- Performance improvements
- No breaking changes

```bash
npm run publish:patch
```

### Minor (1.0.3 → 1.1.0)
- New features
- New functions/utilities
- Backwards compatible changes

```bash
npm run publish:minor
```

### Major (1.0.3 → 2.0.0)
- Breaking changes
- API changes
- Function signature changes
- Remove deprecated features

```bash
npm run publish:major
```

## 📝 Changelog Management

The publish script automatically:

1. **Adds new version** to CHANGELOG.md
2. **Creates sections** for Added, Changed, Fixed
3. **Includes current date**
4. **Prompts you to fill in details**

After running the script, **remember to**:
1. Edit CHANGELOG.md with actual changes
2. Commit the changelog updates
3. The script will push everything automatically

## 🛠️ Manual Publishing

If you prefer manual control:

```bash
# 1. Build the project
npm run build

# 2. Test the package
npm run publish:dry

# 3. Update version manually
npm version patch  # or minor/major

# 4. Update CHANGELOG.md manually

# 5. Publish
npm publish

# 6. Push to git
git push origin main --tags
```

## 🔍 Troubleshooting

### Common Issues

**1. Working directory not clean**
```bash
git status
git add .
git commit -m "Your changes"
```

**2. NPM login required**
```bash
npm whoami
npm login
```

**3. Build fails**
```bash
npm run clean
npm install
npm run build
```

**4. Version already exists**
- Check existing versions: `npm view vertex-toolkit versions --json`
- Ensure you're bumping to the next available version

### Package Information

```bash
# Check current package info
npm view vertex-toolkit

# Check local package info
npm list vertex-toolkit

# Check who you're logged in as
npm whoami
```

## 📊 Post-Publishing

After successful publishing:

1. **✅ Verify on NPM**: https://www.npmjs.com/package/vertex-toolkit
2. **🔗 Update documentation** if needed
3. **📢 Announce** in relevant channels
4. **🎉 Celebrate** your contribution!

## ⚡ Quick Commands Reference

```bash
# Development
npm run dev          # Watch mode for development
npm run build        # Build for production
npm run clean        # Clean dist folder

# Testing & Validation
npm run check        # Build + dry-run
npm run publish:dry  # Preview what will be published

# Publishing
npm run release      # Default (patch) release
npm run publish:patch   # Bug fix release
npm run publish:minor   # Feature release  
npm run publish:major   # Breaking change release

# Version only (no publish)
npm run version:patch
npm run version:minor
npm run version:major
```

## 🎯 Best Practices

1. **Always test locally** before publishing
2. **Keep CHANGELOG.md updated** with meaningful descriptions
3. **Use semantic versioning** correctly
4. **Test the package** after publishing: `npm install vertex-toolkit`
5. **Review package contents** with `npm run publish:dry`
6. **Document breaking changes** clearly
7. **Keep git history clean** with meaningful commit messages

---

**Happy Publishing!** 🚀📦