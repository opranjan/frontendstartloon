import React from 'react';
import { FiLock, FiMail, FiUser } from 'react-icons/fi'; // Import icons from react-icons library
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const userData = JSON.parse(localStorage.getItem('user'));

  const style = {
    container: {
      width: '100vw', // Set width to 100vw (viewport width)
      height: '100vh', // Set height to 100vh (viewport height)
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f8f8',
      padding: '20px',
      /* Remove overflow: auto to disable scrolling */
    },
    heading: {
      fontSize: '24px',
      color: '#333',
      marginBottom: '20px',
    },
    card: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    icon: {
      marginRight: '20px',
    },
    iconSmall: {
      marginRight: '8px',
    },
    info: {
      marginBottom: '8px',
    },
    link: {
      marginTop: '20px',
      color: '#007bff',
      textDecoration: 'none',
    },
  };

  return (
    <div style={style.container}>
      <h1 style={style.heading}>Welcome to Your Profile</h1>
      <div style={style.card}>
        <div style={style.icon}>
          <FiUser size={48} />
        </div>
        <div style={style.info}>
          <p>
            <FiUser style={style.iconSmall} />
            Name: {userData.name}
          </p>
          <p>
            <FiMail style={style.iconSmall} />
            Email: {userData.email}
          </p>
          <p>
            <FiLock style={style.iconSmall} />
            Gender: {userData.gender}
          </p>
        </div>
      </div>
      <Link to="/" style={style.link}>Back to Dashboard</Link>
    </div>
  );
};

export default ProfilePage;
