import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/css/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    // Używamy hooka useNavigate do przekierowania
    // 'replace: true' zapobiega dodawaniu nowej pozycji do historii przeglądarki
    navigate('/admin', { replace: true });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LoginPage;