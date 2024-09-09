import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterForm.module.scss';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmpassword: '',
  });
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginSuccess, setLoginSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    if (formData.password !== formData.confirmpassword) {
      console.log('Pawword not match');
      setLoginError('Password not match');
      setLoginSuccess(null);
    }else{
      localStorage.setItem('registerFormData', JSON.stringify(formData));
      handleLogin();
    }  
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <div className={styles.formGroup}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          value={formData.confirmpassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>Register</button> 
    </form>
  );
};

export default RegisterForm;
