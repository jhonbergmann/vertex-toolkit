/**
 * validates credit card numbers using luhn algorithm
 * also known as the "modulus 10" algorithm, used by most credit card companies
 * 
 * @param cardNumber - the credit card number string to validate
 * @returns true if the card number passes luhn validation, false otherwise
 * 
 * @example
 * ```typescript
 * isValidCreditCard('4111111111111111'); // true (visa test card)
 * isValidCreditCard('4111 1111 1111 1111'); // true (with spaces)
 * isValidCreditCard('5555555555554444'); // true (mastercard test card)
 * isValidCreditCard('1234567890123456'); // false (invalid)
 * ```
 */
export function isValidCreditCard(cardNumber: string): boolean {
  const cleanNumber = cardNumber.replace(/\D/g, '');
  
  if (cleanNumber.length < 13 || cleanNumber.length > 19) {
    return false;
  }
  
  let sum = 0;
  let isEven = false;
  
  // process digits from right to left
  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
}

/**
 * validates credit card expiry date (mm/yy or mm/yyyy format)
 * checks if the date is valid and not in the past
 * 
 * @param expiry - the expiry date string to validate
 * @returns true if the expiry date is valid and future, false otherwise
 * 
 * @example
 * ```typescript
 * isValidCreditCardExpiry('12/25'); // true (if current date is before dec 2025)
 * isValidCreditCardExpiry('1225'); // true (without slash)
 * isValidCreditCardExpiry('01/20'); // false (past date)
 * isValidCreditCardExpiry('13/25'); // false (invalid month)
 * ```
 */
export function isValidCreditCardExpiry(expiry: string): boolean {
  const cleanExpiry = expiry.replace(/\D/g, '');
  
  if (cleanExpiry.length !== 4 && cleanExpiry.length !== 6) {
    return false;
  }
  
  const month = parseInt(cleanExpiry.slice(0, 2));
  const year = parseInt(cleanExpiry.length === 4 ? `20${cleanExpiry.slice(2)}` : cleanExpiry.slice(2));
  
  if (month < 1 || month > 12) {
    return false;
  }
  
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  
  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return false;
  }
  
  return true;
}

/**
 * validates cvv (card verification value) - 3 or 4 digits
 * most cards use 3 digits, american express uses 4 digits
 * 
 * @param cvv - the cvv string to validate
 * @returns true if the cvv has valid format, false otherwise
 * 
 * @example
 * ```typescript
 * isValidCVV('123'); // true (visa, mastercard, etc.)
 * isValidCVV('1234'); // true (american express)
 * isValidCVV('12'); // false (too short)
 * isValidCVV('12345'); // false (too long)
 * ```
 */
export function isValidCVV(cvv: string): boolean {
  const cleanCvv = cvv.replace(/\D/g, '');
  return /^[0-9]{3,4}$/.test(cleanCvv);
}

/**
 * detects credit card type based on number patterns
 * uses standard industry identification patterns
 * 
 * @param cardNumber - the credit card number to analyze
 * @returns the card type string or null if unrecognized
 * 
 * @example
 * ```typescript
 * getCreditCardType('4111111111111111'); // 'Visa'
 * getCreditCardType('5555555555554444'); // 'Mastercard'
 * getCreditCardType('378282246310005'); // 'American Express'
 * getCreditCardType('1234567890123456'); // null
 * ```
 */
export function getCreditCardType(cardNumber: string): string | null {
  const cleanNumber = cardNumber.replace(/\D/g, '');
  
  if (/^4/.test(cleanNumber)) return 'Visa';
  if (/^5[1-5]/.test(cleanNumber)) return 'Mastercard';
  if (/^3[47]/.test(cleanNumber)) return 'American Express';
  if (/^6(?:011|5)/.test(cleanNumber)) return 'Discover';
  if (/^(?:2131|1800|35\d{3})/.test(cleanNumber)) return 'JCB';
  if (/^3(?:0[0-5]|[68])/.test(cleanNumber)) return 'Diners Club';
  
  return null;
}