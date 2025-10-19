/**
 * string formatting utilities for text transformation
 */

/**
 * converts string to camelCase
 * @param str - the string to convert
 * @returns the camelCase string
 * @example
 * toCamelCase('hello world') // returns 'helloWorld'
 * toCamelCase('user-name') // returns 'userName'
 */
export function toCamelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

/**
 * converts string to PascalCase
 * @param str - the string to convert
 * @returns the PascalCase string
 * @example
 * toPascalCase('hello world') // returns 'HelloWorld'
 * toPascalCase('user-name') // returns 'UserName'
 */
export function toPascalCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => {
      return word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

/**
 * converts string to snake_case
 * @param str - the string to convert
 * @returns the snake_case string
 * @example
 * toSnakeCase('helloWorld') // returns 'hello_world'
 * toSnakeCase('user name') // returns 'user_name'
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('_');
}

/**
 * converts string to kebab-case
 * @param str - the string to convert
 * @returns the kebab-case string
 * @example
 * toKebabCase('helloWorld') // returns 'hello-world'
 * toKebabCase('user name') // returns 'user-name'
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('-');
}

/**
 * converts string to UPPER_CASE
 * @param str - the string to convert
 * @returns the UPPER_CASE string
 * @example
 * toUpperCase('helloWorld') // returns 'HELLO_WORLD'
 * toUpperCase('user name') // returns 'USER_NAME'
 */
export function toUpperCase(str: string): string {
  return toSnakeCase(str).toUpperCase();
}

/**
 * capitalizes first letter of each word (Title Case)
 * @param str - the string to convert
 * @returns the Title Case string
 * @example
 * toTitleCase('hello world') // returns 'Hello World'
 * toTitleCase('the quick brown fox') // returns 'The Quick Brown Fox'
 */
export function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

/**
 * capitalizes first letter of string
 * @param str - the string to capitalize
 * @returns the capitalized string
 * @example
 * capitalize('hello world') // returns 'Hello world'
 * capitalize('USER') // returns 'User'
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * removes accents and diacritics from string
 * @param str - the string to remove accents from
 * @returns the string without accents
 * @example
 * removeAccents('José María') // returns 'Jose Maria'
 * removeAccents('café') // returns 'cafe'
 */
export function removeAccents(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * creates a URL-friendly slug from string
 * @param str - the string to slugify
 * @returns the slugified string
 * @example
 * slugify('Hello World!') // returns 'hello-world'
 * slugify('José María & Co.') // returns 'jose-maria-co'
 */
export function slugify(str: string): string {
  return removeAccents(str)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}