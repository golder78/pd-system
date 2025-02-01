import React, { useState } from 'react';

export function LoginPage() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isNewUser ? '/api/register' : '/api/login';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(endpoint, requestOptions);
      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || (isNewUser ? 'User registered successfully!' : 'Login successful!'));
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Server error. Please try again later.');
    }

    setFormData({ username: '', email: '', password: '' });
  };

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to right, #74ebd5, #acb6e5)',
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '0.75rem',
    borderRadius: '10px',
    cursor: 'pointer',
    border: 'none',
    width: '100%',
  };

  const toggleButtonStyle = {
    marginTop: '1rem',
    color: '#007bff',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  };

  const messageStyle = {
    color: message.includes('successful') ? 'green' : 'red',
    marginBottom: '1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          {isNewUser ? 'Create New User' : 'Login'}
        </h2>

        {message && <p style={messageStyle}>{message}</p>}

        <form onSubmit={handleSubmit}>
          {isNewUser && (
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }} htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', border: '1px solid #ddd' }}
                required
              />
            </div>
          )}

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }} htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', border: '1px solid #ddd' }}
              required
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }} htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', border: '1px solid #ddd' }}
              required
            />
          </div>

          <button type="submit" style={buttonStyle}>
            {isNewUser ? 'Register' : 'Login'}
          </button>
        </form>

        <button
          onClick={() => setIsNewUser(!isNewUser)}
          style={toggleButtonStyle}
        >
          {isNewUser ? 'Already have an account? Login' : 'Create New User'}
        </button>
      </div>
    </div>
  );
}
