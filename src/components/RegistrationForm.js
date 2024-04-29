import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from "../services/api";

const style = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
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
    background: 'red',
    color: '#fff',
    marginRight: '10px',
  },
  signUpButton: {
    background: 'green',
    color: '#fff',
    marginLeft: '10px',
  },
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = async () => {
    try {
      const response = await signup(formData);
      console.log("Signup successful:", response);
      // Handle success, such as redirecting to a new page or displaying a success message
      navigate('/login'); // Redirect to login page after successful signup
    } catch (error) {
      console.error("Signup failed:", error.message);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <div style={style.container}>
      <input type="text" style={style.input} placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
      <input type="email" style={style.input} placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
      <input type="password" style={style.input} placeholder="Password" name="password" value={formData.password} onChange={handleChange} />

      <div style={style.row}>
        <span>Gender:</span>
        <div>
          <label style={{ marginRight: '10px' }}>
            <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
          </label>
        </div>
      </div>

      <div style={style.row}>
        <button style={{ ...style.button, ...style.signInButton }} onClick={() => navigate('/login')}>Sign In</button>
        <button style={{ ...style.button, ...style.signUpButton }} onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default RegistrationForm;
