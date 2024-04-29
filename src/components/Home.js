import React from 'react';
import RegistrationForm from './RegistrationForm';

const style = {
  container: {
    width: '100%',
    height: '100vh', // Set to viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
  formContainer: {
    maxWidth: '400px', // Set maximum width for the form container
    width: '100%', // Take full width within the parent container
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center',
  },
};

const Home = () => {
  return (
    <div style={style.container}>
      <div style={style.formContainer}>
        <h1 style={style.heading}>Welcome </h1>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Home;
