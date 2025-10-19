/**
 * array utility functions for various operations and transformations
 */

/**
 * removes duplicates from array
 * @param array - the array to remove duplicates from
 * @returns array with unique values
 * @example
 * unique([1, 2, 2, 3, 3, 4]) // returns [1, 2, 3, 4]
 * unique(['a', 'b', 'a', 'c']) // returns ['a', 'b', 'c']
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * removes duplicates from array based on a specific property
 * @param array - the array to process
 * @param key - the property key to check for uniqueness
 * @returns array with unique values based on the property
 * @example
 * uniqueBy([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}, {id: 1, name: 'John'}], 'id')
 * // returns [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}]
 */
export function uniqueBy<T, K extends keyof T>(array: T[], key: K): T[] {
  const seen = new Set();
  return array.filter(item => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
}

/**
 * groups array elements by a specific property
 * @param array - the array to group
 * @param key - the property key to group by
 * @returns object with grouped arrays
 * @example
 * groupBy([{type: 'fruit', name: 'apple'}, {type: 'vegetable', name: 'carrot'}], 'type')
 * // returns {fruit: [{type: 'fruit', name: 'apple'}], vegetable: [{type: 'vegetable', name: 'carrot'}]}
 */
export function groupBy<T, K extends keyof T>(array: T[], key: K): Record<string, T[]> {
  return array.reduce((groups, item) => {
    const value = String(item[key]);
    (groups[value] = groups[value] || []).push(item);
    return groups;
  }, {} as Record<string, T[]>);
}

/**
 * sorts array by a specific property
 * @param array - the array to sort
 * @param key - the property key to sort by
 * @param order - sort order ('asc' or 'desc', default: 'asc')
 * @returns new sorted array
 * @example
 * sortBy([{age: 30}, {age: 20}, {age: 40}], 'age') // returns [{age: 20}, {age: 30}, {age: 40}]
 * sortBy([{age: 30}, {age: 20}], 'age', 'desc') // returns [{age: 30}, {age: 20}]
 */
export function sortBy<T, K extends keyof T>(array: T[], key: K, order: 'asc' | 'desc' = 'asc'): T[] {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    
    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });
}

/**
 * splits array into smaller chunks of specified size
 * @param array - the array to chunk
 * @param size - size of each chunk
 * @returns array of chunks
 * @example
 * chunk([1, 2, 3, 4, 5, 6], 2) // returns [[1, 2], [3, 4], [5, 6]]
 * chunk(['a', 'b', 'c', 'd', 'e'], 3) // returns [['a', 'b', 'c'], ['d', 'e']]
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * flattens nested arrays into a single array
 * @param array - the array to flatten
 * @returns flattened array
 * @example
 * flatten([1, [2, 3], [4, [5, 6]]]) // returns [1, 2, 3, 4, 5, 6]
 * flatten(['a', ['b', 'c'], 'd']) // returns ['a', 'b', 'c', 'd']
 */
export function flatten<T>(array: (T | T[])[]): T[] {
  return array.reduce<T[]>((flat, item) => {
    return flat.concat(Array.isArray(item) ? flatten(item as any) : [item]);
  }, []);
}

/**
 * gets a random element from array
 * @param array - the array to sample from
 * @returns random element or undefined if array is empty
 * @example
 * sample([1, 2, 3, 4, 5]) // returns random element like 3
 * sample(['red', 'blue', 'green']) // returns random color
 */
export function sample<T>(array: T[]): T | undefined {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * shuffles array elements randomly
 * @param array - the array to shuffle
 * @returns new shuffled array
 * @example
 * shuffle([1, 2, 3, 4, 5]) // returns shuffled array like [3, 1, 5, 2, 4]
 * shuffle(['a', 'b', 'c']) // returns shuffled array like ['c', 'a', 'b']
 */
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * creates array of numbers within a specified range
 * @param start - start number (or end if only one parameter)
 * @param end - end number (optional)
 * @param step - step increment (default: 1)
 * @returns array of numbers in range
 * @example
 * range(5) // returns [0, 1, 2, 3, 4]
 * range(2, 5) // returns [2, 3, 4]
 * range(0, 10, 2) // returns [0, 2, 4, 6, 8]
 */
export function range(start: number, end?: number, step: number = 1): number[] {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  
  const result: number[] = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

/**
 * finds intersection of two arrays (common elements)
 * @param array1 - first array
 * @param array2 - second array
 * @returns array containing elements present in both arrays
 * @example
 * intersection([1, 2, 3], [2, 3, 4]) // returns [2, 3]
 * intersection(['a', 'b'], ['b', 'c']) // returns ['b']
 */
export function intersection<T>(array1: T[], array2: T[]): T[] {
  return array1.filter(item => array2.includes(item));
}

/**
 * finds difference between two arrays (elements in first but not in second)
 * @param array1 - first array
 * @param array2 - second array
 * @returns array containing elements from array1 not present in array2
 * @example
 * difference([1, 2, 3], [2, 3, 4]) // returns [1]
 * difference(['a', 'b', 'c'], ['b']) // returns ['a', 'c']
 */
export function difference<T>(array1: T[], array2: T[]): T[] {
  return array1.filter(item => !array2.includes(item));
}