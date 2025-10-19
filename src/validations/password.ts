/**
 * password strength levels enumeration
 * defines different levels of password security
 */
export enum PasswordStrength {
  WEAK = 'weak',
  FAIR = 'fair',
  GOOD = 'good',
  STRONG = 'strong'
}

/**
 * validates password strength based on multiple criteria
 * analyzes length, character variety, and complexity
 * 
 * @param password - the password string to analyze
 * @returns the password strength level
 * 
 * @example
 * ```typescript
 * validatePasswordStrength('123456'); // 'weak'
 * validatePasswordStrength('Password1'); // 'fair'
 * validatePasswordStrength('MyStr0ng@Pass'); // 'good'
 * validatePasswordStrength('C0mpl3x@P@ssw0rd!2023'); // 'strong'
 * ```
 */
export function validatePasswordStrength(password: string): PasswordStrength {
  let score = 0;
  
  // length checks
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  
  // character variety checks
  if (/[a-z]/.test(password)) score++; // lowercase
  if (/[A-Z]/.test(password)) score++; // uppercase
  if (/[0-9]/.test(password)) score++; // numbers
  if (/[^A-Za-z0-9]/.test(password)) score++; // special characters
  
  // additional complexity bonuses
  if (password.length >= 16) score++;
  if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/.test(password)) score++;
  
  if (score <= 2) return PasswordStrength.WEAK;
  if (score <= 4) return PasswordStrength.FAIR;
  if (score <= 6) return PasswordStrength.GOOD;
  return PasswordStrength.STRONG;
}

/**
 * validates if password meets minimum requirements
 * allows customizable validation rules
 * 
 * @param password - the password string to validate
 * @param options - validation options object
 * @param options.minLength - minimum password length (default: 8)
 * @param options.requireUppercase - require uppercase letters (default: true)
 * @param options.requireLowercase - require lowercase letters (default: true)
 * @param options.requireNumbers - require numbers (default: true)
 * @param options.requireSpecialChars - require special characters (default: true)
 * @returns true if password meets all requirements, false otherwise
 * 
 * @example
 * ```typescript
 * isValidPassword('MyPass123!'); // true (meets all default requirements)
 * isValidPassword('password', { requireNumbers: false }); // false (too weak)
 * isValidPassword('MYPASS123!', { requireLowercase: false }); // true
 * isValidPassword('MyP@1', { minLength: 5 }); // true (shorter minimum)
 * ```
 */
export function isValidPassword(password: string, options: {
  minLength?: number;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
  requireNumbers?: boolean;
  requireSpecialChars?: boolean;
} = {}): boolean {
  const {
    minLength = 8,
    requireUppercase = true,
    requireLowercase = true,
    requireNumbers = true,
    requireSpecialChars = true
  } = options;
  
  if (password.length < minLength) return false;
  if (requireUppercase && !/[A-Z]/.test(password)) return false;
  if (requireLowercase && !/[a-z]/.test(password)) return false;
  if (requireNumbers && !/[0-9]/.test(password)) return false;
  if (requireSpecialChars && !/[^A-Za-z0-9]/.test(password)) return false;
  
  return true;
}

/**
 * checks for common password patterns that should be avoided
 * detects weak patterns like repeated characters and common sequences
 * 
 * @param password - the password string to analyze
 * @returns true if common patterns are found, false otherwise
 * 
 * @example
 * ```typescript
 * hasCommonPasswordPatterns('password123'); // true (common word)
 * hasCommonPasswordPatterns('aaaaaa'); // true (repeated characters)
 * hasCommonPasswordPatterns('123456'); // true (sequence)
 * hasCommonPasswordPatterns('MyUn1qu3P@ss'); // false (no common patterns)
 * ```
 */
export function hasCommonPasswordPatterns(password: string): boolean {
  const commonPatterns = [
    /(.)\1{2,}/, // repeated characters (3+ times)
    /123456|654321|qwerty|asdfgh|zxcvbn/, // common sequences
    /password|admin|user|guest|login/, // common words
    /^[0-9]+$/, // only numbers
    /^[a-zA-Z]+$/ // only letters
  ];
  
  return commonPatterns.some(pattern => pattern.test(password.toLowerCase()));
}