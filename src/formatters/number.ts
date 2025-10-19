/**
 * number formatting utilities for various transformations
 */

/**
 * formats number with ordinal suffix (1st, 2nd, 3rd, etc.)
 * @param num - the number to format
 * @returns the number with ordinal suffix
 * @example
 * toOrdinal(1) // returns '1st'
 * toOrdinal(22) // returns '22nd'
 * toOrdinal(103) // returns '103rd'
 */
export function toOrdinal(num: number): string {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const value = num % 100;
  return num + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
}

/**
 * converts number to spelled out version in English
 * @param num - the number to convert
 * @returns the number spelled out in words
 * @example
 * numberToWords(123) // returns 'one hundred twenty three'
 * numberToWords(1000) // returns 'one thousand'
 */
export function numberToWords(num: number): string {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const thousands = ['', 'thousand', 'million', 'billion', 'trillion'];

  if (num === 0) return 'zero';
  if (num < 0) return 'negative ' + numberToWords(-num);

  let result = '';
  let thousandIndex = 0;

  while (num > 0) {
    if (num % 1000 !== 0) {
      result = convertHundreds(num % 1000) + thousands[thousandIndex] + ' ' + result;
    }
    num = Math.floor(num / 1000);
    thousandIndex++;
  }

  function convertHundreds(n: number): string {
    let str = '';
    
    if (n >= 100) {
      str += ones[Math.floor(n / 100)] + ' hundred ';
      n %= 100;
    }
    
    if (n >= 20) {
      str += tens[Math.floor(n / 10)] + ' ';
      n %= 10;
    } else if (n >= 10) {
      str += teens[n - 10] + ' ';
      n = 0;
    }
    
    if (n > 0) {
      str += ones[n] + ' ';
    }
    
    return str;
  }

  return result.trim();
}

/**
 * formats file size in bytes to human readable format
 * @param bytes - the number of bytes
 * @param decimals - number of decimal places (default: 2)
 * @returns the formatted file size string
 * @example
 * formatFileSize(1024) // returns '1.00 KB'
 * formatFileSize(1536, 1) // returns '1.5 KB'
 * formatFileSize(1048576) // returns '1.00 MB'
 */
export function formatFileSize(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * converts number to Roman numerals
 * @param num - the number to convert (1-3999)
 * @returns the Roman numeral representation
 * @example
 * toRoman(4) // returns 'IV'
 * toRoman(27) // returns 'XXVII'
 * toRoman(2023) // returns 'MMXXIII'
 */
export function toRoman(num: number): string {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  let result = '';
  
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
  }
  
  return result;
}

/**
 * rounds number to specified decimal places
 * @param num - the number to round
 * @param decimals - number of decimal places
 * @returns the rounded number
 * @example
 * roundToDecimals(3.14159, 2) // returns 3.14
 * roundToDecimals(1.005, 2) // returns 1.01
 */
export function roundToDecimals(num: number, decimals: number): number {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

/**
 * clamps number between minimum and maximum values
 * @param num - the number to clamp
 * @param min - minimum allowed value
 * @param max - maximum allowed value
 * @returns the clamped number
 * @example
 * clamp(15, 0, 10) // returns 10
 * clamp(-5, 0, 10) // returns 0
 * clamp(5, 0, 10) // returns 5
 */
export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}