import React from 'react';

const ProfilePage = ({ user, onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="auth-content">
     <div className="content">
        <h1 className='welcome'>React Assignment Profile Page</h1>
        <div className='message'>
        <p className='intro-text'>This is the Profile page for my react Assignement, it Shows email and password of any User who has logged in into there account.</p>
        </div>
      </div>
    <div className="auth-form">
      <div className='data-list'>
      <h2 >Profile</h2>
      <div className='Profile-data'>
      <div className="profile-info">
        <label className="profile-label">Full Name:</label>
        <span className="profile-value">{user.fullName}</span>
      </div>
      <div className="profile-info">
        <label className="profile-label">Email:</label>
        <span className="profile-value">{user.email}</span>
      </div>
      <div className="profile-info">
        <label className="profile-label">Sex:</label>
        <span className="profile-value">{user.sex}</span>
      </div>
      <div className="profile-info">
        <label className="profile-label">Age:</label>
        <span className="profile-value">{user.age}</span>
      </div>
      <div className="profile-info">
        <label className="profile-label">Country:</label>
        <span className="profile-value">{user.country}</span>
      </div>
      <button className="profile-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
    </div>
    </div>
    </div>
  );
};

export default ProfilePage;
