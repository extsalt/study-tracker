
import { useState, useEffect, useCallback } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        const parsedItem = JSON.parse(item);
        // Heuristic to check if the data structure has changed.
        // This is a simple check. A more robust solution might involve versioning.
        if (Array.isArray(parsedItem) && Array.isArray(initialValue) && parsedItem.length !== initialValue.length) {
            // The number of subjects has changed, so we assume the initial data is newer.
            setStoredValue(initialValue);
            window.localStorage.setItem(key, JSON.stringify(initialValue));
        } else {
            setStoredValue(parsedItem);
        }
      } else {
        // No item in local storage, so use initialValue.
        setStoredValue(initialValue);
      }
    } catch (error) {
      console.log(error);
      setStoredValue(initialValue);
    }
  // We've intentionally left initialValue out of the dependency array to prevent re-running this on every render.
  // We're handling the update logic inside the effect itself.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}
