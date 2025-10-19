/**
 * storage utility functions for browser and React Native
 */

export interface StorageAdapter {
  getItem(key: string): Promise<string | null> | string | null;
  setItem(key: string, value: string): Promise<void> | void;
  removeItem(key: string): Promise<void> | void;
  clear(): Promise<void> | void;
}

/**
 * creates a storage utility with JSON serialization
 */
export function createStorage(adapter: StorageAdapter) {
  return {
    async get<T>(key: string, defaultValue?: T): Promise<T | undefined> {
      try {
        const item = await adapter.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch {
        return defaultValue;
      }
    },

    async set<T>(key: string, value: T): Promise<void> {
      try {
        await adapter.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error('Storage set error:', error);
      }
    },

    async remove(key: string): Promise<void> {
      try {
        await adapter.removeItem(key);
      } catch (error) {
        console.error('Storage remove error:', error);
      }
    },

    async clear(): Promise<void> {
      try {
        await adapter.clear();
      } catch (error) {
        console.error('Storage clear error:', error);
      }
    }
  };
}

/**
 * browser localStorage adapter
 */
export const localStorageAdapter: StorageAdapter = {
  getItem: (key: string) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(key);
    }
    return null;
  },
  setItem: (key: string, value: string) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, value);
    }
  },
  removeItem: (key: string) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(key);
    }
  },
  clear: () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.clear();
    }
  }
};

/**
 * browser sessionStorage adapter
 */
export const sessionStorageAdapter: StorageAdapter = {
  getItem: (key: string) => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return sessionStorage.getItem(key);
    }
    return null;
  },
  setItem: (key: string, value: string) => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem(key, value);
    }
  },
  removeItem: (key: string) => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem(key);
    }
  },
  clear: () => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.clear();
    }
  }
};

/**
 * memory storage adapter (fallback)
 */
export const memoryStorageAdapter: StorageAdapter = (() => {
  const store = new Map<string, string>();
  
  return {
    getItem: (key: string) => store.get(key) || null,
    setItem: (key: string, value: string) => { store.set(key, value); },
    removeItem: (key: string) => { store.delete(key); },
    clear: () => { store.clear(); }
  };
})();

/**
 * default storage instance using localStorage with memory fallback
 */
export const storage = createStorage(
  typeof window !== 'undefined' && window.localStorage 
    ? localStorageAdapter 
    : memoryStorageAdapter
);