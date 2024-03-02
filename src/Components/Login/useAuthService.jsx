import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL;
const USER_KEY = 'user';

const useAuthService = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem(USER_KEY);
  });

  const login = (username, password) => {
    fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((res) => {
        localStorage.setItem(USER_KEY, JSON.stringify(res));
        setIsLoggedIn(true);
      })
      .catch((error) => {
        // Handle login error
      });
  };

  const logout = () => {
    localStorage.removeItem(USER_KEY);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // Add any additional logic for maintaining authentication state, e.g., checking token expiration
  }, []);

  return {
    isLoggedIn,
    login,
    logout,
  };
};

export default useAuthService;