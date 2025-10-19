/**
 * applies Brazilian date mask to a string
 * @param value - the date to mask (numeric string)
 * @returns the masked date in format DD/MM/YYYY
 * @example
 * applyDateMaskBR('15122023') // returns '15/12/2023'
 * applyDateMaskBR('1512') // returns '15/12'
 */
export function applyDateMaskBR(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/);
  
  if (!match) return value;
  
  const [, day, month, year] = match;
  
  let result = day;
  if (month) result += `/${month}`;
  if (year) result += `/${year}`;
  
  return result;
}

/**
 * applies US date mask to a string
 * @param value - the date to mask (numeric string)
 * @returns the masked date in format MM/DD/YYYY
 * @example
 * applyDateMaskUS('12152023') // returns '12/15/2023'
 * applyDateMaskUS('1215') // returns '12/15'
 */
export function applyDateMaskUS(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/);
  
  if (!match) return value;
  
  const [, month, day, year] = match;
  
  let result = month;
  if (day) result += `/${day}`;
  if (year) result += `/${year}`;
  
  return result;
}

/**
 * applies time mask to a string
 * @param value - the time to mask (numeric string)
 * @returns the masked time in format HH:MM
 * @example
 * applyTimeMask('1430') // returns '14:30'
 * applyTimeMask('14') // returns '14'
 */
export function applyTimeMask(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{0,2})(\d{0,2})$/);
  
  if (!match) return value;
  
  const [, hour, minute] = match;
  
  let result = hour;
  if (minute) result += `:${minute}`;
  
  return result;
}

/**
 * applies datetime mask to a string
 * @param value - the datetime to mask (numeric string with optional space)
 * @returns the masked datetime in format DD/MM/YYYY HH:MM
 * @example
 * applyDateTimeMask('151220231430') // returns '15/12/2023 14:30'
 * applyDateTimeMask('15122023 1430') // returns '15/12/2023 14:30'
 */
export function applyDateTimeMask(value: string): string {
  const cleaned = value.replace(/[^\d\s]/g, '');
  const match = cleaned.match(/^(\d{0,2})(\d{0,2})(\d{0,4})\s?(\d{0,2})(\d{0,2})$/);
  
  if (!match) return value;
  
  const [, day, month, year, hour, minute] = match;
  
  let result = day;
  if (month) result += `/${month}`;
  if (year) result += `/${year}`;
  if (hour) result += ` ${hour}`;
  if (minute) result += `:${minute}`;
  
  return result;
}

/**
 * removes date mask from a string
 * @param value - the masked date value
 * @returns the date without mask (only numbers)
 * @example
 * removeDateMask('15/12/2023') // returns '15122023'
 * removeDateMask('12:30') // returns '1230'
 */
export function removeDateMask(value: string): string {
  return value.replace(/\D/g, '');
}