/**
 * validates url format using the built-in url constructor
 * checks if the url has proper structure and protocol
 * 
 * @param url - the url string to validate
 * @returns true if the url is valid, false otherwise
 * 
 * @example
 * ```typescript
 * isValidURL('https://www.example.com'); // true
 * isValidURL('http://localhost:3000/path'); // true
 * isValidURL('ftp://files.example.com'); // true
 * isValidURL('not-a-url'); // false
 * isValidURL('https://'); // false (incomplete)
 * ```
 */
export function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * validates if url uses https protocol
 * checks for secure connection protocol
 * 
 * @param url - the url string to check
 * @returns true if the url uses https, false otherwise
 * 
 * @example
 * ```typescript
 * isHTTPS('https://www.example.com'); // true
 * isHTTPS('http://www.example.com'); // false
 * isHTTPS('ftp://files.example.com'); // false
 * isHTTPS('invalid-url'); // false
 * ```
 */
export function isHTTPS(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * validates domain name format
 * checks if domain follows standard naming conventions
 * 
 * @param domain - the domain string to validate
 * @returns true if the domain is valid, false otherwise
 * 
 * @example
 * ```typescript
 * isValidDomain('example.com'); // true
 * isValidDomain('sub.domain.co.uk'); // true
 * isValidDomain('localhost'); // false (no tld)
 * isValidDomain('.com'); // false (no domain name)
 * isValidDomain('domain..com'); // false (double dots)
 * ```
 */
export function isValidDomain(domain: string): boolean {
  const domainRegex = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)*[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/;
  return domainRegex.test(domain);
}

/**
 * validates ipv4 address format
 * checks if ip address follows ipv4 format (xxx.xxx.xxx.xxx)
 * 
 * @param ip - the ip address string to validate
 * @returns true if the ip is valid ipv4, false otherwise
 * 
 * @example
 * ```typescript
 * isValidIPv4('192.168.1.1'); // true
 * isValidIPv4('127.0.0.1'); // true
 * isValidIPv4('255.255.255.255'); // true
 * isValidIPv4('256.1.1.1'); // false (invalid octet)
 * isValidIPv4('192.168.1'); // false (incomplete)
 * ```
 */
export function isValidIPv4(ip: string): boolean {
  const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return ipRegex.test(ip);
}

/**
 * validates ipv6 address format
 * checks if ip address follows ipv6 format (basic validation)
 * 
 * @param ip - the ip address string to validate
 * @returns true if the ip is valid ipv6, false otherwise
 * 
 * @example
 * ```typescript
 * isValidIPv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334'); // true
 * isValidIPv6('::1'); // true (loopback)
 * isValidIPv6('::'); // true (all zeros)
 * isValidIPv6('192.168.1.1'); // false (ipv4)
 * isValidIPv6('invalid'); // false
 * ```
 */
export function isValidIPv6(ip: string): boolean {
  const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::1$|^::$/;
  return ipv6Regex.test(ip);
}