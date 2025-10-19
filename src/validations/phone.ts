/**
 * validates brazilian phone numbers (mobile and landline)
 * supports formats: (11) 99999-9999, 11999999999, +5511999999999
 * mobile numbers have 11 digits (ddd + 9 + 8 digits)
 * landline numbers have 10 digits (ddd + 8 digits starting with 2-8)
 * 
 * @param phone - the phone string to validate
 * @returns true if the phone number is valid, false otherwise
 * 
 * @example
 * ```typescript
 * isValidBrazilianPhone('(11) 99999-9999'); // true (mobile)
 * isValidBrazilianPhone('11999999999'); // true (mobile without formatting)
 * isValidBrazilianPhone('(11) 3333-4444'); // true (landline)
 * isValidBrazilianPhone('+5511999999999'); // true (with country code)
 * isValidBrazilianPhone('1199999999'); // false (missing digit)
 * ```
 */
export function isValidBrazilianPhone(phone: string): boolean {
  const cleanPhone = phone.replace(/\D/g, '');
  
  // remove country code if present (55)
  const phoneWithoutCountry = cleanPhone.startsWith('55') ? cleanPhone.slice(2) : cleanPhone;
  
  // check if it's a valid brazilian mobile (11 digits) or landline (10 digits)
  if (phoneWithoutCountry.length === 11) {
    // mobile: ddd + 9 + 8 digits
    return /^[1-9]{2}9[0-9]{8}$/.test(phoneWithoutCountry);
  } else if (phoneWithoutCountry.length === 10) {
    // landline: ddd + 8 digits (first digit 2-8)
    return /^[1-9]{2}[2-8][0-9]{7}$/.test(phoneWithoutCountry);
  }
  
  return false;
}

/**
 * validates international phone numbers (basic format)
 * checks if phone has reasonable length for international standards
 * 
 * @param phone - the phone string to validate
 * @returns true if the phone length is within international standards, false otherwise
 * 
 * @example
 * ```typescript
 * isValidInternationalPhone('+1234567890'); // true
 * isValidInternationalPhone('123456789012345'); // true (15 digits max)
 * isValidInternationalPhone('1234567'); // false (too short)
 * isValidInternationalPhone('1234567890123456'); // false (too long)
 * ```
 */
export function isValidInternationalPhone(phone: string): boolean {
  const cleanPhone = phone.replace(/\D/g, '');
  return cleanPhone.length >= 8 && cleanPhone.length <= 15;
}

/**
 * validates us phone numbers
 * follows north american numbering plan (nanp) format
 * format: nxx-nxx-xxxx where n = 2-9, x = 0-9
 * 
 * @param phone - the phone string to validate
 * @returns true if the phone is a valid us number, false otherwise
 * 
 * @example
 * ```typescript
 * isValidUSPhone('(555) 123-4567'); // true
 * isValidUSPhone('5551234567'); // true (without formatting)
 * isValidUSPhone('15551234567'); // true (with country code 1)
 * isValidUSPhone('(111) 123-4567'); // false (area code can't start with 1)
 * ```
 */
export function isValidUSPhone(phone: string): boolean {
  const cleanPhone = phone.replace(/\D/g, '');
  return /^1?[2-9]\d{2}[2-9]\d{2}\d{4}$/.test(cleanPhone);
}