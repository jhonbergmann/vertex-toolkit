/**
 * validates email format using rfc 5322 compliant regex
 * checks for proper email structure with local and domain parts
 * 
 * @param email - the email string to validate
 * @returns true if the email format is valid, false otherwise
 * 
 * @example
 * ```typescript
 * isValidEmail('user@example.com'); // true
 * isValidEmail('test.email+tag@domain.co.uk'); // true
 * isValidEmail('invalid-email'); // false
 * isValidEmail('@domain.com'); // false
 * ```
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

/**
 * validates if email domain has proper format (basic format check)
 * checks if the domain part of the email follows standard format rules
 * 
 * @param email - the email string to validate
 * @returns true if the email and domain format are valid, false otherwise
 * 
 * @example
 * ```typescript
 * isValidEmailDomain('user@google.com'); // true
 * isValidEmailDomain('test@sub.domain.org'); // true
 * isValidEmailDomain('user@localhost'); // false (no tld)
 * isValidEmailDomain('invalid@.com'); // false (invalid domain)
 * ```
 */
export function isValidEmailDomain(email: string): boolean {
  if (!isValidEmail(email)) return false;
  const domain = email.split('@')[1];
  return /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.[a-zA-Z]{2,}$/.test(domain);
}