import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signin } from "../services/api"; // Import your login API function

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Set height to 100vh for vertical centering
  },
  form: {
    maxWidth: '400px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
  },
  signInButton: {
    background: 'green',
    color: '#fff',
    marginRight: '10px',
  },
  signUpButton: {
    background: 'red',
    color: '#fff',
    marginLeft: '10px',
  },
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignIn = async () => {
    try {
      const response = await signin(formData); // Call the signin API function with form data
      console.log("Login successful:", response);

      // Store user data and token in local storage
      localStorage.setItem('user', JSON.stringify(response.user));
      localStorage.setItem('token', response.token);

      // Check user's role and redirect accordingly
      if (response.user.role === 'admin') {
        navigate('/admin'); // Redirect to AdminDashboard if the user's role is admin
      } else {
        navigate('/profile'); // Redirect to ProfilePage for other roles
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <div style={style.container}>
      <div style={style.form}>
        <h2>Login</h2>
        <input type="email" style={style.input} placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
        <input type="password" style={style.input} placeholder="Password" name="password" value={formData.password} onChange={handleChange} />

        <div style={style.row}>
          <button style={{ ...style.button, ...style.signInButton }} onClick={handleSignIn}>Sign In</button>
          <button style={{ ...style.button, ...style.signUpButton }} onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
