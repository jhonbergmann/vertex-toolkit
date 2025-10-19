/**
 * applies cpf mask formatting (000.000.000-00)
 * formats brazilian cpf number with dots and dash
 * 
 * @param value - the cpf string to format (digits only or partially formatted)
 * @returns formatted cpf string with proper mask
 * 
 * @example
 * ```typescript
 * applyCPFMask('12345678909'); // '123.456.789-09'
 * applyCPFMask('123456789'); // '123.456.789'
 * applyCPFMask('123456'); // '123.456'
 * applyCPFMask('abc123def456'); // '123.456' (extracts digits only)
 * ```
 */
export function applyCPFMask(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/);
  
  if (!match) return value;
  
  const [, part1, part2, part3, part4] = match;
  
  let result = part1;
  if (part2) result += `.${part2}`;
  if (part3) result += `.${part3}`;
  if (part4) result += `-${part4}`;
  
  return result;
}

/**
 * removes cpf mask formatting
 * extracts only digits from formatted cpf string
 * 
 * @param value - the formatted cpf string to clean
 * @returns string containing only digits
 * 
 * @example
 * ```typescript
 * removeCPFMask('123.456.789-09'); // '12345678909'
 * removeCPFMask('123.456.789'); // '123456789'
 * removeCPFMask('abc123.456def'); // '123456'
 * removeCPFMask('no-digits-here'); // ''
 * ```
 */
export function removeCPFMask(value: string): string {
  return value.replace(/\D/g, '');
}
