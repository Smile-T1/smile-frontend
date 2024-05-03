import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

const handleSignUp = async () => {
  if (!username || !password || !confirmPassword) {
    setErrorMessage('Please fill in all fields.');
  } else if (password !== confirmPassword) {
    setErrorMessage('Passwords do not match.');
  } else {
    try {
      const responseData = await signupUser(fullName, username, password, confirmPassword, gender);
      console.log('Account created:', responseData);
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setGender(''); 
      setErrorMessage('');
    } catch (error) {
      console.log('Account creation failed:', error);
      setErrorMessage('Account creation failed. Please try again.');
    }
  }
};

  const signupUser = async (fullName, username, password, confirmPassword, gender) => {
  const url = `${VITE_SERVER_HOST}/api/auth/signup`;
  const data = {
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const responseData = await response.json();
  return responseData;
};

  return (
    <div className='signup-page'>
      <div className='signup container'>
      <h2>Sign Up</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
     <div>
      <div>
    <label>Full Name:</label>
    <input
      type="text"
      value={fullName}
      className='input-field'
      onChange={(e) => setFullName(e.target.value)}
    />
     </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          className='input-field'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          className='input-field'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          className='input-field'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} className='gender'>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      </div>
      <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
