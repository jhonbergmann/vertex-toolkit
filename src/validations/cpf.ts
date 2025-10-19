/**
 * validates if a brazilian cpf (cadastro de pessoas físicas) number is valid
 * cpf is an 11-digit number used to identify brazilian taxpayers
 * 
 * @param cpf - the cpf string to validate (can include formatting like dots and dashes)
 * @returns true if the cpf is valid, false otherwise
 * 
 * @example
 * ```typescript
 * isValidCPF('123.456.789-09'); // true
 * isValidCPF('12345678909'); // true (without formatting)
 * isValidCPF('111.111.111-11'); // false (all same digits)
 * isValidCPF('123.456.789-00'); // false (invalid check digits)
 * ```
 */
export function isValidCPF(cpf: string): boolean {
  // remove all non-digit characters
  cpf = cpf.replace(/[^\d]+/g, '');
  
  // check if has 11 digits and is not all same digits
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  // calculate first verification digit
  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  // calculate second verification digit
  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf.charAt(10));
}
