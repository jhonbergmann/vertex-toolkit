/**
 * validates if a brazilian cnpj (cadastro nacional da pessoa jurídica) number is valid
 * cnpj is a 14-digit number used to identify brazilian companies
 * 
 * @param cnpj - the cnpj string to validate (can include formatting like dots, slashes and dashes)
 * @returns true if the cnpj is valid, false otherwise
 * 
 * @example
 * ```typescript
 * isValidCNPJ('11.222.333/0001-81'); // true
 * isValidCNPJ('11222333000181'); // true (without formatting)
 * isValidCNPJ('11.111.111/1111-11'); // false (all same digits)
 * isValidCNPJ('11.222.333/0001-80'); // false (invalid check digits)
 * ```
 */
export function isValidCNPJ(cnpj: string): boolean {
  // remove all non-digit characters
  cnpj = cnpj.replace(/[^\d]+/g, '');
  
  // check if has 14 digits and is not all same digits
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

  // helper function to calculate verification digits
  const calc = (x: number) => {
    let n = 0;
    let pos = x - 7;
    for (let i = 0; i < x; i++) {
      n += parseInt(cnpj.charAt(i)) * pos--;
      if (pos < 2) pos = 9;
    }
    const r = n % 11;
    return r < 2 ? 0 : 11 - r;
  };

  // calculate and validate both verification digits
  const dig1 = calc(12);
  const dig2 = calc(13);

  return dig1 === parseInt(cnpj.charAt(12)) && dig2 === parseInt(cnpj.charAt(13));
}
