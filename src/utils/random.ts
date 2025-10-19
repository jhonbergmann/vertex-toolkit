/**
 * random utility functions
 */

/**
 * generates random string
 */
export function randomString(length: number = 10, charset: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}

/**
 * generates random number between min and max
 */
export function randomNumber(min: number = 0, max: number = 100): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * generates random float between min and max
 */
export function randomFloat(min: number = 0, max: number = 1): number {
  return Math.random() * (max - min) + min;
}

/**
 * generates random boolean
 */
export function randomBoolean(): boolean {
  return Math.random() < 0.5;
}

/**
 * generates UUID v4
 */
export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * generates random hex color
 */
export function randomHexColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

/**
 * generates random RGB color
 */
export function randomRGBColor(): { r: number; g: number; b: number } {
  return {
    r: randomNumber(0, 255),
    g: randomNumber(0, 255),
    b: randomNumber(0, 255)
  };
}

/**
 * generates random date between two dates
 */
export function randomDate(start: Date = new Date(2020, 0, 1), end: Date = new Date()): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

/**
 * selects random element from array with weights
 */
export function weightedRandom<T>(items: T[], weights: number[]): T {
  if (items.length !== weights.length) {
    throw new Error('Items and weights arrays must have the same length');
  }

  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  let random = Math.random() * totalWeight;

  for (let i = 0; i < items.length; i++) {
    random -= weights[i];
    if (random <= 0) {
      return items[i];
    }
  }

  return items[items.length - 1];
}