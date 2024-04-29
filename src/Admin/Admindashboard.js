import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../services/api';
import AdminGraph from './AdminGraph';
import AdminHome from './AdminHome';

const style = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    background: '#339BD3',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
    background: 'maroon',
    color: '#fff',
    marginRight: '10px',
  },
  searchInput: {
    padding: '8px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    marginRight: '10px',
    width: '200px',
    boxSizing: 'border-box',
  },
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    const adminToken = localStorage.getItem('token');
    setAuthToken(adminToken);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await getAllUsers(authToken);
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    if (authToken) {
      fetchData();
    }
  }, [authToken]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = () => {
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(user.count).toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update the users state with filteredUsers
    setUsers(filteredUsers);
  };

  return (
    <div style={style.container}>
      <div style={style.header}>
        <div>
          <button
            style={{ ...style.button, ...(activeTab === 'home' ? { fontWeight: 'bold' } : {}) }}
            onClick={() => handleTabChange('home')}
          >
            Home
          </button>
          <button
            style={{ ...style.button, ...(activeTab === 'graph' ? { fontWeight: 'bold' } : {}) }}
            onClick={() => handleTabChange('graph')}
          >
            Graph
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={style.searchInput}
          />
          <button style={style.button} onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {activeTab === 'home' ? <AdminHome users={users} /> : <AdminGraph />}
    </div>
  );
};

export default AdminDashboard;
