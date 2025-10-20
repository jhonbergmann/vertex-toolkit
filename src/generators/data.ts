/**
 * generates valid CPF numbers for testing
 */
export function generateCPF(): string {
  // generate first 9 digits
  const digits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
  
  // calculate first verification digit
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += digits[i] * (10 - i);
  }
  let remainder = 11 - (sum % 11);
  const digit1 = remainder === 10 || remainder === 11 ? 0 : remainder;
  digits.push(digit1);
  
  // calculate second verification digit
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += digits[i] * (11 - i);
  }
  remainder = 11 - (sum % 11);
  const digit2 = remainder === 10 || remainder === 11 ? 0 : remainder;
  digits.push(digit2);
  
  return digits.join('');
}

/**
 * generates valid CNPJ numbers for testing
 */
export function generateCNPJ(): string {
  // generate first 12 digits
  const digits = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10));

  // calculate first verification digit
  const calc = (length: number) => {
    let sum = 0;
    let pos = length - 7;
    for (let i = 0; i < length; i++) {
      sum += digits[i] * pos--;
      if (pos < 2) pos = 9;
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };
  
  const digit1 = calc(12);
  digits.push(digit1);
  
  const digit2 = calc(13);
  digits.push(digit2);
  
  return digits.join('');
}

/**
 * generates valid CEP
 */
export function generateCEP(): string {
  return Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
}

/**
 * generates Brazilian phone number
 */
export function generateBrazilianPhone(type: 'mobile' | 'landline' = 'mobile'): string {
  const ddd = Math.floor(Math.random() * 89) + 11; // 11-99
  
  if (type === 'mobile') {
    const firstDigit = 9;
    const remaining = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
    return `${ddd}${firstDigit}${remaining}`;
  } else {
    const firstDigit = Math.floor(Math.random() * 7) + 2; // 2-8
    const remaining = Array.from({ length: 7 }, () => Math.floor(Math.random() * 10)).join('');
    return `${ddd}${firstDigit}${remaining}`;
  }
}

/**
 * generates email address
 */
export function generateEmail(domain: string = 'example.com'): string {
  const firstNames = ['ana', 'bruno', 'carlos', 'diana', 'eduardo', 'fernanda', 'gabriel', 'helena'];
  const lastNames = ['silva', 'santos', 'oliveira', 'souza', 'rodrigues', 'ferreira', 'alves', 'pereira'];
  
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const randomNum = Math.floor(Math.random() * 999);
  
  return `${firstName}.${lastName}${randomNum}@${domain}`;
}

/**
 * generates person data
 */
export function generatePerson() {
  const firstNames = {
    male: ['João', 'Pedro', 'Lucas', 'Gabriel', 'Matheus', 'Rafael', 'Daniel', 'Bruno'],
    female: ['Maria', 'Ana', 'Beatriz', 'Carla', 'Fernanda', 'Juliana', 'Camila', 'Larissa']
  };
  
  const lastNames = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira'];
  
  const gender = Math.random() < 0.5 ? 'male' : 'female';
  const firstName = firstNames[gender][Math.floor(Math.random() * firstNames[gender].length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
  const birthYear = 1950 + Math.floor(Math.random() * 70);
  const birthMonth = Math.floor(Math.random() * 12) + 1;
  const birthDay = Math.floor(Math.random() * 28) + 1;
  
  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    gender,
    birthDate: `${birthDay.toString().padStart(2, '0')}/${birthMonth.toString().padStart(2, '0')}/${birthYear}`,
    cpf: generateCPF(),
    email: generateEmail(),
    phone: generateBrazilianPhone(),
    cep: generateCEP()
  };
}

/**
 * generates company data
 */
export function generateCompany() {
  const companyTypes = ['Ltd', 'Inc', 'LLC', 'Corp'];
  const businessAreas = ['Technology', 'Commerce', 'Services', 'Industry', 'Consulting'];
  const companyNames = ['Innovation', 'Solutions', 'Systems', 'Digital', 'Tech', 'Pro', 'Plus', 'Max'];
  
  const name = companyNames[Math.floor(Math.random() * companyNames.length)];
  const area = businessAreas[Math.floor(Math.random() * businessAreas.length)];
  const type = companyTypes[Math.floor(Math.random() * companyTypes.length)];
  
  return {
    name: `${name} ${area} ${type}`,
    cnpj: generateCNPJ(),
    email: generateEmail(),
    phone: generateBrazilianPhone('landline'),
    cep: generateCEP()
  };
}