import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';


function App() {
  const isLoggedIn = !!localStorage.getItem('user');
  return (
      <Routes>
        <Route path='/' element={ isLoggedIn ? <Navigate to='/dashboard' /> : <Login /> } />
        <Route path='/dashboard' element={ isLoggedIn ? <Dashboard /> : <Navigate to='/' /> } />
      </Routes>
  );
}

export default App
