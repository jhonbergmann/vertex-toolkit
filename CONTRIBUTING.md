# Contributing to Vertex Toolkit

Thank you for your interest in contributing to Vertex Toolkit! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

Before creating an issue, please:

1. **Search existing issues** to avoid duplicates
2. **Use a clear and descriptive title**
3. **Provide detailed information** including:
   - Steps to reproduce the issue
   - Expected vs actual behavior
   - Environment details (Node.js version, browser, etc.)
   - Code examples when applicable

### Suggesting Features

We welcome feature suggestions! Please:

1. **Check if the feature already exists** in the documentation
2. **Search existing feature requests** to avoid duplicates
3. **Provide a clear use case** and explain the benefit
4. **Consider the scope** - features should align with the toolkit's purpose

### Code Contributions

#### Getting Started

1. **Fork the repository**
2. **Clone your fork**: `git clone https://github.com/your-username/vertex-toolkit.git`
3. **Install dependencies**: `npm install`
4. **Create a branch**: `git checkout -b feature/your-feature-name`

#### Development Workflow

1. **Make your changes** following our coding standards
2. **Build the project**: `npm run build`
3. **Test your changes**: `npm test` (when tests are available)
4. **Update documentation** if needed
5. **Commit your changes** with a clear message
6. **Push to your fork**: `git push origin feature/your-feature-name`
7. **Create a Pull Request**

## 📝 Coding Standards

### TypeScript Guidelines

- **Use TypeScript** for all new code
- **Provide complete type definitions** for all public APIs
- **Use strict TypeScript settings** (already configured)
- **Avoid `any` types** unless absolutely necessary
- **Use meaningful variable and function names**

### Code Style

- **Follow existing patterns** in the codebase
- **Use consistent formatting** (we recommend using Prettier)
- **Add JSDoc comments** for public functions
- **Keep functions small and focused**
- **Use descriptive commit messages**

### File Organization

```
src/
├── validations/     # Validation functions
├── masks/          # Input mask utilities
├── formatters/     # Formatting utilities
├── utils/          # General utilities
├── generators/     # Test data generators
└── index.ts        # Main exports
```

### Function Structure

Each module should follow this pattern:

```typescript
/**
 * Brief description of what the function does
 * @param param1 Description of parameter
 * @param param2 Description of parameter
 * @returns Description of return value
 * @example
 * ```typescript
 * const result = myFunction('example');
 * console.log(result); // Expected output
 * ```
 */
export function myFunction(param1: string, param2?: number): boolean {
  // Implementation
  return true;
}
```

## 🧪 Testing

### Adding Tests

- **Write tests** for new functions (when test framework is added)
- **Test edge cases** and error conditions
- **Ensure existing tests pass** before submitting
- **Add functional tests** to `test.js` for smoke testing

### Test Examples

```typescript
// Example functional test
console.log('Testing CPF validation...');
console.assert(validations.isValidCPF('123.456.789-09'), 'Valid CPF should return true');
console.assert(!validations.isValidCPF('000.000.000-00'), 'Invalid CPF should return false');
```

## 📚 Documentation

### Required Documentation

- **JSDoc comments** for all public functions
- **README updates** for new features
- **Example usage** in relevant documentation
- **Type definitions** must be complete and accurate

### Documentation Style

- **Use clear, concise language**
- **Provide practical examples**
- **Include expected outputs** in examples
- **Document edge cases** and limitations

## 🚀 Pull Request Process

### Before Submitting

- [ ] Code follows the style guidelines
- [ ] Self-review of the code has been performed
- [ ] Code is properly commented
- [ ] Documentation has been updated
- [ ] Build passes: `npm run build`
- [ ] No breaking changes (or clearly documented)

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] I have tested these changes
- [ ] All existing tests pass
- [ ] I have added new tests (if applicable)

## Documentation
- [ ] I have updated the documentation
- [ ] I have added JSDoc comments
- [ ] I have added examples (if applicable)
```

### Review Process

1. **Automated checks** must pass (build, linting)
2. **Code review** by maintainers
3. **Discussion** and feedback incorporation
4. **Approval** and merge by maintainers

## 🛠️ Development Setup

### Prerequisites

- **Node.js 14+**
- **npm or yarn**
- **TypeScript knowledge**
- **Git**

### Local Development

```bash
# Clone the repository
git clone https://github.com/jhonbergmann/vertex-toolkit.git

# Install dependencies
npm install

# Start development mode
npm run dev

# Build the project
npm run build

# Run tests (when available)
npm test
```

### Project Structure

```
vertex-toolkit/
├── src/                 # Source code
├── dist/               # Built files (generated)
├── docs/               # Documentation
├── .gitignore         # Git ignore rules
├── LICENSE            # MIT License
├── README.md          # Main documentation
├── package.json       # Project configuration
├── tsconfig.json      # TypeScript configuration
└── tsconfig.esm.json  # ESM TypeScript configuration
```

## 🎯 Contribution Areas

### High Priority

- **Bug fixes** in existing functionality
- **Performance improvements**
- **Additional validation functions**
- **More formatting utilities**
- **Better error handling**

### Medium Priority

- **New mask functions**
- **Additional utility functions**
- **Documentation improvements**
- **Example applications**

### Future Enhancements

- **React hooks package** (separate package)
- **Vue.js integration**
- **Additional locale support**
- **Performance benchmarks**

## 📞 Getting Help

### Questions and Discussions

- **GitHub Issues** for bug reports and feature requests
- **GitHub Discussions** for questions and general discussion
- **Email** maintainer at jhonbergmann@gmail.com

### Resources

- **[Getting Started Guide](docs/GETTING_STARTED.md)**
- **[API Documentation](docs/README.md)**
- **[Examples](docs/EXAMPLES.md)**
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)**

## 📋 Code of Conduct

### Our Standards

- **Be respectful** and inclusive
- **Be constructive** in feedback
- **Focus on the code**, not the person
- **Help others learn** and grow
- **Follow project guidelines**

### Unacceptable Behavior

- **Harassment** or discrimination
- **Inappropriate** language or content
- **Personal attacks** or insults
- **Spam** or off-topic discussions

## 🙏 Recognition

Contributors will be:

- **Listed in the project** contributors
- **Credited in release notes** for significant contributions
- **Thanked in the community** for their help

## 📜 License

By contributing to Vertex Toolkit, you agree that your contributions will be licensed under the **MIT License**.

---

**Thank you for contributing to Vertex Toolkit!** 🎉

Your contributions help make this toolkit better for developers worldwide.