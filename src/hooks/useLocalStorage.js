import { useState, useEffect } from 'react';

// Хук работает как useState, но дополнительно сохраняет значение в LocalStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Если LocalStorage недоступен, приложение продолжает работать без сохранения
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
