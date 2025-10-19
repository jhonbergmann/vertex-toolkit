/**
 * validates if string contains only alphabetic characters
 * checks for letters only (a-z, a-z)
 * 
 * @param str - the string to validate
 * @returns true if string contains only letters, false otherwise
 * 
 * @example
 * ```typescript
 * isAlpha('hello'); // true
 * isAlpha('Hello'); // true
 * isAlpha('hello123'); // false (contains numbers)
 * isAlpha('hello world'); // false (contains space)
 * ```
 */
export function isAlpha(str: string): boolean {
  return /^[a-zA-Z]+$/.test(str);
}

/**
 * validates if string contains only alphanumeric characters
 * checks for letters and numbers only (a-z, a-z, 0-9)
 * 
 * @param str - the string to validate
 * @returns true if string contains only letters and numbers, false otherwise
 * 
 * @example
 * ```typescript
 * isAlphaNumeric('hello123'); // true
 * isAlphaNumeric('Test456'); // true
 * isAlphaNumeric('hello world'); // false (contains space)
 * isAlphaNumeric('test@123'); // false (contains special char)
 * ```
 */
export function isAlphaNumeric(str: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(str);
}

/**
 * validates if string contains only numeric characters
 * checks for digits only (0-9)
 * 
 * @param str - the string to validate
 * @returns true if string contains only numbers, false otherwise
 * 
 * @example
 * ```typescript
 * isNumeric('123456'); // true
 * isNumeric('0'); // true
 * isNumeric('123.45'); // false (contains decimal point)
 * isNumeric('123abc'); // false (contains letters)
 * ```
 */
export function isNumeric(str: string): boolean {
  return /^[0-9]+$/.test(str);
}

/**
 * validates if string is a valid hexadecimal
 * checks for valid hex characters (0-9, a-f, a-f)
 * 
 * @param str - the string to validate
 * @returns true if string is valid hexadecimal, false otherwise
 * 
 * @example
 * ```typescript
 * isHexadecimal('1a2b3c'); // true
 * isHexadecimal('FF00FF'); // true
 * isHexadecimal('123456'); // true
 * isHexadecimal('xyz123'); // false (contains invalid chars)
 * ```
 */
export function isHexadecimal(str: string): boolean {
  return /^[0-9a-fA-F]+$/.test(str);
}

/**
 * validates if string is a valid base64 encoded string
 * attempts to decode and re-encode to verify validity
 * 
 * @param str - the string to validate
 * @returns true if string is valid base64, false otherwise
 * 
 * @example
 * ```typescript
 * isBase64('SGVsbG8gV29ybGQ='); // true ('Hello World' encoded)
 * isBase64('dGVzdA=='); // true ('test' encoded)
 * isBase64('not-base64'); // false
 * isBase64('SGVsbG8='); // true (valid base64)
 * ```
 */
export function isBase64(str: string): boolean {
  try {
    return btoa(atob(str)) === str;
  } catch {
    return false;
  }
}

/**
 * validates if string is a valid json
 * attempts to parse the string as json
 * 
 * @param str - the string to validate
 * @returns true if string is valid json, false otherwise
 * 
 * @example
 * ```typescript
 * isValidJSON('{"name": "john"}'); // true
 * isValidJSON('[1, 2, 3]'); // true
 * isValidJSON('"hello"'); // true (valid json string)
 * isValidJSON('{name: "john"}'); // false (missing quotes)
 * isValidJSON('invalid json'); // false
 * ```
 */
export function isValidJSON(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

/**
 * validates string length within specified range
 * checks if string length falls between min and max values
 * 
 * @param str - the string to validate
 * @param min - minimum allowed length (default: 0)
 * @param max - maximum allowed length (default: infinity)
 * @returns true if string length is within range, false otherwise
 * 
 * @example
 * ```typescript
 * isValidLength('hello', 3, 10); // true (5 chars, within range)
 * isValidLength('hi', 3, 10); // false (2 chars, below min)
 * isValidLength('very long string', 3, 10); // false (above max)
 * isValidLength('test'); // true (no limits specified)
 * ```
 */
export function isValidLength(str: string, min: number = 0, max: number = Infinity): boolean {
  return str.length >= min && str.length <= max;
}

/**
 * validates if string contains only whitespace characters
 * checks for spaces, tabs, newlines, etc.
 * 
 * @param str - the string to validate
 * @returns true if string contains only whitespace, false otherwise
 * 
 * @example
 * ```typescript
 * isWhitespace('   '); // true (only spaces)
 * isWhitespace('\t\n'); // true (tab and newline)
 * isWhitespace(''); // true (empty string)
 * isWhitespace(' hello '); // false (contains non-whitespace)
 * ```
 */
export function isWhitespace(str: string): boolean {
  return /^\s*$/.test(str);
}

/**
 * validates if string is empty or contains only whitespace
 * checks if string has no meaningful content after trimming
 * 
 * @param str - the string to validate
 * @returns true if string is empty or only whitespace, false otherwise
 * 
 * @example
 * ```typescript
 * isEmpty(''); // true
 * isEmpty('   '); // true (only spaces)
 * isEmpty('\t\n'); // true (only whitespace)
 * isEmpty(' hello '); // false (has content)
 * isEmpty('0'); // false (has content)
 * ```
 */
export function isEmpty(str: string): boolean {
  return str.trim().length === 0;
}