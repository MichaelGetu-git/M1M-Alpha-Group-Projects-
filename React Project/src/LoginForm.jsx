import React, { useState } from 'react';
import ProfilePage from './ProfilePage';
import userData from './userData.json';
import './App.css';

const LoginForm = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const user = userData.users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setLoggedIn(true);
      } else {
        setErrors({ login: 'Invalid email or password' });
      }
    }
  };

  if (loggedIn) {
    const user = userData.users.find(
      (user) => user.email === email && user.password === password
    );
    return <ProfilePage user={user} onLogout={() => setLoggedIn(false)} />;
  }

  return (
    
    <div className="auth-content">
      <div className="content">
        <h1 className='logo'>LOGO</h1>
        <h1 className='welcome'>React Assignment Login Page</h1>
        <div className='message'>
        <p className='intro-text'>This is the Login page for my react Assignement, it recieves email and password, checks for validity and logs in if user is found.</p>
        </div>
      </div>
      <div className='auth-form'>
        <div className='form-list'>
      <form className="login-form" onSubmit={handleLogin}>
      <h2>Login</h2>
        <div className="form-groupp">
          <label className='input-box' htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="youremail@gmail.com"
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-groupp">
          <label className='input-box' htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            placeholder="**********"
            required
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        {errors.login && <p className="error-message">{errors.login}</p>}
        <button className='btn' type="submit" 
        >Login</button>
        <button className="con-button" onClick={(e) => onFormSwitch('RegistrationForm')}>
        Don't have an account? Register Here
      </button>
    </form>
      </div>
      </div>
    </div>
  );
};

export default LoginForm;
