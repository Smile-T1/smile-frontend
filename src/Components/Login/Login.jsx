import React, { useState } from "react";
import "./Login.css";
import { loginUser } from "./LoginEndpoints";
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  function Toast(message, state) {
    toast({
      description: message,
      status: state,
      duration: 3000,
      isClosable: true,
    })
  }


  const handleLogin = async () => {
    const { status, message, data } = await loginUser(username, password);
    if (status === 'error') {
      Toast(message, status);
    }
    const userAccess = data.userAccess;
    const token = data.token;
    localStorage.setItem("token", token);
    localStorage.setItem('userAccess', userAccess);
    localStorage.setItem('username', username);
    if (userAccess === 'Patient') {
      navigate('/patient/dashboard');
    } else if (userAccess === 'Admin') {
      navigate('/admin/dashboard');
    } else if (userAccess === 'Doctor') {
      navigate('/doctor/dashboard');
    }
    Toast(message, status);
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-header">Login</h2>
        <h6 className="login-message">Hello! Please enter your credentials</h6>
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
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
export default Login;
