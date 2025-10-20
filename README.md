# Vertex Toolkit 🛠️

A comprehensive TypeScript toolkit with validations, masks, formatters and utilities for React, React Native and Next.js projects.

## 🚀 Quick Start

```bash
npm install vertex-toolkit
```

```typescript
import { validations, masks, formatters, utils } from 'vertex-toolkit';

// Validate and format Brazilian documents
const cpf = masks.applyCPFMask('12345678909'); // '123.456.789-09'
const isValid = validations.isValidCPF(cpf); // true

// Format strings and generate data
const slug = formatters.slugify('My Title!'); // 'my-title'
const uuid = utils.generateUUID(); // 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
```

## ✨ Features

- **🔍 Validations**: CPF, CNPJ, email, phone, credit cards, passwords, URLs
- **🎭 Masks**: Document formatting, phone numbers, currency, dates
- **🎨 Formatters**: String cases, numbers, dates, file sizes  
- **🛠️ Utilities**: Arrays, objects, functions, random generators
- **🎲 Test Data**: Generate valid CPF/CNPJ and fake user data
- **💪 TypeScript**: Fully typed with zero dependencies
- **📱 Cross-platform**: Browser, Node.js, React Native

## 📚 Documentation

- **[Getting Started](docs/GETTING_STARTED.md)** - Complete setup guide
- **[Examples](docs/EXAMPLES.md)** - Real-world usage examples  
- **[API Reference](docs/README.md)** - Full documentation

## 🎯 Quick Examples

### Validations
```typescript
validations.isValidCPF('123.456.789-09'); // true
validations.isValidEmail('user@example.com'); // true
validations.isValidCreditCard('4111111111111111'); // true
```

### Masks
```typescript
masks.applyCPFMask('12345678909'); // '123.456.789-09'
masks.applyBrazilianPhoneMask('11999999999'); // '(11) 99999-9999'
masks.applyCurrencyMaskBR(1234.56); // 'R$ 1.234,56'
```

### Formatters
```typescript
formatters.toCamelCase('my string'); // 'myString'
formatters.toOrdinal(21); // '21st'
formatters.formatFileSize(1024); // '1 KB'
```

### Utilities
```typescript
utils.unique([1, 2, 2, 3]); // [1, 2, 3]
utils.debounce(fn, 300); // Debounced function
utils.generateUUID(); // UUID v4
```

## 📦 What's Included

- **190+ utility functions**
- **Zero external dependencies** 
- **Tree-shakable exports** for optimal bundle size
- **Complete TypeScript definitions**
- **Comprehensive test coverage**

## 🤝 Contributing

Contributions are welcome! We use GitHub Actions for automated CI/CD. Simply fork, make your changes, and create a PR. Our automated workflows will handle testing and validation.

See our [contribution guidelines](CONTRIBUTING.md) for more details.

## 🔄 Automated CI/CD

This project uses **GitHub Actions** for:
- ✅ Automated testing on multiple Node.js versions
- 🔒 Security audits and dependency updates  
- 📦 Automatic NPM publishing on version tags
- 🏷️ GitHub releases with auto-generated changelogs

**For Maintainers**: Use [GitHub Actions workflow](https://github.com/jhonbergmann/vertex-toolkit/actions/workflows/version.yml) to create new releases with a single click!

## 📄 License

MIT © [Vertex Team](https://github.com/jhonbergmann) - see the [LICENSE](LICENSE) file for details.

---

**[📖 Full Documentation](docs/README.md)** | **[🚀 Getting Started](docs/GETTING_STARTED.md)** | **[💡 Examples](docs/EXAMPLES.md)** | **[📝 Changelog](CHANGELOG.md)** | **[� CI/CD Guide](.github/README.md)**