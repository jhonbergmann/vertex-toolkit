/**
 * applies Brazilian currency mask to a value
 * @param value - the value to mask (string or number)
 * @param options - formatting options
 * @param options.prefix - currency prefix (default: 'R$ ')
 * @param options.suffix - currency suffix (default: '')
 * @param options.decimalPlaces - number of decimal places (default: 2)
 * @returns the formatted currency string
 * @example
 * applyCurrencyMaskBR(1234.56) // returns 'R$ 1.234,56'
 * applyCurrencyMaskBR('1234.56', { prefix: 'BRL ', decimalPlaces: 3 }) // returns 'BRL 1.234,560'
 */
export function applyCurrencyMaskBR(value: string | number, options: {
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
} = {}): string {
  const { prefix = 'R$ ', suffix = '', decimalPlaces = 2 } = options;
  
  let numericValue: number;
  
  if (typeof value === 'string') {
    numericValue = parseFloat(value.replace(/[^\d,.-]/g, '').replace(',', '.')) || 0;
  } else {
    numericValue = value || 0;
  }
  
  const formatted = numericValue.toLocaleString('pt-BR', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  });
  
  return `${prefix}${formatted}${suffix}`;
}

/**
 * applies US currency mask to a value
 * @param value - the value to mask (string or number)
 * @param options - formatting options
 * @param options.prefix - currency prefix (default: '$')
 * @param options.suffix - currency suffix (default: '')
 * @param options.decimalPlaces - number of decimal places (default: 2)
 * @returns the formatted currency string
 * @example
 * applyCurrencyMaskUS(1234.56) // returns '$1,234.56'
 * applyCurrencyMaskUS('1234.56', { prefix: 'USD ', decimalPlaces: 3 }) // returns 'USD 1,234.560'
 */
export function applyCurrencyMaskUS(value: string | number, options: {
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
} = {}): string {
  const { prefix = '$', suffix = '', decimalPlaces = 2 } = options;
  
  let numericValue: number;
  
  if (typeof value === 'string') {
    numericValue = parseFloat(value.replace(/[^\d.-]/g, '')) || 0;
  } else {
    numericValue = value || 0;
  }
  
  const formatted = numericValue.toLocaleString('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  });
  
  return `${prefix}${formatted}${suffix}`;
}

/**
 * applies percentage mask to a value
 * @param value - the value to mask (string or number)
 * @param decimalPlaces - number of decimal places (default: 2)
 * @returns the formatted percentage string
 * @example
 * applyPercentageMask(15.75) // returns '15,75%'
 * applyPercentageMask('15.755', 3) // returns '15,755%'
 */
export function applyPercentageMask(value: string | number, decimalPlaces: number = 2): string {
  let numericValue: number;
  
  if (typeof value === 'string') {
    numericValue = parseFloat(value.replace(/[^\d,.-]/g, '').replace(',', '.')) || 0;
  } else {
    numericValue = value || 0;
  }
  
  const formatted = numericValue.toLocaleString('pt-BR', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  });
  
  return `${formatted}%`;
}

/**
 * applies number mask with thousand separators
 * @param value - the value to mask (string or number)
 * @param locale - the locale for formatting (default: 'pt-BR')
 * @returns the formatted number string
 * @example
 * applyNumberMask(1234567) // returns '1.234.567'
 * applyNumberMask(1234567, 'en-US') // returns '1,234,567'
 */
export function applyNumberMask(value: string | number, locale: string = 'pt-BR'): string {
  let numericValue: number;
  
  if (typeof value === 'string') {
    numericValue = parseFloat(value.replace(/[^\d,.-]/g, '').replace(',', '.')) || 0;
  } else {
    numericValue = value || 0;
  }
  
  return numericValue.toLocaleString(locale);
}

/**
 * removes currency mask and returns numeric value
 * @param value - the masked currency string
 * @returns the numeric value
 * @example
 * removeCurrencyMask('R$ 1.234,56') // returns 1234.56
 * removeCurrencyMask('$1,234.56') // returns 1234.56
 */
export function removeCurrencyMask(value: string): number {
  return parseFloat(value.replace(/[^\d,.-]/g, '').replace(',', '.')) || 0;
}