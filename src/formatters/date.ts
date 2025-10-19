/**
 * date formatting utilities for various date transformations
 */

/**
 * formats date relative to now (e.g., "2 days ago", "in 3 hours")
 * @param date - the date to format (date object or string)
 * @returns the relative time string
 * @example
 * formatRelativeTime(new Date(Date.now() - 86400000)) // returns '1 day ago'
 * formatRelativeTime(new Date(Date.now() + 3600000)) // returns 'in 1 hour'
 */
export function formatRelativeTime(date: Date | string): string {
  const now = new Date();
  const targetDate = typeof date === 'string' ? new Date(date) : date;
  const diffInSeconds = Math.floor((now.getTime() - targetDate.getTime()) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 }
  ];

  for (const interval of intervals) {
    const count = Math.abs(Math.floor(diffInSeconds / interval.seconds));
    if (count >= 1) {
      const suffix = count === 1 ? '' : 's';
      const timeDirection = diffInSeconds > 0 ? 'ago' : 'in';
      const preposition = diffInSeconds > 0 ? '' : 'in ';
      const postposition = diffInSeconds > 0 ? ' ago' : '';
      
      return `${preposition}${count} ${interval.label}${suffix}${postposition}`;
    }
  }

  return 'just now';
}

/**
 * formats date to brazilian format (dd/mm/yyyy)
 * @param date - the date to format (date object or string)
 * @returns the formatted date string
 * @example
 * formatDateBR(new Date('2023-12-25')) // returns '25/12/2023'
 */
export function formatDateBR(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('pt-BR');
}

/**
 * formats date to us format (mm/dd/yyyy)
 * @param date - the date to format (date object or string)
 * @returns the formatted date string
 * @example
 * formatDateUS(new Date('2023-12-25')) // returns '12/25/2023'
 */
export function formatDateUS(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US');
}

/**
 * formats date to iso string (yyyy-mm-dd)
 * @param date - the date to format (date object or string)
 * @returns the iso formatted date string
 * @example
 * formatDateISO(new Date('2023-12-25')) // returns '2023-12-25'
 */
export function formatDateISO(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString().split('T')[0];
}

/**
 * formats time to hh:mm format
 * @param date - the date to format (date object or string)
 * @returns the formatted time string
 * @example
 * formatTime(new Date('2023-12-25T14:30:00')) // returns '14:30'
 */
export function formatTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

/**
 * formats datetime to brazilian format (dd/mm/yyyy hh:mm)
 * @param date - the date to format (date object or string)
 * @returns the formatted datetime string
 * @example
 * formatDateTimeBR(new Date('2023-12-25T14:30:00')) // returns '25/12/2023 14:30'
 */
export function formatDateTimeBR(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString('pt-BR', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  });
}

/**
 * gets name of weekday
 * @param date - the date (date object or string)
 * @param locale - the locale for formatting (default: 'pt-BR')
 * @returns the weekday name
 * @example
 * getWeekdayName(new Date('2023-12-25'), 'en-US') // returns 'Monday'
 * getWeekdayName(new Date('2023-12-25'), 'pt-BR') // returns 'segunda-feira'
 */
export function getWeekdayName(date: Date | string, locale: string = 'pt-BR'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(locale, { weekday: 'long' });
}

/**
 * gets name of month
 * @param date - the date (date object or string)
 * @param locale - the locale for formatting (default: 'pt-BR')
 * @returns the month name
 * @example
 * getMonthName(new Date('2023-12-25'), 'en-US') // returns 'December'
 * getMonthName(new Date('2023-12-25'), 'pt-BR') // returns 'dezembro'
 */
export function getMonthName(date: Date | string, locale: string = 'pt-BR'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(locale, { month: 'long' });
}

/**
 * calculates age from birth date
 * @param birthDate - the birth date (date object or string)
 * @returns the age in years
 * @example
 * calculateAge(new Date('1990-05-15')) // returns current age
 * calculateAge('1990-05-15') // returns current age
 */
export function calculateAge(birthDate: Date | string): number {
  const birth = typeof birthDate === 'string' ? new Date(birthDate) : birthDate;
  const today = new Date();
  
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

/**
 * adds specified time to date
 * @param date - the base date (date object or string)
 * @param amount - the amount to add
 * @param unit - the time unit to add
 * @returns the new date with added time
 * @example
 * addTime(new Date('2023-01-01'), 5, 'days') // returns date 5 days later
 * addTime('2023-01-01', 2, 'months') // returns date 2 months later
 */
export function addTime(date: Date | string, amount: number, unit: 'days' | 'hours' | 'minutes' | 'seconds' | 'months' | 'years'): Date {
  const d = new Date(typeof date === 'string' ? new Date(date) : date);
  
  switch (unit) {
    case 'seconds':
      d.setSeconds(d.getSeconds() + amount);
      break;
    case 'minutes':
      d.setMinutes(d.getMinutes() + amount);
      break;
    case 'hours':
      d.setHours(d.getHours() + amount);
      break;
    case 'days':
      d.setDate(d.getDate() + amount);
      break;
    case 'months':
      d.setMonth(d.getMonth() + amount);
      break;
    case 'years':
      d.setFullYear(d.getFullYear() + amount);
      break;
  }
  
  return d;
}

/**
 * gets difference between two dates
 * @param date1 - first date (date object or string)
 * @param date2 - second date (date object or string)
 * @param unit - the unit for the difference calculation (default: 'days')
 * @returns the difference between dates in specified unit
 * @example
 * getDateDifference('2023-01-01', '2023-01-05', 'days') // returns 4
 * getDateDifference('2023-01-01T10:00', '2023-01-01T12:00', 'hours') // returns 2
 */
export function getDateDifference(date1: Date | string, date2: Date | string, unit: 'days' | 'hours' | 'minutes' | 'seconds' = 'days'): number {
  const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
  const d2 = typeof date2 === 'string' ? new Date(date2) : date2;
  
  const diffInMs = Math.abs(d2.getTime() - d1.getTime());
  
  switch (unit) {
    case 'seconds':
      return Math.floor(diffInMs / 1000);
    case 'minutes':
      return Math.floor(diffInMs / (1000 * 60));
    case 'hours':
      return Math.floor(diffInMs / (1000 * 60 * 60));
    case 'days':
      return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    default:
      return diffInMs;
  }
}