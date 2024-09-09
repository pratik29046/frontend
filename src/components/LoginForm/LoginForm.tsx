import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetUserAuthRequestVo } from '../../services';
import { authenticateUser } from '../../services/authService';
import Loader from '../Loader/Loader';
import './LoginForm.module.scss';


const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ssoFlag, setssoFlag] = useState('Y');
  const [email, setEmail] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginSuccess, setLoginSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);
      console.log('Inside handleLogin:: ' + username, password, email);
      const authData: GetUserAuthRequestVo = { username, password, email};
      const data = await authenticateUser(authData);
      console.log('User authenticated:', data);
      setLoginError(null);
      setLoginSuccess('Login successful! Redirecting...');
      setTimeout(() => {
        setLoading(false);
        navigate('/profile');
      }, 2000);
    } catch (err) {
      console.error('Invalid credentials', err);
      setLoginError('Invalid username or password');
      setLoginSuccess(null);
      setLoading(false);
    }
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const savedData = localStorage.getItem('registerFormData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      if (
        username === parsedData.username &&
        password === parsedData.password
      ) {

        setEmail(parsedData.email);
        handleLogin();
        // setLoginError(null);
        // setLoginSuccess('Login successful! Redirecting...');
        // setTimeout(() => {
        //   setLoading(false);
        //   navigate('/');
        // }, 2000);
      } else {
        console.log('Invalid credentials');
        setLoginError('Invalid username or password');
        setLoginSuccess(null);
        setLoading(false);
      }
    } else {
      console.log('No registration data found');
      setLoginError('No registration data found');
      setLoginSuccess(null);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Loader />}
      <form className="container mt-4" onSubmit={handleSubmit}>
        {loginError && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            {loginError}
            <button type="button" className="btn-close" aria-label="Close" onClick={() => setLoginError(null)}></button>
          </div>
        )}
        {loginSuccess && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            {loginSuccess}
            <button type="button" className="btn-close" aria-label="Close" onClick={() => setLoginSuccess(null)}></button>
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navigate('/register')}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
