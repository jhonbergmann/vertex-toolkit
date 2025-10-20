# Examples - Vertex Toolkit

## Installation

```bash
npm install vertex-toolkit
```

## Validators

### Brazilian Documents

```typescript
import { validations } from 'vertex-toolkit';

// CPF
console.log(validations.isValidCPF('123.456.789-09')); // true
console.log(validations.isValidCPF('123.456.789-00')); // false

// CNPJ
console.log(validations.isValidCNPJ('11.222.333/0001-81')); // true
console.log(validations.isValidCNPJ('11.222.333/0001-80')); // false

// CEP
console.log(validations.isValidCEP('01234-567')); // true
console.log(validations.isValidCEP('012345678')); // true
console.log(validations.isValidCEP('1234')); // false
```

### Email and Phone

```typescript
// Email
console.log(validations.isValidEmail('user@example.com')); // true
console.log(validations.isValidEmail('invalid-email')); // false

// Brazilian Phone
console.log(validations.isValidBrazilianPhone('(11) 99999-9999')); // true (mobile)
console.log(validations.isValidBrazilianPhone('(11) 3333-4444')); // true (landline)
console.log(validations.isValidBrazilianPhone('11999999999')); // true (unformatted)

// US Phone
console.log(validations.isValidUSPhone('(555) 123-4567')); // true
```

### Credit Card

```typescript
// Luhn validation
console.log(validations.isValidCreditCard('4111111111111111')); // true (Visa test)
console.log(validations.isValidCreditCard('1234567890123456')); // false

// Card brand
console.log(validations.getCreditCardType('4111111111111111')); // 'Visa'
console.log(validations.getCreditCardType('5555555555554444')); // 'Mastercard'

// CVV
console.log(validations.isValidCVV('123')); // true
console.log(validations.isValidCVV('1234')); // true (Amex)

// Expiry
console.log(validations.isValidCreditCardExpiry('12/25')); // true (if future)
console.log(validations.isValidCreditCardExpiry('01/20')); // false (past)
```

### Passwords

```typescript
// Password strength
console.log(validations.validatePasswordStrength('123456')); // 'weak'
console.log(validations.validatePasswordStrength('MyPass@123')); // 'strong'

// Custom validation
console.log(validations.isValidPassword('MyPass@123', {
  minLength: 8,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecialChars: true
})); // true

// Common patterns
console.log(validations.hasCommonPasswordPatterns('password123')); // true
console.log(validations.hasCommonPasswordPatterns('MyPass@123')); // false
```

## Masks

### Documents

```typescript
import { masks } from 'vertex-toolkit';

// CPF
console.log(masks.applyCPFMask('12345678909')); // '123.456.789-09'
console.log(masks.removeCPFMask('123.456.789-09')); // '12345678909'

// CNPJ
console.log(masks.applyCNPJMask('12345678000181')); // '12.345.678/0001-81'

// CEP
console.log(masks.applyCEPMask('01234567')); // '01234-567'
```

### Phones

```typescript
// Brazilian
console.log(masks.applyBrazilianPhoneMask('11999999999')); // '(11) 99999-9999'
console.log(masks.applyBrazilianPhoneMask('1133334444')); // '(11) 3333-4444'

// US
console.log(masks.applyUSPhoneMask('5551234567')); // '(555) 123-4567'
```

### Credit Card

```typescript
// Card number
console.log(masks.applyCreditCardMask('4111111111111111')); // '4111 1111 1111 1111'

// Expiry date
console.log(masks.applyExpiryDateMask('1225')); // '12/25'

// CVV
console.log(masks.applyCVVMask('123abc')); // '123'
```

### Currency

```typescript
// Brazilian Real
console.log(masks.applyCurrencyMaskBR(1234.56)); // 'R$ 1.234,56'
console.log(masks.applyCurrencyMaskBR('1234.56', { prefix: 'BRL ' })); // 'BRL 1.234,56'

// US Dollar
console.log(masks.applyCurrencyMaskUS(1234.56)); // '$1,234.56'

// Percentage
console.log(masks.applyPercentageMask(15.5)); // '15,50%'
```

## Formatters

### Strings

```typescript
import { formatters } from 'vertex-toolkit';

const text = 'my example string';

console.log(formatters.toCamelCase(text)); // 'myExampleString'
console.log(formatters.toPascalCase(text)); // 'MyExampleString'
console.log(formatters.toKebabCase(text)); // 'my-example-string'
console.log(formatters.toSnakeCase(text)); // 'my_example_string'
console.log(formatters.toTitleCase(text)); // 'My Example String'

// Slug for URLs
console.log(formatters.slugify('Title with Accents!')); // 'title-with-accents'
```

### Numbers

```typescript
// Ordinals
console.log(formatters.toOrdinal(1)); // '1st'
console.log(formatters.toOrdinal(22)); // '22nd'
console.log(formatters.toOrdinal(103)); // '103rd'

// Spelled out (English)
console.log(formatters.numberToWords(123)); // 'one hundred twenty three'

// File size
console.log(formatters.formatFileSize(1024)); // '1 KB'
console.log(formatters.formatFileSize(1048576)); // '1 MB'

// Roman
console.log(formatters.toRoman(2023)); // 'MMXXIII'
```

### Dates

```typescript
const now = new Date();
const birth = new Date('1990-05-15');

// Relative time
console.log(formatters.formatRelativeTime(now)); // 'just now'
console.log(formatters.formatRelativeTime(birth)); // 'X years ago'

// Date formats
console.log(formatters.formatDateBR(now)); // '17/10/2025'
console.log(formatters.formatDateUS(now)); // '10/17/2025'
console.log(formatters.formatDateISO(now)); // '2025-10-17'

// Calculations
console.log(formatters.calculateAge(birth)); // 35
console.log(formatters.getWeekdayName(now)); // 'Thursday' (or localized)
console.log(formatters.getMonthName(now)); // 'October' (or localized)

// Manipulation
const future = formatters.addTime(now, 5, 'days');
console.log(formatters.getDateDifference(now, future, 'days')); // 5
```

## Utilities

### Arrays

```typescript
import { utils } from 'vertex-toolkit';

const numbers = [1, 2, 2, 3, 3, 3, 4, 5];
const users = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Maria', age: 30 },
  { id: 3, name: 'Pedro', age: 25 }
];

// Unique
console.log(utils.unique(numbers)); // [1, 2, 3, 4, 5]
console.log(utils.uniqueBy(users, 'age')); // Removes duplicates by age

// Grouping
console.log(utils.groupBy(users, 'age'));
// { '25': [John, Pedro], '30': [Maria] }

// Sorting
console.log(utils.sortBy(users, 'name')); // Sort by name
console.log(utils.sortBy(users, 'age', 'desc')); // Sort by age (desc)

// Chunks
console.log(utils.chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]

// Shuffle
console.log(utils.shuffle([1, 2, 3, 4, 5])); // [3, 1, 5, 2, 4] (random)

// Sample
console.log(utils.sample([1, 2, 3, 4, 5])); // 3 (random)

// Range
console.log(utils.range(5)); // [0, 1, 2, 3, 4]
console.log(utils.range(2, 8, 2)); // [2, 4, 6]
```

### Objects

```typescript
const obj = {
  user: {
    name: 'John',
    address: {
      street: 'Street A',
      city: 'São Paulo'
    }
  },
  config: {
    theme: 'dark'
  }
};

// Safe access
console.log(utils.get(obj, 'user.name')); // 'John'
console.log(utils.get(obj, 'user.age', 0)); // 0 (default)

// Deep clone
const copy = utils.deepClone(obj);

// Deep merge
const config = utils.deepMerge(obj.config, { language: 'pt-BR' });

// Pick/Omit
console.log(utils.pick(obj.user, ['name'])); // { name: 'John' }
console.log(utils.omit(obj.user, ['address'])); // { name: 'John' }

// Flatten
const flat = utils.flattenObject(obj);
// { 'user.name': 'John', 'user.address.street': 'Street A', ... }
```

### Functions

```typescript
// Debounce
const search = utils.debounce((term) => {
  console.log('Searching:', term);
}, 300);

search('react'); // Executes only after 300ms without new calls

// Throttle
const scroll = utils.throttle(() => {
  console.log('Scroll detected');
}, 100);

// Memoize
const fibonacci = utils.memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

// Retry with backoff
async function apiCall() {
  const response = await fetch('/api/data');
  if (!response.ok) throw new Error('API Error');
  return response.json();
}

const result = await utils.retry(apiCall, 3, 1000); // 3 attempts, 1s initial
```

### Random

```typescript
// Random string
console.log(utils.randomString(8)); // 'aB3xK9mZ'
console.log(utils.randomString(6, '0123456789')); // '194857' (numbers only)

// Numbers
console.log(utils.randomNumber(1, 100)); // 42
console.log(utils.randomFloat(0, 1)); // 0.7234

// UUID
console.log(utils.generateUUID()); // 'f47ac10b-58cc-4372-a567-0e02b2c3d479'

// Colors
console.log(utils.randomHexColor()); // '#ff6b35'
console.log(utils.randomRGBColor()); // { r: 255, g: 107, b: 53 }

// Weighted selection
const fruits = ['apple', 'banana', 'orange'];
const weights = [50, 30, 20]; // apple more likely
console.log(utils.weightedRandom(fruits, weights)); // 'apple' (more likely)
```

### Storage

```typescript
// Simple storage
await utils.storage.set('user', { name: 'John', age: 30 });
const user = await utils.storage.get('user');
console.log(user); // { name: 'John', age: 30 }

// Custom storage
const customStorage = utils.createStorage(utils.sessionStorageAdapter);
await customStorage.set('session', { token: 'abc123' });
```

## React Hooks

### Mask Hook

```typescript
import React from 'react';
import { react, masks } from 'vertex-toolkit';

function CPFInput() {
  const cpf = react.useMask('', masks.applyCPFMask);

  return (
    <input
      type="text"
      value={cpf.value}
      onChange={(e) => cpf.onChange(e.target.value)}
      placeholder="000.000.000-00"
      maxLength={14}
    />
  );
}
```

### Validation Hook

```typescript
function SignupForm() {
  const form = react.useValidation(
    {
      name: '',
      email: '',
      password: ''
    },
    {
      name: (value) => value.length >= 2 ? null : 'Name too short',
      email: (value) => validations.isValidEmail(value) ? null : 'Invalid email',
      password: (value) => validations.isValidPassword(value) ? null : 'Weak password'
    }
  );

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (form.validateAll()) {
        console.log('Valid data:', form.values);
      }
    }}>
      <input
        placeholder="Full name"
        value={form.values.name}
        onChange={(e) => form.setValue('name', formatters.toTitleCase(e.target.value))}
        onBlur={() => form.setTouchedField('name')}
      />
      {form.touched.name && form.errors.name && (
        <span style={{ color: 'red' }}>{form.errors.name}</span>
      )}
      
      {/* other fields... */}
      
      <button type="submit" disabled={!form.isValid}>
        Sign up
      </button>
    </form>
  );
}
```

## Generators

### Test Data

```typescript
import { generators } from 'vertex-toolkit';

// Valid documents
console.log(generators.generateCPF()); // '12345678909'
console.log(generators.generateCNPJ()); // '12345678000181'
console.log(generators.generateCEP()); // '01234567'

// Phones
console.log(generators.generateBrazilianPhone('mobile')); // '11999999999'
console.log(generators.generateBrazilianPhone('landline')); // '1133334444'

// Complete person
const person = generators.generatePerson();
console.log(person);
/*
{
  firstName: 'John',
  lastName: 'Silva',
  fullName: 'John Silva',
  gender: 'male',
  birthDate: '15/05/1990',
  cpf: '12345678909',
  email: 'john.silva123@example.com',
  phone: '11999999999',
  cep: '01234567'
}
*/

// Company
const company = generators.generateCompany();
console.log(company);
/*
{
  name: 'Innovation Tech Ltd',
  cnpj: '12345678000181',
  email: 'contact@innovation.com',
  phone: '1133334444',
  cep: '01234567'
}
*/
```

## Complete Example: E-commerce

```typescript
import React, { useState } from 'react';
import { 
  validations, 
  masks, 
  formatters, 
  utils, 
  react 
} from 'vertex-toolkit';

function CheckoutForm() {
  // Personal data validation hook
  const personalData = react.useValidation(
    {
      name: '',
      cpf: '',
      email: '',
      phone: ''
    },
    {
      name: (v) => v.length >= 2 ? null : 'Invalid name',
      cpf: (v) => validations.isValidCPF(v) ? null : 'Invalid CPF',
      email: (v) => validations.isValidEmail(v) ? null : 'Invalid email',
      phone: (v) => validations.isValidBrazilianPhone(v) ? null : 'Invalid phone'
    }
  );

  // Credit card validation hook
  const creditCard = react.useValidation(
    {
      number: '',
      name: '',
      expiry: '',
      cvv: ''
    },
    {
      number: (v) => validations.isValidCreditCard(v) ? null : 'Invalid card',
      name: (v) => v.length >= 2 ? null : 'Invalid name',
      expiry: (v) => validations.isValidCreditCardExpiry(v) ? null : 'Invalid date',
      cvv: (v) => validations.isValidCVV(v) ? null : 'Invalid CVV'
    }
  );

  const [products] = useState([
    { id: 1, name: 'Product A', price: 99.90, quantity: 2 },
    { id: 2, name: 'Product B', price: 149.90, quantity: 1 }
  ]);

  // Cart calculations
  const subtotal = products.reduce((acc, p) => acc + (p.price * p.quantity), 0);
  const shipping = 15.90;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (personalData.validateAll() && creditCard.validateAll()) {
      const order = {
        id: utils.generateUUID(),
        customer: personalData.values,
        payment: {
          ...creditCard.values,
          type: validations.getCreditCardType(creditCard.values.number)
        },
        products,
        amounts: { subtotal, shipping, total },
        date: new Date().toISOString()
      };
      
      console.log('Order created:', order);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <h2>Personal Data</h2>
        
        <input
          placeholder="Full name"
          value={personalData.values.name}
          onChange={(e) => personalData.setValue('name', formatters.toTitleCase(e.target.value))}
        />
        {personalData.errors.name && <span>{personalData.errors.name}</span>}

        <input
          placeholder="000.000.000-00"
          value={personalData.values.cpf}
          onChange={(e) => personalData.setValue('cpf', masks.applyCPFMask(e.target.value))}
        />
        {personalData.errors.cpf && <span>{personalData.errors.cpf}</span>}

        <input
          type="email"
          placeholder="email@example.com"
          value={personalData.values.email}
          onChange={(e) => personalData.setValue('email', e.target.value.toLowerCase())}
        />
        {personalData.errors.email && <span>{personalData.errors.email}</span>}

        <input
          placeholder="(00) 00000-0000"
          value={personalData.values.phone}
          onChange={(e) => personalData.setValue('phone', masks.applyBrazilianPhoneMask(e.target.value))}
        />
        {personalData.errors.phone && <span>{personalData.errors.phone}</span>}
      </section>

      <section>
        <h2>Credit Card</h2>
        
        <input
          placeholder="0000 0000 0000 0000"
          value={creditCard.values.number}
          onChange={(e) => creditCard.setValue('number', masks.applyCreditCardMask(e.target.value))}
        />
        {creditCard.errors.number && <span>{creditCard.errors.number}</span>}
        {creditCard.values.number && (
          <span>Type: {validations.getCreditCardType(creditCard.values.number) || 'Unknown'}</span>
        )}

        <input
          placeholder="Name on card"
          value={creditCard.values.name}
          onChange={(e) => creditCard.setValue('name', e.target.value.toUpperCase())}
        />
        {creditCard.errors.name && <span>{creditCard.errors.name}</span>}

        <input
          placeholder="MM/YY"
          value={creditCard.values.expiry}
          onChange={(e) => creditCard.setValue('expiry', masks.applyExpiryDateMask(e.target.value))}
        />
        {creditCard.errors.expiry && <span>{creditCard.errors.expiry}</span>}

        <input
          placeholder="CVV"
          value={creditCard.values.cvv}
          onChange={(e) => creditCard.setValue('cvv', masks.applyCVVMask(e.target.value))}
        />
        {creditCard.errors.cvv && <span>{creditCard.errors.cvv}</span>}
      </section>

      <section>
        <h2>Order Summary</h2>
        
        {products.map(product => (
          <div key={product.id}>
            <span>{product.name}</span>
            <span>{product.quantity}x</span>
            <span>{masks.applyCurrencyMaskBR(product.price)}</span>
            <span>{masks.applyCurrencyMaskBR(product.price * product.quantity)}</span>
          </div>
        ))}
        
        <div>
          <span>Subtotal: {masks.applyCurrencyMaskBR(subtotal)}</span>
          <span>Shipping: {masks.applyCurrencyMaskBR(shipping)}</span>
          <strong>Total: {masks.applyCurrencyMaskBR(total)}</strong>
        </div>
      </section>

      <button 
        type="submit" 
        disabled={!personalData.isValid || !creditCard.isValid}
      >
        Complete Order
      </button>
    </form>
  );
}

export default CheckoutForm;
```

This example demonstrates how to combine multiple toolkit features in a real-world scenario: validation, masks, formatting, and UUID generation.