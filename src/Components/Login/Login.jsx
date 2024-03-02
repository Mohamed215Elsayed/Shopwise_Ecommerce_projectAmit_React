import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      fetch('https://example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => response.json())
        .then((data) => {
        })
        .catch((error) => {
        });
    } else {
      setUsernameError(username ? '' : 'Username is required');
      setPasswordError(password ? '' : 'Password is required');
    }
  };
  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    setUsernameError(value ? '' : 'Username is required');
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordError(value ? '' : 'Password is required');
  };
  return (
    <>
       <div className="container flex min-h-screen flex-col items-center pt-24">
      <div className="login-card mb-8 rounded-lg bg-yellow-100 p-8 flex flex-col gap-2">
        <p className="font-bold text-lg">
          <span className="text-yellow-600">Username: </span>
          <span className="text-accent">atuny0</span>
        </p>
        <p className="font-bold text-lg">
          <span className="text-yellow-600">Password: </span>
          <span className="text-accent">9uQFF1Lh</span>
        </p>
      </div>
      <div className="login-card mb-20 rounded-sm bg-gray-50 p-8 shadow-lg">
        <h1 className="mb-10 text-center text-2xl text-accent">Login</h1>
        <form className="flex flex-col gap-8 w-full p-100" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              className={usernameError ? 'error' : ''}
            />
            <span className="error-message">
              {usernameError}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className={passwordError ? 'error' : ''}
            />
            <span className="error-message">
              {passwordError}
            </span>
          </div>
          <button type="submit" className="btn-fill-primary">
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;

