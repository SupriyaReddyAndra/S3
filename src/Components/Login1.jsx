import React, { useState } from 'react';

export default function Login1() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const validate = () => {
    const e = {};

    if (!email.trim()) {
      e.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        e.email = 'Enter a valid email address.';
      }
    }

    if (!password.trim()) {
      e.password = 'Password is required.';
    } else if (password.length < 8) {
      e.password = 'Password must be at least 8 characters long.';
    }

    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);

    if (Object.keys(e).length === 0) {
      setMessage('Login successful! Redirecting...');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } else {
      setMessage('');
    }
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        <h2 style={styles.loginTitle}>Login Form</h2>

        {message && <div style={styles.successMessage}>{message}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div style={styles.formGroup}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                ...styles.formInput,
                borderBottomColor: errors.email ? 'red' : '#ccc',
              }}
            />
            {errors.email && <p style={styles.errorText}>{errors.email}</p>}
          </div>

          <div style={styles.formGroup}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                ...styles.formInput,
                borderBottomColor: errors.password ? 'red' : '#ccc',
              }}
            />
            {errors.password && <p style={styles.errorText}>{errors.password}</p>}
          </div>

          <button type="submit" style={styles.loginButton}>Login</button>
        </form>

        <div style={styles.loginLinks}>
          <a href="#" style={styles.link}>Forgot Password?</a>
          <p style={styles.signupText}>
            Don’t have an account? <a href="#" style={styles.signupLink}>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  loginContainer: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to bottom, #1a1a1a, #3a3a3a)',
    fontFamily: 'Poppins, sans-serif',
  },
  loginBox: {
    backgroundColor: '#fff',
    padding: '40px',
    width: '360px',
    borderRadius: '12px',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  },
  loginTitle: {
    fontSize: '24px',
    fontWeight: 600,
    color: '#222',
    marginBottom: '30px',
  },
  formGroup: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  formInput: {
    width: '100%',
    border: 'none',
    borderBottom: '2px solid #ccc',
    padding: '10px 5px',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  errorText: {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px',
  },
  loginButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#111',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 500,
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  loginLinks: {
    marginTop: '15px',
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none',
    fontSize: '14px',
  },
  signupText: {
    marginTop: '10px',
    fontSize: '14px',
    color: '#444',
  },
  signupLink: {
    color: '#0066cc',
    textDecoration: 'none',
    fontWeight: 500,
  },
  successMessage: {
    backgroundColor: '#d4edda',
    color: '#155724',
    border: '1px solid #c3e6cb',
    borderRadius: '6px',
    padding: '10px',
    marginBottom: '15px',
    fontSize: '14px',
  },
};
