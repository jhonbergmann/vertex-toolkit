# Vertex Toolkit 🛠️

A comprehensive toolkit library with validations, masks, formatters and utilities for React, React Native and Next.js projects.

## 🚀 Installation

```bash
npm install @vertex/toolkit
# or
yarn add @vertex/toolkit
```

## Highlights

- **TypeScript**: Fully typed
- **Cross-platform**: Browser, React, React Native, Next.js
- **Zero dependencies**: Lightweight and performant
- **Tested**: Robust validations and smoke tests
- **Documented**: Complete examples and guides
- **Modular**: Import only what you need
- **Credit Cards**: Number, CVV, expiry date
- **Dates**: BR/US formats, age, future/past dates
- **Passwords**: Strength, customizable requirements
- **URLs**: Complete validation, HTTPS, domains, IPs
- **Strings**: Alpha, alphanumeric, JSON, Base64, etc.

```typescript
import { validations } from '@vertex/toolkit';

// brazilian documents
validations.isValidCPF('123.456.789-00');
validations.isValidCNPJ('12.345.678/0001-90');
validations.isValidCEP('01234-567');

// email and phone
validations.isValidEmail('user@example.com');
validations.isValidBrazilianPhone('(11) 99999-9999');

// credit cards
validations.isValidCreditCard('4111111111111111');
validations.getCreditCardType('4111111111111111'); // 'Visa'

// passwords
validations.validatePasswordStrength('MyPass@123');
validations.isValidPassword('MyPass@123', {
  minLength: 8,
  requireSpecialChars: true
});
```

### 🎭 Masks

Masks for data input formatting:

```typescript
import { masks } from '@vertex/toolkit';

// documents
masks.applyCPFMask('12345678900'); // '123.456.789-00'
masks.applyCNPJMask('12345678000190'); // '12.345.678/0001-90'
masks.applyCEPMask('12345678'); // '12345-678'

// phones
masks.applyBrazilianPhoneMask('11999999999'); // '(11) 99999-9999'
masks.applyUSPhoneMask('1234567890'); // '(123) 456-7890'

// credit cards
masks.applyCreditCardMask('1234567890123456'); // '1234 5678 9012 3456'
masks.applyExpiryDateMask('1225'); // '12/25'

// dates
masks.applyDateMaskBR('12012023'); // '12/01/2023'
masks.applyTimeMask('1430'); // '14:30'

// currency
masks.applyCurrencyMaskBR(1234.56); // 'R$ 1.234,56'
masks.applyPercentageMask(15.5); // '15,50%'
```

### 🎨 Formatters

Advanced formatting for strings, numbers and dates:

```typescript
import { formatters } from '@vertex/toolkit';

// strings
formatters.toCamelCase('my example string'); // 'myExampleString'
formatters.toPascalCase('my example string'); // 'MyExampleString'
formatters.toKebabCase('MyExampleString'); // 'my-example-string'
formatters.slugify('My String with Accents!'); // 'my-string-with-accents'

// numbers
formatters.toOrdinal(21); // '21st'
formatters.numberToWords(123); // 'one hundred twenty three'
formatters.formatFileSize(1024); // '1 KB'
formatters.toRoman(2023); // 'MMXXIII'

// dates
formatters.formatRelativeTime(new Date()); // 'just now'
formatters.formatDateBR(new Date()); // '17/10/2025'
formatters.calculateAge('1990-05-15'); // 35
formatters.addTime(new Date(), 5, 'days'); // Date + 5 days
```

### 🧰 Utilities

Utility functions for arrays, objects, functions and more:

```typescript
import { utils } from '@vertex/toolkit';

// arrays
utils.unique([1, 2, 2, 3]); // [1, 2, 3]
utils.groupBy(users, 'age'); // { '25': [...], '30': [...] }
utils.chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
utils.shuffle([1, 2, 3, 4, 5]); // [3, 1, 5, 2, 4]

// objects
utils.deepClone(complexObject);
utils.get(obj, 'user.address.street', 'N/A');
utils.omit(user, ['password', 'secret']);

// functions
const debouncedSearch = utils.debounce(searchFunction, 300);
const throttledScroll = utils.throttle(scrollHandler, 100);
const memoizedCalc = utils.memoize(expensiveCalculation);

// random
utils.generateUUID(); // 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
utils.randomString(8); // 'aB3xK9mZ'
utils.randomHexColor(); // '#ff6b35'

// storage
utils.storage.set('user', { name: 'John' });
const user = await utils.storage.get('user');
```

### 🎲 Test Generators

Data generators for testing and development:

```typescript
import { generators } from '@vertex/toolkit';

// valid documents
generators.generateCPF(); // '12345678900'
generators.generateCNPJ(); // '12345678000190'
generators.generateCEP(); // '01234567'

// personal data
const person = generators.generatePerson();
/*
{
  firstName: 'John',
  lastName: 'Silva',
  fullName: 'John Silva',
  gender: 'male',
  birthDate: '15/05/1990',
  cpf: '12345678900',
  email: 'john.silva123@example.com',
  phone: '11999999999',
  cep: '01234567'
}
*/

// company data
const company = generators.generateCompany();
/*
{
  name: 'Innovation Tech Ltd',
  cnpj: '12345678000190',
  email: 'contact@innovation.com',
  phone: '1133334444',
  cep: '01234567'
}
*/
```

## � Features

- ✅ **TypeScript**: Fully typed
- 📱 **Cross-platform**: React, React Native, Next.js
- 🎯 **Zero dependencies**: Lightweight and performant
- 🧪 **Tested**: Robust validations
- 📚 **Documented**: Complete examples and guides
- 🔧 **Modular**: Import only what you need

## 📖 Complete Documentation

For more examples and complete documentation, visit [our documentation](https://github.com/vertex/toolkit).

## 🤝 Contributing

Contributions are welcome! See our [contribution guide](CONTRIBUTING.md).

## 📄 License

MIT © [Vertex](https://github.com/vertex)

## 🔗 Useful Links

- [Documentation](https://github.com/vertex/toolkit)
- [Examples](https://github.com/vertex/toolkit/examples)
- [Issues](https://github.com/vertex/toolkit/issues)
- [Changelog](CHANGELOG.md)