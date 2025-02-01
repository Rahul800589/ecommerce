import React, { useState } from 'react';

export default function Profile() {
  // Initial profile data
  const [profile, setProfile] = useState({
    name: 'Rahul Kumawat',
    email: 'rahul@gmail.com',
    mobile: '1234567890',
    address: 'Jaipur',
  });

  // State to toggle between "view" and "edit" modes
  const [isEditing, setIsEditing] = useState(false);

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <section className='profile-container'>
      <article className='profile-card'>
        <header className='profile-header'>
          <div className='profile-image'>
            <img src="/images/rahul1.png" alt="Rahul Kumawat's Profile" />
          </div>
        </header>

        <div className='profile-details'>
          <h2>My Profile</h2>
          <p><strong>Name:</strong> {isEditing ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
          ) : (
            profile.name
          )}</p>

          <p><strong>Email:</strong> {isEditing ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          ) : (
            profile.email
          )}</p>

          <p><strong>Mobile:</strong> {isEditing ? (
            <input
              type="text"
              name="mobile"
              value={profile.mobile}
              onChange={handleChange}
            />
          ) : (
            profile.mobile
          )}</p>

          <p><strong>Address:</strong> {isEditing ? (
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
            />
          ) : (
            profile.address
          )}</p>

          <button className='btn-edit' type='button' onClick={toggleEdit}>
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
      </article>
    </section>
  );
}