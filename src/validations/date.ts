/**
 * validates date in various formats
 * accepts date strings and date objects
 * 
 * @param date - the date to validate (string or Date object)
 * @returns true if the date is valid, false otherwise
 * 
 * @example
 * ```typescript
 * isValidDate('2023-12-25'); // true
 * isValidDate(new Date()); // true
 * isValidDate('invalid-date'); // false
 * isValidDate('2023-13-45'); // false (invalid month/day)
 * ```
 */
export function isValidDate(date: string | Date): boolean {
  if (date instanceof Date) {
    return !isNaN(date.getTime());
  }
  
  const parsedDate = new Date(date);
  return !isNaN(parsedDate.getTime());
}

/**
 * validates date in brazilian format (dd/mm/yyyy)
 * checks both format and date validity
 * 
 * @param date - the date string in dd/mm/yyyy format
 * @returns true if the date is valid, false otherwise
 * 
 * @example
 * ```typescript
 * isValidDateBR('25/12/2023'); // true
 * isValidDateBR('31/02/2023'); // false (invalid day for February)
 * isValidDateBR('12/25/2023'); // false (wrong format)
 * isValidDateBR('25-12-2023'); // false (wrong separator)
 * ```
 */
export function isValidDateBR(date: string): boolean {
  const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = date.match(dateRegex);
  
  if (!match) return false;
  
  const day = parseInt(match[1]);
  const month = parseInt(match[2]);
  const year = parseInt(match[3]);
  
  const dateObj = new Date(year, month - 1, day);
  
  return dateObj.getDate() === day && 
         dateObj.getMonth() === month - 1 && 
         dateObj.getFullYear() === year;
}

/**
 * validates date in us format (mm/dd/yyyy)
 * checks both format and date validity
 * 
 * @param date - the date string in mm/dd/yyyy format
 * @returns true if the date is valid, false otherwise
 * 
 * @example
 * ```typescript
 * isValidDateUS('12/25/2023'); // true
 * isValidDateUS('02/31/2023'); // false (invalid day for February)
 * isValidDateUS('25/12/2023'); // false (wrong format)
 * isValidDateUS('12-25-2023'); // false (wrong separator)
 * ```
 */
export function isValidDateUS(date: string): boolean {
  const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = date.match(dateRegex);
  
  if (!match) return false;
  
  const month = parseInt(match[1]);
  const day = parseInt(match[2]);
  const year = parseInt(match[3]);
  
  const dateObj = new Date(year, month - 1, day);
  
  return dateObj.getDate() === day && 
         dateObj.getMonth() === month - 1 && 
         dateObj.getFullYear() === year;
}

/**
 * validates if date is in the future
 * compares against current system date/time
 * 
 * @param date - the date to check (string or Date object)
 * @returns true if the date is in the future, false otherwise
 * 
 * @example
 * ```typescript
 * isFutureDate('2030-01-01'); // true (assuming current year < 2030)
 * isFutureDate('2020-01-01'); // false (past date)
 * isFutureDate(new Date(Date.now() + 86400000)); // true (tomorrow)
 * ```
 */
export function isFutureDate(date: string | Date): boolean {
  const inputDate = typeof date === 'string' ? new Date(date) : date;
  return inputDate > new Date();
}

/**
 * validates if date is in the past
 * compares against current system date/time
 * 
 * @param date - the date to check (string or Date object)
 * @returns true if the date is in the past, false otherwise
 * 
 * @example
 * ```typescript
 * isPastDate('2020-01-01'); // true (past date)
 * isPastDate('2030-01-01'); // false (future date)
 * isPastDate(new Date(Date.now() - 86400000)); // true (yesterday)
 * ```
 */
export function isPastDate(date: string | Date): boolean {
  const inputDate = typeof date === 'string' ? new Date(date) : date;
  return inputDate < new Date();
}

/**
 * validates age based on birth date
 * calculates age and checks if it falls within specified range
 * 
 * @param birthDate - the birth date (string or Date object)
 * @param minAge - minimum allowed age (default: 0)
 * @param maxAge - maximum allowed age (default: 120)
 * @returns true if the age is within range, false otherwise
 * 
 * @example
 * ```typescript
 * isValidAge('1990-01-01'); // true (assuming current age is reasonable)
 * isValidAge('1990-01-01', 18, 65); // true if person is between 18-65
 * isValidAge('2010-01-01', 18); // false (too young)
 * isValidAge('1900-01-01', 0, 100); // false (too old)
 * ```
 */
export function isValidAge(birthDate: string | Date, minAge: number = 0, maxAge: number = 120): boolean {
  const birth = typeof birthDate === 'string' ? new Date(birthDate) : birthDate;
  const today = new Date();
  
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age >= minAge && age <= maxAge;
}