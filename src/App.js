import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminDashboard from './Admin/Admindashboard';
import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
