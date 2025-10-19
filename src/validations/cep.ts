/**
 * validates if a brazilian cep (código de endereçamento postal) is valid
 * cep is a postal code format with 8 digits used in brazil
 * 
 * @param cep - the cep string to validate (can include formatting like dash)
 * @returns true if the cep has valid format, false otherwise
 * 
 * @example
 * ```typescript
 * isValidCEP('12345-678'); // true
 * isValidCEP('12345678'); // true (without formatting)
 * isValidCEP('1234567'); // false (7 digits)
 * isValidCEP('123456789'); // false (9 digits)
 * ```
 */
export function isValidCEP(cep: string): boolean {
  const cleanCep = cep.replace(/\D/g, '');
  return /^\d{8}$/.test(cleanCep);
}

/**
 * validates if a cep exists (format validation only)
 * for real validation, you'd need to check against postal service api
 * this is an alias for isValidCEP for semantic purposes
 * 
 * @param cep - the cep string to validate
 * @returns true if the cep format is valid, false otherwise
 * 
 * @example
 * ```typescript
 * isValidCEPFormat('01310-100'); // true (paulista avenue, são paulo)
 * isValidCEPFormat('12345678'); // true (format is valid)
 * ```
 */
export function isValidCEPFormat(cep: string): boolean {
  return isValidCEP(cep);
}