/**
 * applies credit card mask to a string
 * @param value - the credit card number to mask (numeric string)
 * @returns the masked credit card number in format 0000 0000 0000 0000
 * @example
 * applyCreditCardMask('1234567890123456') // returns '1234 5678 9012 3456'
 * applyCreditCardMask('123456789') // returns '1234 5678 9'
 */
export function applyCreditCardMask(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/(\d{1,4})/g);
  
  if (!match) return value;
  
  return match.join(' ').substr(0, 19); // Max 16 digits + 3 spaces
}

/**
 * applies expiry date mask to a string
 * @param value - the expiry date to mask (numeric string)
 * @returns the masked expiry date in format MM/YY
 * @example
 * applyExpiryDateMask('1225') // returns '12/25'
 * applyExpiryDateMask('03') // returns '03'
 */
export function applyExpiryDateMask(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{0,2})(\d{0,2})$/);
  
  if (!match) return value;
  
  const [, month, year] = match;
  
  let result = month;
  if (year) result += `/${year}`;
  
  return result;
}

/**
 * applies CVV mask to a string
 * @param value - the CVV to mask (numeric string)
 * @returns the masked CVV (3 or 4 digits)
 * @example
 * applyCVVMask('123') // returns '123'
 * applyCVVMask('1234') // returns '1234'
 * applyCVVMask('12345') // returns '1234'
 */
export function applyCVVMask(value: string): string {
  return value.replace(/\D/g, '').substr(0, 4);
}

/**
 * removes credit card mask from a string
 * @param value - the masked credit card number
 * @returns the credit card number without mask (only numbers)
 * @example
 * removeCreditCardMask('1234 5678 9012 3456') // returns '1234567890123456'
 * removeCreditCardMask('1234-5678-9012-3456') // returns '1234567890123456'
 */
export function removeCreditCardMask(value: string): string {
  return value.replace(/\D/g, '');
}