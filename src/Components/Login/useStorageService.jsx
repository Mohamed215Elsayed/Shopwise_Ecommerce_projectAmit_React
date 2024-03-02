import React from 'react';

const useStorageService = () => {
  const getStorageValue = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
  };

  const setStorageValue = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const removeFromStorage = (key) => {
    localStorage.removeItem(key);
  };

  const clearStorage = () => {
    localStorage.clear();
  };

  return {
    getStorageValue,
    setStorageValue,
    removeFromStorage,
    clearStorage,
  };
};

export default useStorageService;