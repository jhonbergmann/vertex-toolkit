/**
 * applies cnpj mask formatting (00.000.000/0000-00)
 * formats brazilian cnpj number with dots, slash and dash
 * 
 * @param value - the cnpj string to format (digits only or partially formatted)
 * @returns formatted cnpj string with proper mask
 * 
 * @example
 * ```typescript
 * applyCNPJMask('12345678000195'); // '12.345.678/0001-95'
 * applyCNPJMask('123456780001'); // '12.345.678/0001'
 * applyCNPJMask('12345678'); // '12.345.678'
 * applyCNPJMask('abc123def456'); // '123.456' (extracts digits only)
 * ```
 */
export function applyCNPJMask(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})$/);
  
  if (!match) return value;
  
  const [, part1, part2, part3, part4, part5] = match;
  
  let result = part1;
  if (part2) result += `.${part2}`;
  if (part3) result += `.${part3}`;
  if (part4) result += `/${part4}`;
  if (part5) result += `-${part5}`;
  
  return result;
}

/**
 * removes cnpj mask formatting
 * extracts only digits from formatted cnpj string
 * 
 * @param value - the formatted cnpj string to clean
 * @returns string containing only digits
 * 
 * @example
 * ```typescript
 * removeCNPJMask('12.345.678/0001-95'); // '12345678000195'
 * removeCNPJMask('12.345.678/0001'); // '123456780001'
 * removeCNPJMask('abc12.345def'); // '12345'
 * removeCNPJMask('no-digits-here'); // ''
 * ```
 */
export function removeCNPJMask(value: string): string {
  return value.replace(/\D/g, '');
}
