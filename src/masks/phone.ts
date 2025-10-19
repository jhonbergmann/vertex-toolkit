/**
 * applies Brazilian phone mask to a string
 * - mobile phones: (00) 90000-0000 (11 digits)
 * - landline phones: (00) 0000-0000 (10 digits)
 * @param value - the phone number to mask (numeric string)
 * @returns the masked phone number
 * @example
 * applyBrazilianPhoneMask('11999887766') // returns '(11) 99988-7766'
 * applyBrazilianPhoneMask('1133334444') // returns '(11) 3333-4444'
 */
export function applyBrazilianPhoneMask(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  
  if (cleaned.length <= 10) {
    // Landline format
    const match = cleaned.match(/^(\d{0,2})(\d{0,4})(\d{0,4})$/);
    if (!match) return value;
    
    const [, ddd, part1, part2] = match;
    
    let result = '';
    if (ddd) result += `(${ddd}`;
    if (part1) result += `) ${part1}`;
    if (part2) result += `-${part2}`;
    
    return result;
  } else {
    // Mobile format
    const match = cleaned.match(/^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})$/);
    if (!match) return value;
    
    const [, ddd, nine, part1, part2] = match;
    
    let result = '';
    if (ddd) result += `(${ddd}`;
    if (nine) result += `) ${nine}`;
    if (part1) result += `${part1}`;
    if (part2) result += `-${part2}`;
    
    return result;
  }
}

/**
 * applies US phone mask to a string
 * @param value - the phone number to mask (numeric string)
 * @returns the masked phone number in format (000) 000-0000
 * @example
 * applyUSPhoneMask('5551234567') // returns '(555) 123-4567'
 * applyUSPhoneMask('555123') // returns '(555) 123'
 */
export function applyUSPhoneMask(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  
  if (!match) return value;
  
  const [, area, exchange, number] = match;
  
  let result = '';
  if (area) result += `(${area}`;
  if (exchange) result += `) ${exchange}`;
  if (number) result += `-${number}`;
  
  return result;
}

/**
 * removes phone mask from a string
 * @param value - the masked phone number
 * @returns the phone number without mask (only numbers)
 * @example
 * removePhoneMask('(11) 99988-7766') // returns '11999887766'
 * removePhoneMask('(555) 123-4567') // returns '5551234567'
 */
export function removePhoneMask(value: string): string {
  return value.replace(/\D/g, '');
}