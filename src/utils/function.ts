/**
 * function utility functions
 */

/**
 * debounces a function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: any;
  
  return function(this: any, ...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * throttles a function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * memoizes a function
 */
export function memoize<T extends (...args: any[]) => any>(
  func: T
): T {
  const cache = new Map();
  
  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = func(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

/**
 * creates a function that calls multiple functions in sequence
 */
export function compose<T>(...funcs: Array<(arg: T) => T>): (arg: T) => T {
  return (arg: T) => funcs.reduceRight((acc, func) => func(acc), arg);
}

/**
 * creates a function that pipes value through multiple functions
 */
export function pipe<T>(...funcs: Array<(arg: T) => T>): (arg: T) => T {
  return (arg: T) => funcs.reduce((acc, func) => func(acc), arg);
}

/**
 * retries a function with exponential backoff
 */
export async function retry<T>(
  func: () => Promise<T>,
  attempts: number = 3,
  delay: number = 1000
): Promise<T> {
  try {
    return await func();
  } catch (error) {
    if (attempts <= 1) {
      throw error;
    }
    
    await new Promise(resolve => setTimeout(resolve, delay));
    return retry(func, attempts - 1, delay * 2);
  }
}

/**
 * creates a curried version of a function
 */
export function curry<T extends (...args: any[]) => any>(func: T): any {
  return function curried(this: any, ...args: any[]): any {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    
    return (...nextArgs: any[]) => curried.apply(this, [...args, ...nextArgs]);
  };
}

/**
 * executes functions in parallel with concurrency limit
 */
export async function parallelLimit<T>(
  tasks: Array<() => Promise<T>>,
  limit: number
): Promise<T[]> {
  const results: T[] = [];
  const executing: Promise<void>[] = [];
  
  for (const [index, task] of tasks.entries()) {
    const promise = task().then(result => {
      results[index] = result;
    });
    
    executing.push(promise);
    
    if (executing.length >= limit) {
      await Promise.race(executing);
      executing.splice(executing.findIndex(p => p === promise), 1);
    }
  }
  
  await Promise.all(executing);
  return results;
}