
import { useState, useEffect, useCallback } from 'react';

// By incrementing this version, we can force all users to get the new initialData.
const DATA_VERSION = 2; 

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        const { version, data } = JSON.parse(item);
        // If the version in local storage is old or doesn't exist, use the new initial data.
        if (version !== DATA_VERSION) {
          console.log("Data version mismatch. Updating local storage.");
          setStoredValue(initialValue);
          window.localStorage.setItem(key, JSON.stringify({ version: DATA_VERSION, data: initialValue }));
        } else {
          setStoredValue(data);
        }
      } else {
        // No item in local storage, so use initialValue and store it with the current version.
        setStoredValue(initialValue);
        window.localStorage.setItem(key, JSON.stringify({ version: DATA_VERSION, data: initialValue }));
      }
    } catch (error) {
      console.log("Error reading from local storage:", error);
      // If there's an error (e.g., parsing old format), reset to new initial data.
      setStoredValue(initialValue);
      window.localStorage.setItem(key, JSON.stringify({ version: DATA_VERSION, data: initialValue }));
    }
  // We only want this to run once on mount to check the stored data.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        // Store the value along with the current data version.
        window.localStorage.setItem(key, JSON.stringify({ version: DATA_VERSION, data: valueToStore }));
      }
    } catch (error) {
      console.log("Error writing to local storage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}
