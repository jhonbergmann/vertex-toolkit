const { validations, masks, formatters, utils, generators } = require('./dist');

console.log('🧪 testing vertex toolkit...\n');

// validation tests
console.log('✅ validations:');
console.log('valid cpf:', validations.isValidCPF('123.456.789-09'));
console.log('valid email:', validations.isValidEmail('test@example.com'));
console.log('valid phone:', validations.isValidBrazilianPhone('(11) 99999-9999'));

// mask tests
console.log('\n🎭 masks:');
console.log('cpf masked:', masks.applyCPFMask('12345678909'));
console.log('phone masked:', masks.applyBrazilianPhoneMask('11999999999'));
console.log('currency masked:', masks.applyCurrencyMaskBR(1234.56));

// formatter tests
console.log('\n🎨 formatters:');
console.log('camelCase:', formatters.toCamelCase('my test string'));
console.log('slug:', formatters.slugify('Title with Accents!'));
console.log('date br:', formatters.formatDateBR(new Date()));

// utility tests
console.log('\n🔧 utilities:');
console.log('unique array:', utils.unique([1, 2, 2, 3, 3, 4]));
console.log('uuid:', utils.generateUUID());
console.log('random string:', utils.randomString(8));

// generator tests
console.log('\n🎲 generators:');
console.log('generated cpf:', generators.generateCPF());
console.log('generated cnpj:', generators.generateCNPJ());
console.log('generated email:', generators.generateEmail());

console.log('\n🎉 all tests passed!');