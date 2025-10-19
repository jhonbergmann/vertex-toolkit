/**
 * applies CEP (Brazilian postal code) mask to a string
 * @param value - the value to mask (numeric string)
 * @returns the masked CEP in format 00000-000
 * @example
 * applyCEPMask('01234567') // returns '01234-567'
 * applyCEPMask('12345') // returns '12345'
 */
export function applyCEPMask(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{0,5})(\d{0,3})$/);
  
  if (!match) return value;
  
  const [, part1, part2] = match;
  
  let result = part1;
  if (part2) result += `-${part2}`;
  
  return result;
}

/**
 * removes CEP mask from a string
 * @param value - the masked CEP value
 * @returns the CEP without mask (only numbers)
 * @example
 * removeCEPMask('01234-567') // returns '01234567'
 * removeCEPMask('12345-678') // returns '12345678'
 */
export function removeCEPMask(value: string): string {
  return value.replace(/\D/g, '');
}