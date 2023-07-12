import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

export const RegistrationForm = ({ onFormSwitch }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!fullName) {
      newErrors.fullName = 'Full Name is required';
      isValid = false;
    }

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!sex) {
      newErrors.sex = 'Sex is required';
      isValid = false;
    }

    if (!age) {
      newErrors.age = 'Age is required';
      isValid = false;
    } else if (isNaN(age) || age <= 0) {
      newErrors.age = 'Invalid age';
      isValid = false;
    }

    if (!country) {
      newErrors.country = 'Country is required';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
      isValid = false;
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Create a new user object
      const newUser = {
        fullName,
        email,
        sex,
        age,
        country,
        password,
      };

      // Send the registration data to the server
      axios
        .post('/register', newUser)
        .then((response) => {
          // Registration successful
          alert(response.data);
          setFullName('');
          setEmail('');
          setSex('');
          setAge('');
          setCountry('');
          setPassword('');
          setConfirmPassword('');
          setErrors({});
        })
        .catch((error) => {
          // Registration failed
          console.error('Registration error:', error);
          setErrors('An error occurred during registration');
        });
    }
  };

  return (
    <div className="auth-content">
      <div className="content">
      <h1 className='logo'>LOGO</h1>
      <h1 className='welcome'>React Assignment Registration Page</h1>
        <div className='message'>
        <p className='intro-text'>This is the Registration page for my react Assignement, it recieves email and password, age, gender, country and registers user in the system.</p>
      </div>
      </div>
      <div className="auth-form">
        <div className="form-list">      
      <form className="register-form" onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
        <div className="form-group-column">
          <div className="form-group">
            <label className='input-box' htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder='Enter your full name'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            {errors.fullName && <p>{errors.fullName}</p>}
          </div>
          <div className="form-group">
            <label className='input-box' htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder='Enter your email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          
          
          <div className="form-group">
            <label className='input-box' htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              placeholder='Enter your country name'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            {errors.country && <p>{errors.country}</p>}
          </div>
          
          <div className="form-group">
            <label className='input-box' htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              placeholder='Enter your age'
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            {errors.age && <p>{errors.age}</p>}
          </div>
        </div>
        <div className="form-group-column">
          
        <div className="form-group">
            <label className='input-box' htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p>{errors.password}</p>}
          </div>


          <div className="form-gen">
            <label className='input-box' htmlFor="sex">Sex</label>
            <select
              id="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.sex && <p>{errors.sex}</p>}
          </div>

          <div className="form-group">
            <label className='input-box' htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder='Confirm your password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </div>
        </div>
        <button className='btn' type="submit">SignUp</button>
        <button className="con-button" onClick={() => onFormSwitch('LoginForm')}>
        Already have an account? Login
      </button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default RegistrationForm;