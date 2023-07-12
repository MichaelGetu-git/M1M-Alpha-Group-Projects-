import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import ProfilePage from './ProfilePage';
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState('LoginForm');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <header className='header'>     
        <n className="navigation">
          <h1>LOGO</h1>
        <ul className="nav-list">
          <li>
            <button className="nav-button" onClick={() => toggleForm('LoginForm')}>
              Login
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={() => toggleForm('RegistrationForm')}>
              Register
            </button>
          </li>
        </ul>
      </n>
      </header>
      <div className="body">
        {currentForm === 'LoginForm' ? (
          <LoginForm onFormSwitch={toggleForm} />
        ) : (
          <RegistrationForm onFormSwitch={toggleForm} />
        )}
      </div>
    </div>
  );
}

export default App;
