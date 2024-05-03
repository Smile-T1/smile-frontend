import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setErrorMessage('Please fill in all fields.');
    } else {
      console.log('Logging in with username:', username, 'and password:', password);
      setUsername('');
      setPassword('');
      setErrorMessage('');
    }
  };

  return (

    <div className='login-page'>
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <h6 className='login-message'>Hello!  Please enter your credentials</h6>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="input-container">
        <label className="input-label">Username:</label>
        <input
          type="text"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label className="input-label">Password:</label>
        <input
          type="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
}

export default Login;