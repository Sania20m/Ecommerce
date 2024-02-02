// Import necessary modules
import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { AuthContext } from './AuthContext';  // Assuming you have an AuthContext for managing authentication state

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const { setAuthToken } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = response.user;

      // Retrieve the Firebase ID token
      const idToken = await user.getIdToken();

      // Set the token in context and local storage
      setAuthToken(idToken);
      localStorage.setItem('authToken', idToken);

      // Redirect to the products page on successful login
      history.push('/products');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <Link to="/products">Go to Products</Link>
    </div>
  );
};

export default LoginPage;
